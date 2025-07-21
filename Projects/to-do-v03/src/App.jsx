import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import Welcome from "./components/Welcome";
import Todoitems from "./components/Todoitems"
import { useState } from "react";


function App() {

const initialTodoItems=[
  // {
//   name:'Buy Milk',
//   dueDate:'4/10/2025'
// },
// {
//   name:'Go to College',
//   dueDate:'4/10/2025'
// },
// {
//   name:'Ashiwani',
//   dueDate:'5/10/2025'
// }

];

const [todoItems,setTodoItems] = useState(initialTodoItems);

const handleNewItem = (itemName,dueDate)=>{
console.log(`New item Added:${itemName} Date:${dueDate}`);
const newTodoItems=[...todoItems,{name:itemName,dueDate:dueDate}];
setTodoItems(newTodoItems)
}

const handleDeleteItem=(todoItemName)=>{
  const newTodoItems = todoItems.filter(item=>item.name!==todoItemName);
  setTodoItems(newTodoItems);
console.log(`item deleted:${todoItemName}`)
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


