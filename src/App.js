import './App.css';
import AddTask from './components/AddTask';
import {useState,useEffect} from "react"
import ToDo from './components/ToDo';
function App() {
  const[taskList, setTaskList] = useState([]);
  
  useEffect(()=>{
let array = localStorage.getItem("taskList")

if(array){
  setTaskList(JSON.parse(array))
}
  },[])
  return (
   <>
   <h1 className='text-2xl font-bold py-4 pl-6'>The Task Tracker</h1>
   <p className='text-xl pl-6'>Hi there!</p>
   <div className='flex flex-row items-center'>
   <p className='text-xl pl-6'>Click </p>
   <AddTask taskList={taskList} setTaskList={setTaskList}/>
    <p className='text-xl my-2'>to add a new task</p>
  
   </div>
   <div className='flex flex-col items-start
    justify-start bg-white my-4 ml-6 py-4 px-6 w-3/4 max-w-lg'>ToDo</div>
   {taskList.map((task,i)=>

  <ToDo task={task} key={i} taskList={taskList} setTaskList={setTaskList} />
)}
   
   </>
  );
}

export default App;
