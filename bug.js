```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs on every render, including the initial render.
    console.log('Count:', count); // This will log 0, then 1, then 2, etc.
    return () => {
      console.log('Cleanup function ran'); // Never runs on unmount
    };
  }, [count]); // Add count to the dependency array to prevent infinite loop

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```