# React 18+ useEffect Cleanup Example

This repository demonstrates a common mistake in using React's `useEffect` hook, specifically the omission of a cleanup function, leading to unexpected behavior and potential performance issues in React 18 and later.

## The Problem

The `App.js` component contains a `useEffect` hook that updates the `count` state every second.  The dependency array `[count]` ensures the effect runs whenever the `count` changes. However, the absence of a cleanup function means that the effect continues to run even when the component unmounts or changes, causing an infinite loop of updates.

## The Solution

The solution involves adding a cleanup function to the `useEffect` hook. This function is executed before the next effect runs or when the component unmounts.  In this case, the cleanup function could clear any intervals or timeouts started by the effect to prevent memory leaks and stop the unnecessary renders.  See `AppSolution.js` for a corrected implementation.

## How to Run

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.
4. Run `npm start` to start the development server.

Observe the console logs to see the difference in behavior between the original buggy code and the corrected version.