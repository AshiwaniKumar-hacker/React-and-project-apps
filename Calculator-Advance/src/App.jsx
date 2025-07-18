import styles from './App.module.css'
import Display from './components/Display'
import ButtonContainer from './components/ButtonContainer'
import { useState } from 'react';

function App() {
  let [calVal,setCalVal]=useState("");
  
  

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonContainer onButtonClick > </ButtonContainer>
     
    </div>
  )
}

export default App
