import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import Todoitem from "./Todoitem";
import styles from "./Todoitems.module.css";

const Todoitems=({onDeleteClick})=>{
const contextObj = useContext(TodoItemsContext);
  

return <>
 <div 
  className={styles.itemsContainer}>
    {todoItems.map(item=><Todoitem todoDate={item.dueDate} todoName={item.name} onDeleteClick={onDeleteClick}></Todoitem>)}
 </div>
</>
}

export default Todoitems;