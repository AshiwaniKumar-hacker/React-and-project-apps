import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import Todoitems from "./components/Todoitems"


function App() {

const todoItems=[{
  name:'Buy Milk',
  dueDate:'4/10/2025'
},
{
  name:'Go to College',
  dueDate:'4/10/2025'
},
{
  name:'Ashiwani',
  dueDate:'5/10/2025'
}

]

  return (
  <center className='todo-container'>
 <AppName></AppName>
 <AddTodo></AddTodo>
<Todoitems todoItems={todoItems}></Todoitems>
</center>)

}

export default App


