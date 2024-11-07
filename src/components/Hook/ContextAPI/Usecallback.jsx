import React, { memo, useCallback, useState } from "react";

const Button = memo(({ onclick, children }) => {
  console.log(`rendering button: ${children}`);
  return (
    <button onClick={onclick} className="btn btn-primary me-4">
      {children}
    </button>
  );
});

function UseCallback() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    console.log("increment");
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    console.log("decrement");
    setCount((prev) => prev - 1);
  }, []);

  return (
    <div className="container mt-5">
      <h2>Count: {count}</h2>
      <Button onclick={increment}>Increment</Button>
      <Button onclick={decrement}>Decrement</Button>
    </div>
  );
}

export default UseCallback;
