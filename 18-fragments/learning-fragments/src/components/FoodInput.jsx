import styles from "./FoodInput.module.css"

const FoodInput=({handleKeyDown})=>{


  return <>
   <input type="text" placeholder="Enter food item here" className={styles.foodInput} 
   onKeyDown={handleKeyDown}
   />
   
   </>
 }

 export default FoodInput;