import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import FoodItems from "./components/Fooditems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";

function App() {

   let foodItems =['DAL','FRUITS','ROTI','RICE','VIGETABLES'];

    
  return ( <>
  <Container>
  <h1 className="food-heading">Healthy Food</h1>
   <ErrorMessage items={foodItems}></ErrorMessage>
  <FoodItems items={foodItems}></FoodItems>
         </Container>

         <Container>
              <p>Above is the list of healthy foods that are good for health and well being</p>
         </Container>
 </> )
}

export default App
