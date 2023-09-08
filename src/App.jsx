
import './App.css'
import Counter from './counter'; 
import Users from './users';
function App() {
  
function handleClick(){
  alert('button clicked');
}
const handleClick2 = () =>{
  alert('button 2 clicked')
}
  return (
    <>
    <h3>React Core Concepts</h3>
   <Users></Users>
    <Counter></Counter>
    
    <button onClick={handleClick}>Click Me</button>
    <button onClick={handleClick2}>Click2</button>
    <button onClick={()=>{alert('third clicked')}}>third</button>
     </>
  )
}

export default App
