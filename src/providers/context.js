import React from 'react'
import { createContext } from 'react'
import { useContext } from 'react';



export const CounterContext = createContext();
// const context = () => {

// const [count, setCount] = useState(0);

//   return (
//     <CounterContext.Provider value={count}>
//     <div>context</div>
//     </CounterContext.Provider>
//   )


export default context


// import React, { createContext, useState } from 'react';

// // 1. Create the context outside the component
// export const CounterContext = createContext();

// const CounterProvider = ({ children }) => {
//   const [count, setCount] = useState(0);

//   return (
//     <CounterContext.Provider value={{ count, setCount }}>
//       {children}
//     </CounterContext.Provider>
//   );
// };

// export default CounterProvider;





// import React, { useContext } from 'react';
// import { CounterContext } from './CounterProvider'; // adjust path as needed

// const CounterDisplay = () => {
//   const { count, setCount } = useContext(CounterContext);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// };
