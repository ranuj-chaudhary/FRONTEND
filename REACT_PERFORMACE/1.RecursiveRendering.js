/*
- How react renders components?

Three Phases of the React Component Lifecycle (Function Component with Hooks)

## 1) Render Phase
React invokes the component function to generate the new Virtual DOM.

Triggered when:

--> Props or state change

--> Parent re-renders

--> Initial mount

Inside this phase:

--> JSX is evaluated.

--> Conditional rendering happens based on current props/state.

--> React creates a new Virtual DOM tree from the JSX.

--> Pure functions only — no side effects (no DOM access, no async work).

--> Old Virtual DOM and new Virtual DOM are passed to the reconciliation phase.

✅ Key Points:

useState, useMemo, and useCallback are evaluated here.
Note: Why useState, useMemo and useCallback Evaluated here?

i) useState

During render:

React reads the current state value.

If a setState call happened earlier, the new state value is used.

Reason it runs in render phase:

Your component returns JSX based on the current state, so React must know the state during rendering.

ii) useMemo
Purpose: Memoize expensive computations.

During render:

React checks dependencies.

If they changed, recalculate the value.

If not, return the memoized value.

Reason it runs in render phase:

The result of useMemo is used inside render logic or JSX, so it must be available before render completes.
No real DOM updates or effects happen here.

This phase can be paused, aborted, or restarted by React (especially in concurrent mode).

iii). useCallback

Purpose: Memoize a function reference.

During render:

React checks dependencies.

If they changed, create a new function.

If not, reuse the previous function.

Reason it runs in render phase:

The memoized function is often passed to child components or event handlers, which are defined in JSX.

🧠 Summary: useCallback must run during render because it influences the component tree structure or props.

## 2) Reconciliation Phase
React compares the old Virtual DOM with the new Virtual DOM.

Uses a diffing algorithm to find the minimal set of changes (called "patches").

This step is pure calculation — no actual DOM changes yet.

✅ Key Points:

Identifies what needs to change (add, update, remove DOM nodes).

Prepares a "mutation list" to pass to the commit phase.

Can skip this if React determines nothing changed (e.g., via React.memo or shouldComponentUpdate in class components).

## 3) Commit Phase
React applies all changes to the actual DOM.

The browser paints the updates on the screen.

Side effects run after this — such as:

useEffect

useLayoutEffect

componentDidMount, componentDidUpdate (in class components)

Refs are updated during this phase.

Any cleanup from previous effects (via return of useEffect) runs before new effects.

✅ Key Points:

This phase must be fast — slow effects can block rendering.

useLayoutEffect runs before the browser paints, and blocks paint.

useEffect runs after paint, asynchronously.

🧠 Extra Learning Tips:
In Concurrent React, the render phase can be paused, interrupted, or restarted — this allows for smoother UI.

The commit phase is synchronous — once started, it cannot be interrupted.

Render ≠ Commit: Just because a component rendered doesn’t mean it committed. This is important in understanding
performance and async rendering.

🚦Final Summary Table:
Phase	What Happens Side Effects? DOM Changes?
Render	Create new Virtual DOM from JSX	❌ No	❌ No
Reconciliation	Diff old vs new Virtual DOM	❌ No	❌ No
Commit	Apply changes to Real DOM, run effects	✅ Yes	✅ Yes

*/
