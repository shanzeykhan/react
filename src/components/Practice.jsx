import React from 'react'
import { useContext } from 'react'
import CounterContext from '../providers/context'

const Practice = () => {
     const {count, setCount, counter} = useContext(CounterContext)

  return (
    <div>
        <p className='text-xl font-bold'>PRACTICE</p>
        <h2>Count: {count}</h2>
        <button onClick={()=>{setCount(count+1)}}>INCREASE</button><br></br>
        <button onClick={counter}>DECREASE</button>

    </div>
  )
}

export default Practice;