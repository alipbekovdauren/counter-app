import React, { Fragment, useState } from "react";
import "./App.css";

const App = () => {
  let [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const decrement = () => {
    setCount((count = 0));
  };

  return (
    <Fragment>
      <header>
        <h1>Counter App</h1>
      </header>
      <p>Count равен {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={resetCount}>-1</button>
      <button onClick={decrement}>Сбросить</button>
    </Fragment>
  );
};

export default App;
