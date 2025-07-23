import { useRef } from "react";
import { MdAdd } from "react-icons/md";

function AddTodo ({onNewItem}) {

  const todoNameElement = useRef(0);
  const dueDateElement = useRef(0);

  const handleAddButtonClicked=(event)=>{
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value="";
    dueDateElement.current.value="";

    onNewItem(todoName,dueDate);
    
  }

  return ( <>
  <div className="container text-center">
  <form 
  onSubmit={handleAddButtonClicked}
  className="row kg-row">
    <div className="col-6">
      <input type="text" placeholder="Enter Todo here" 
      ref={todoNameElement}
      />

    </div>
    <div className="col-4">
      <input type="date" 
      ref={dueDateElement}
      />
    </div>
    <div className="col-2">
      <button  className="btn btn-success kg-button"
      
      ><MdAdd />
</button>
    </div>
  </form>
  </div>
  </>)
}

export default AddTodo;