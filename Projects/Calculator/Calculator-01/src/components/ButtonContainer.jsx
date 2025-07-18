import styles from "./ButtonContainer.module.css";

const ButtonContainer=()=>{
      const buttonNames=[
            'C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'
      ];
return <>
<div 

className={styles.buttonContainer}>
{buttonNames.map((buttons)=> <button className={styles.button}>{buttons}</button>)}

</div>
</>
}

export default ButtonContainer;