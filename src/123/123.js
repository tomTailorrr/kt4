import React, { useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(5);
  const incrementCount = (count) => {
    for (let i = 0; i < 7; i++) {
      setCount((prevCount) => {
        const newCount = prevCount + 1;
        console.log(newCount);
        if (newCount > 100) {
          return prevCount;
        }
        return newCount;
      });
      if (count() > 100) {
        break;
      }
    }
  };

  return (
    <div>
      <h1> Счёт: {count} </h1>
      <button onClick={incrementCount}>Прирост</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

export default App;
