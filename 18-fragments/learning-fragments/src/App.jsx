import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import FoodItems from "./components/Fooditems";
import ErrorMessage from "./components/ErrorMessage";

function App() {

   let foodItems =['DAL','FRUITS','ROTI','RICE','VIGETABLES'];

    
  return ( <>
  <h1>Healthy Food</h1>
   <ErrorMessage items={foodItems}></ErrorMessage>
  <FoodItems items={foodItems}></FoodItems>
         </>
  )
}

export default App
