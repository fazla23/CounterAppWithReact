import { useState } from 'react';
import './Counter.css'
import CounterButton from './CounterButton';

export default function Counter() {

    const [count,setCount] = useState(0);

    function incrementParentCounterFunction(by){
        setCount(count + by)
    }

    function decrementParentCounterFunction(by){
        setCount(count - by)
    }

    function resetFunction(){
        setCount(0)
    }

    return (
      <>
        <span className='totalCount'>{count}</span>
        <CounterButton by={1} incrementCount ={incrementParentCounterFunction} decrementCount={decrementParentCounterFunction}/>
        <CounterButton by={2} incrementCount ={incrementParentCounterFunction} decrementCount={decrementParentCounterFunction}/>
        <CounterButton by={5} incrementCount ={incrementParentCounterFunction} decrementCount={decrementParentCounterFunction}/>
        <button className="ResetButton" onClick={resetFunction}> Reset </button>
      </>
    );
  }

 