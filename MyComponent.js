```javascript
// AppSolution.js
import React, { useState, useEffect } from 'react';
import MyComponent from './MyComponent';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <MyComponent />
    </div>
  );
}

export default App;
```