function Random(){
let number = Math.random()*10;
return <h1 style={{'background-color':'Yellow'}}>
  Random number is:{Math.round(number)}
</h1>
}

export default Random;