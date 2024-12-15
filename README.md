# React useEffect Infinite Loop Bug
This repository demonstrates a common React bug: an infinite loop caused by an incorrect `useEffect` dependency array. 

The `useEffect` hook in `bug.js` is missing the `count` variable from the dependency array. This causes the effect to run on every render, leading to an infinite loop of re-renders.

The solution, provided in `bugSolution.js`, shows how to fix the problem by including `count` in the dependency array.  This ensures the effect only runs when the `count` value changes.

This simple example highlights the importance of carefully considering and correctly specifying the dependencies of your `useEffect` hooks.  Failure to do so can result in unexpected behavior and performance issues in your React applications.