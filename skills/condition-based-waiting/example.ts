// Complete implementation of condition-based waiting utilities
// From: Lace test infrastructure improvements (2025-10-03)
// Context: Fixed 15 flaky tests by replacing arbitrary timeouts

import type { ThreadManager } from '~/threads/thread-manager';
import type { LaceEvent, LaceEventType } from '~/threads/types';

type WaitResult<T> = { done: true; value: T; timeoutMessage?: string } | { done: false; timeoutMessage?: string };

const createAbortError = (signal?: AbortSignal) => {
  const reason = signal?.reason;
  if (reason instanceof Error) return reason;

  const error = new Error(reason ? String(reason) : 'Aborted');
  error.name = 'AbortError';
  return error;
};

function runWaiter<T>(
  description: string,
  timeoutMs: number,
  signal: AbortSignal | undefined,
  check: () => WaitResult<T>,
  pollIntervalMs = 10
): Promise<T> {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    let timeoutId: ReturnType<typeof setTimeout>;

    const cleanup = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      signal?.removeEventListener('abort', onAbort);
    };

    const fail = (err: Error) => {
      cleanup();
      reject(err);
    };

    const onAbort = () => fail(createAbortError(signal));

    if (signal?.aborted) {
      fail(createAbortError(signal));
      return;
    }

    signal?.addEventListener('abort', onAbort);

    const poll = () => {
      let result: WaitResult<T>;

      try {
        result = check();
      } catch (error) {
        const err = error instanceof Error ? error : new Error(String(error));
        fail(err);
        return;
      }

      if (result.done) {
        cleanup();
        resolve(result.value);
        return;
      }

      if (Date.now() - startTime > timeoutMs) {
        fail(new Error(result.timeoutMessage ?? `Timeout waiting for ${description} after ${timeoutMs}ms`));
        return;
      }

      timeoutId = setTimeout(poll, pollIntervalMs);
    };

    poll();
  });
}

/**
 * Wait for a specific event type to appear in thread
 *
 * @param threadManager - The thread manager to query
 * @param threadId - Thread to check for events
 * @param eventType - Type of event to wait for
 * @param timeoutMs - Maximum time to wait (default 5000ms)
 * @returns Promise resolving to the first matching event
 *
 * Example:
 *   await waitForEvent(threadManager, agentThreadId, 'TOOL_RESULT');
 */
export function waitForEvent(
  threadManager: ThreadManager,
  threadId: string,
  eventType: LaceEventType,
  timeoutMs = 5000,
  signal?: AbortSignal
): Promise<LaceEvent> {
  return runWaiter(`${eventType} event`, timeoutMs, signal, () => {
    const events = threadManager.getEvents(threadId);
    const event = events.find((e) => e.type === eventType);

    if (event) {
      return { done: true, value: event };
    }

    return { done: false };
  });
}

/**
 * Wait for a specific number of events of a given type
 *
 * @param threadManager - The thread manager to query
 * @param threadId - Thread to check for events
 * @param eventType - Type of event to wait for
 * @param count - Number of events to wait for
 * @param timeoutMs - Maximum time to wait (default 5000ms)
 * @returns Promise resolving to all matching events once count is reached
 *
 * Example:
 *   // Wait for 2 AGENT_MESSAGE events (initial response + continuation)
 *   await waitForEventCount(threadManager, agentThreadId, 'AGENT_MESSAGE', 2);
 */
export function waitForEventCount(
  threadManager: ThreadManager,
  threadId: string,
  eventType: LaceEventType,
  count: number,
  timeoutMs = 5000,
  signal?: AbortSignal
): Promise<LaceEvent[]> {
  if (count <= 0) {
    throw new Error('count must be a positive integer');
  }

  return runWaiter(`${count} ${eventType} events`, timeoutMs, signal, () => {
    const events = threadManager.getEvents(threadId);
    const matchingEvents = events.filter((e) => e.type === eventType);

    if (matchingEvents.length >= count) {
      return { done: true, value: matchingEvents.slice(0, count) };
    }

    return {
      done: false,
      timeoutMessage: `Timeout waiting for ${count} ${eventType} events after ${timeoutMs}ms (got ${matchingEvents.length})`
    };
  });
}

/**
 * Wait for an event matching a custom predicate
 * Useful when you need to check event data, not just type
 *
 * @param threadManager - The thread manager to query
 * @param threadId - Thread to check for events
 * @param predicate - Function that returns true when event matches
 * @param description - Human-readable description for error messages
 * @param timeoutMs - Maximum time to wait (default 5000ms)
 * @returns Promise resolving to the first matching event
 *
 * Example:
 *   // Wait for TOOL_RESULT with specific ID
 *   await waitForEventMatch(
 *     threadManager,
 *     agentThreadId,
 *     (e) => e.type === 'TOOL_RESULT' && e.data.id === 'call_123',
 *     'TOOL_RESULT with id=call_123'
 *   );
 */
export function waitForEventMatch(
  threadManager: ThreadManager,
  threadId: string,
  predicate: (event: LaceEvent) => boolean,
  description: string,
  timeoutMs = 5000,
  signal?: AbortSignal
): Promise<LaceEvent> {
  return runWaiter(description, timeoutMs, signal, () => {
    const events = threadManager.getEvents(threadId);
    const event = events.find(predicate);

    if (event) {
      return { done: true, value: event };
    }

    return { done: false };
  });
}

// Usage example from actual debugging session:
//
// BEFORE (flaky):
// ---------------
// const messagePromise = agent.sendMessage('Execute tools');
// await new Promise(r => setTimeout(r, 300)); // Hope tools start in 300ms
// agent.abort();
// await messagePromise;
// await new Promise(r => setTimeout(r, 50));  // Hope results arrive in 50ms
// expect(toolResults.length).toBe(2);         // Fails randomly
//
// AFTER (reliable):
// ----------------
// const messagePromise = agent.sendMessage('Execute tools');
// await waitForEventCount(threadManager, threadId, 'TOOL_CALL', 2); // Wait for tools to start
// agent.abort();
// await messagePromise;
// await waitForEventCount(threadManager, threadId, 'TOOL_RESULT', 2); // Wait for results
// expect(toolResults.length).toBe(2); // Always succeeds
//
// Result: 60% pass rate → 100%, 40% faster execution
