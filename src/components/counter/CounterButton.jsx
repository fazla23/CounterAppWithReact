import { useState } from 'react';
import { PropTypes} from 'prop-types'
import './Counter.css'

export default function CounterButton({by,incrementCount,decrementCount}){
    //useState returns an array where first array element is state value and second element is the function to update value
    //[0,f] -> Array, first element is value 0, second element is function
    const [count,setCount] = useState(0); 

    function incrementCounterFunction(){
        setCount(count+by);
        incrementCount(by);
        console.log(count);
    }

    function decrementCounterFunction(){
        setCount(count-by);
        decrementCount(by);
        console.log(count);
    }

    return (
        <div className="Counter">
            {/* <span className="Count">{count}</span> */}
            <div>
                <button className="CounterButton" onClick={()=>incrementCounterFunction()}>+{by}</button>
                <button className="CounterButton" onClick={decrementCounterFunction}>-{by}</button>
            </div>
        </div>
    );
}

CounterButton.propTypes = {
    by : PropTypes.number
}

CounterButton.default = {
    by : 1
}