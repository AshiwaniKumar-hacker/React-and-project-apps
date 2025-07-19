import Todoitem from "./Todoitem";
import styles from "./Todoitems.module.css";

const Todoitems=({todoItems})=>{
return <>
 <div 
  className={styles.itemsContainer}>
    {todoItems.map(item=><Todoitem todoDate={item.date} todoName={item.name}></Todoitem>)}
 </div>
</>
}

export default Todoitems;