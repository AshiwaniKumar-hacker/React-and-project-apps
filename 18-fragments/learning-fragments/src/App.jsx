import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import FoodItems from "./components/Fooditems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {

//    let textStateArr= useState("Food Item Entered by user.");
//    let textToShow=textStateArr[0];
//    let setTextState=textStateArr[1];  

let[foodItems, setFoodItems]=useState([]);


const onKeyDown=(event)=>{
     if(event.key==='Enter') {
          let newFoodItem = event.target.value;
          event.target.value='';
          let newItems=[...foodItems,newFoodItem];
          setFoodItems(newItems);
          console.log(newFoodItem);
     }
}
    
  return ( <>
  <Container>
  <h1 className="food-heading">Healthy Food</h1>
  <FoodInput handleKeyDown={onKeyDown}></FoodInput>
  <ErrorMessage items={foodItems}></ErrorMessage>
  <FoodItems items={foodItems}></FoodItems>
         </Container>
         
{/* 
          <Container>
              <p>Above is the list of healthy foods that are good for health and well being</p>
         </Container> */}


 </> )
}

export default App
