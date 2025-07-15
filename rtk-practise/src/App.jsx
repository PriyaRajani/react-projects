import {useDispatch,useSelector} from 'react-redux'
import './App.css'
import { decrement, increment,reset,incrementByAmount } from './features/counter/counterSlice';
import { useState } from 'react';

function App() {
  const [amount,setAmount] = useState(0)
 const count = useSelector(state=>state.counter.value);
 const dispatch = useDispatch();
 function handleIncrementClick(){
  dispatch(increment())
 }
 function handleDecrementClick(){
  dispatch(decrement())
 }
 function handleResetClick(){
  dispatch(reset())
 }
 function handleIncAmtClick(){
  dispatch(incrementByAmount(amount))
 }
  return (
    <div>
       <div className="container">
        <button onClick={handleIncrementClick}>+</button>
        <p>Count: {count}</p>
        <button onClick={handleDecrementClick}>-</button>
        <br/>
        <br/>
        <br/>
        <button onClick={handleResetClick}>Reset</button>
        <br/>
        <br/>
        <br/>
        <input 
        type="Number" 
        value={amount}
        placeholder='Enter Amount'
        onChange={(e)=>setAmount(e.target.value)}
        />
        <button onClick={handleIncAmtClick}>Increment</button>
       </div>
    </div>
  )
}

export default App
