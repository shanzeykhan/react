import React, { useState, useRef } from "react";

const UseRef = () => {
  const [Seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);
  const userData = useRef({ name: "john", age: 20 });

  const updateAge = () => {
    userData.current.age += 1;
    console.log(userData.current);
  };

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setSeconds((Seconds) => (Seconds = Seconds + 1));
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  renderCount.current += 1;

  return (
    <div>
      <p>Count: {count}</p>
      <p>Render times: {renderCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <h3>Time: {Seconds}s</h3>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <br></br>
      <br></br>

      <button onClick={updateAge}>Increase Age</button>
    </div>
  )
}

export default UseRef;
