import './App.css';
import AddTask from './components/AddTask';
import {useState} from "react"
import ToDo from './components/ToDo';
function App() {
  const[taskList, setTaskList] = useState([])
  return (
   <>
   <h1 className='text-2xl font-bold py-4 pl-6'>The Task Tracker</h1>
   <p className='text-xl pl-6'>Hi there!</p>
   <div className='flex flex-row items-center'>
   <p className='text-xl pl-6'>Click </p>
   <AddTask taskList={taskList} setTaskList={setTaskList}/>
    <p className='text-xl my-2'>to add a new task</p>
   </div>
   {taskList.slice(0).reverse().map((task,i)=>
   
  <>

  <ToDo task={task} index={i} taskList={taskList} setTaskList={setTaskList} />
  </>)}
   
   </>
  );
}

export default App;
