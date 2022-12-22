import './App.css';
import { useSelector,useDispatch } from 'react-redux';
function App() {
  const counter =useSelector((state)=>state.counter); 
  const dispatch=useDispatch();
  const increment=()=>{
    dispatch({type:"inc"})
  }
  const decrement=()=>{
    dispatch({type:"desc"})
  }
  return (
    <div >
      <h1>counter</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>
        increment
      </button>
      <button onClick={decrement}>
        decrement
      </button>

 
    </div>
  );
}

export default App;
