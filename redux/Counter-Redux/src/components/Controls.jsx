import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls=()=>{

const dispatch=useDispatch();
const inputElement=useRef();

const handleIncrement=()=>{
dispatch({type:"INCREMENT"});
}

const handleDecrement=()=>{
dispatch({type:"DECREMENT"});
}

const handleSubtract=()=>{

dispatch({type:"SUBTRACT",payload:{
  num:  inputElement.current.value,
}});
inputElement.current.value="";
}

const handleAdd=()=>{
dispatch({type:"ADD",payload:{
  num:  inputElement.current.value,
}})
inputElement.current.value="";
}

const handlePrivacyToggle=()=>{
  dispatch({type:"PRIVACY_TOGGLE"})
}

  return <> 
<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button onClick={handleDecrement} type="button" className="btn btn-primary">-1</button>
      <button onClick={handleIncrement} type="button" className="btn btn-success">+1</button>
      <button type="button" onClick={handlePrivacyToggle} class="btn btn-warning">Privacy Toggle</button>
</div> 

<div className="d-grid gap-2 d-sm-flex justify-content-sm-center btn-34">
      <input ref={inputElement} type="text" className="number-input" placeholder="Enter Number"
      />
      <button onClick={handleAdd} type="button" className="btn btn-info">Add</button>
      <button onClick={handleSubtract} type="button" class="btn btn-danger">Subtract</button>
</div>
         
</>
}

export default Controls;