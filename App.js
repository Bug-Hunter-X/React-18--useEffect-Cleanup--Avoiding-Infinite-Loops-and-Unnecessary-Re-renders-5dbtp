```javascript
// App.js
import React, { useState, useEffect } from 'react';
import MyComponent from './MyComponent';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect will run after every render, even on initial render.
    console.log('Effect running with count:', count);
    // Simulate an asynchronous operation (replace with your actual logic)
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
    //The return function is not used to cleanup the effect, thus the effect will run again after every render.
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
```javascript
// MyComponent.js
import React from 'react';

function MyComponent() {
  console.log('MyComponent rendered');
  return (
    <div>
      <p>This is MyComponent</p>
    </div>
  );
}

export default MyComponent;
```