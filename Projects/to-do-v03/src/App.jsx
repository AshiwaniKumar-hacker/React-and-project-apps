import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import Welcome from "./components/Welcome";
import Todoitems from "./components/Todoitems"
import { useState } from "react";


function App() {

const [todoItems,setTodoItems] = useState([]);

const handleNewItem = (itemName,dueDate)=>{
setTodoItems((currValue)=>
[...todoItems, {name:itemName,dueDate:dueDate}]
)
}

const handleDeleteItem=(todoItemName)=>{
  const newTodoItems = todoItems.filter(item=>item.name!==todoItemName);
  setTodoItems(newTodoItems);
}

  return (
  <center className='todo-container'>
 <AppName></AppName>
 <AddTodo onNewItem={handleNewItem}></AddTodo>
{todoItems.length===0 &&<Welcome ></Welcome>}
<Todoitems todoItems={todoItems} onDeleteClick={handleDeleteItem}></Todoitems>
</center>)

}

export default App


