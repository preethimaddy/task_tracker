import React,{useState,useEffect} from 'react'

const EditTask = ({task,taskList,index,setTaskList}) => {
    const[editModal, setEditModal] =useState(false);
    const [projectName, setProjectName] = useState("");

const[taskDescription, setTaskDescription] = useState("");

useEffect (()=>{
    setProjectName(task.projectName);
    setTaskDescription(task.taskDescription)
},[task.projectName, task.taskDescription])

const handleInput =(e)=>{
const{name,value} = e.target;

if(name === "projectName") setProjectName(value)
    if(name === "taskDescription") setTaskDescription(value);
}
const handleUpdate = (e) => {
    e.preventDefault();
let taskIndex = taskList.indexOf(task);
taskList.splice(taskIndex,1,
  {projectName:projectName,
    taskDescription:taskDescription,
    timestamp: task.timestamp,
    duration: task.duration
  }
);
localStorage.setItem(JSON.stringify(taskList))
window.location.reload();
    setEditModal(false)

  };
  return (
  <>
    <button className='bg-gray-400 text-white 
    text-sm-uppercase font-semibold py-1.5 px-3 rounded-lg' 
    onClick={()=>setEditModal(true)}>
        Edit

    </button>
    {editModal ? (
        <>
<div
            className="flex items-center justify-center
            overflow-x-hidden overflow-y-auto fixed inset-0 z-100"
          >
            <div className="w-9/12 max-w-lg bg-white border rounded lg-shadow-md relative
             flex flex-col">
              <div className="flex flex-row 
              justify-between p-5 border-b border-slate-200 rounded-t bg-white">
                <h3 className="text-3xl font-semibold">Edit old Task</h3>
                <button
                  className="px-1 text-gray-400 float-right text-3xl
                leading-none font-semibold block"
                  onClick={() => setEditModal(false)}
                >
                  X
                </button>
              </div>
              <div className="">
                <form className="px-6 pt-6 pb-4">
                  <label
                    className="track-wide uppercase text-gray-700
                    text-xs font-semibold mb-2 block"
                    htmlFor="project-name"
                  >
                    Project Name
                  </label>
                  <input
                    className="w-full bg-gray-200
                    text-gray-700 border
                    border-gray rounded py-3 px-4 mb-5
                    leading-tight focus:outline-none
                    focus:bg-white"
                    id="project-name"
                    name="projectName"
                    type="text"
                    placeholder="Type Project name"
                    value={projectName}
                    onChange={handleInput}
                    required
                  />
                  <label
              className="track-wide uppercase text-gray-700
                    text-xs font-semibold mb-2 block"
              htmlFor="project-name"
            >
              Task Description
            </label>
            <textarea
              className="w-full bg-gray-200
              text-gray-700 border
              border-gray rounded py-3 px-4 mb-5
              leading-tight focus:outline-none
              focus:bg-white"
              id="task-description"
              name="taskDescription"
              rows="5"
              placeholder="Task Description.."
              value={taskDescription}
              onChange={handleInput}
            />
                </form>
                <div className="flex justify-end p-6 border-t border-slate-200  rounded-b">
                    <button className="bg-blue-500
                    text-white font-semibold uppercase text-sm
                    px-6 py-3 rounded hover:opacity:70"
                    onClick={handleUpdate}>
                        Update Task
                    </button>
                </div>
              </div>
            </div>
            
          </div>

        </>
    ):null}
    
    
    
    </>
  )
}

export default EditTask 