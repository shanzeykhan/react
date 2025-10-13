import React, { useState } from "react";
import { useContext } from "react";
import CounterContext from "../providers/context";
import { useMemo } from "react";

const Practice = () => {
  const { count, setCount, counter } = useContext(CounterContext);
  const [multiple, setMultiple] = useState(1);

  // const numGreaterThan = useMemo(() => {
  //   console.log("Calculating...");
  //   const numb = 100;
  //   for (let i = 1; i < numb; i++) {
  //     let value = i;
  //   }
  //   return multiple * 2;
  // }, [multiple]);

  return (
    <div>
      {/* <p className="text-xl font-bold">PRACTICE</p>
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        INCREASE
      </button>
      <br></br>
      <button onClick={counter}>DECREASE</button>
      <br></br>

      <h2>Multiple: {multiple}</h2>
      {/* <button onClick={setMultiple({numGreaterThan})}>Multiply</button> */}
      {/* <button onClick={setMultiple(multiple*2)}>Multiply</button> */}
    </div>
  );
};

export default Practice;
