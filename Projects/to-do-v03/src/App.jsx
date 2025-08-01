import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import Welcome from "./components/Welcome";
import Todoitems from "./components/Todoitems"
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";


function App() {

const [todoItems,setTodoItems] = useState([]);

const addNewItem = (itemName,dueDate)=>{
setTodoItems((currValue)=>
[...todoItems, {name:itemName,dueDate:dueDate}]
)
}

const deleteItem=(todoItemName)=>{
  const newTodoItems = todoItems.filter(item=>item.name!==todoItemName);
  setTodoItems(newTodoItems);
};

  return (
  <TodoItemsContext.Provider value={{
    items:todoItems,
    addNewItem:addNewItem,
    deleteItem:deleteItem
  }}>
  <center className='todo-container'>
  <AppName></AppName>
  <AddTodo ></AddTodo>
  <Welcome ></Welcome>
  <Todoitems
   ></Todoitems>
  </center>
    </TodoItemsContext.Provider>
)

}

export default App


