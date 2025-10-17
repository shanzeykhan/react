import React, { useState } from "react";
import { useContext } from "react";
import CounterContext from "../providers/context";
import { useMemo } from "react";
import { useCallback } from "react";
import { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return state + 1;
      break;
    case "decrease":
      return state - 1;
      break;
    case "increase2":
      return state + 4;
      break;
    case "decrease2":
      return state - 4;
      break;
    case "reset":
      return initialState;
      break;
    default:
      return state;
      break;
  }
};

/////////////////////////////////////
const Practice = () => {
  const { count, setCount, counter } = useContext(CounterContext);

////////////////////////////////////////////////////////
  const [multiple, setMultiple] = useState(1);
  const [age, setAge] = useState(20);

  const multipleFunc = useMemo(() => {
    console.log("Calculating...");
    const result = multiple * 2;
    console.log(result);
    return result;
  }, [multiple]);

  const fun = () => {
    console.log("Rendering....");
  };

  const calculateAge = () => {
    console.log("Calculating age...");
    const currentAge = age + 1;
    console.log(currentAge);
    return currentAge;
  };

  const increment = useCallback(() => {
    console.log("Increment Function Call");
    setCount(count + 1);
  }, [count]);

  //////////////////////////////////////////
  const [state, dispatch] = useReducer(reducer, initialState);



  
  return (
    <div>
      <p className="text-xl font-bold">PRACTICE</p>
      <h2>Count: {count}</h2>
      <button
        // onClick={() => { console.log("Increment");
        //   setCount(count + 1); }}
        onClick={increment}
      >
        INCREASE
      </button>
      <br></br>
      <button onClick={counter}>DECREASE</button>
      <br></br>
      <br></br>
      <h2>Multiple: {multipleFunc}</h2>
      <button
        onClick={() => {
          setMultiple(multipleFunc);
        }}
      >
        Multiply using Memo
      </button>
      <br></br> <br></br>
      <button
        onClick={() => {
          setAge(calculateAge);
        }}
      >
        Age : {age}
      </button>
      {/* ////////////////////////////// */}
      <br></br>
      <br></br>
      <p className="text-xl font-bold">UseReducer</p>
      <p> Number : {state}</p>
      <button
        onClick={() => {
          dispatch({type: "increase"});
        }}
      >
        Increase
      </button>
      <br></br>
      <button
        onClick={() => {
          dispatch({type: "decrease"});
        }}
      >
        Decrease
      </button>
      <br></br>
      <button
        onClick={() => {
          dispatch({type: "increase2"});
        }}
      >
        Increase by 4
      </button>
      <br></br>
      <button
        onClick={() => {
          dispatch({type: "decrease2"});
        }}
      >
        Decrease by 4
      </button>
      <br></br>
      <button
        onClick={() => {
          dispatch({type: "rest"});
        }}
      >
        Reset
      </button>
      
    </div>
  );
};

export default Practice;
