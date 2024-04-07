import { useState, useEffect } from "react";
import axios from "axios";
//import components
import AddTaks from "./addTaks";
import TaskDeatails from "./taskDetails";
import ModifyTask from "./modifyTaks";

export const Home = () => {
    //taks state
    const [tasks, setTasks] = useState(null)
    //state to show or hide add task form
    const [showAddForm, setShowAddForm] = useState(false)
    //state to show or hide task deatails 
    const [showTaskDeatails,setShowTaskDeatails]=useState(false)
       //state to show or hide showModifyForm
    const [showModifyForm,setShowModifyForm]=useState(false)
    //selected task state
    const [selectedTask,setSelectedTask]=useState(null)
 
    //get api endpoint
    const url = process.env.REACT_APP_API_URL;
    //delete task
    const deleteTask=async(id)=>{
        try{
            const response= await axios.delete(`${url}/${id}`)
            //refetch task after a succesfull delete
            fetchTasks()
        }catch(err){
            console.log(err)
        }
    }
    //fetch all tasks 
    const fetchTasks = async () => {
        try {
            //get api endpoint from env variable
            const response = await axios.get(url);

            setTasks(response.data)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    //fetch task by username
    const fetchTaksByUsername=async(username)=>{
        try{
            const response = await axios.get(`${url}/username/${username}`);
            setTasks(response.data)

        }catch(err){

        }
    }
    useEffect(() => {
        fetchTasks(); // Call fetchTasks function when component mounts
    }, []); // Empty dependency array to ensure it only runs once
    const uniqueUsernames = [...new Set(tasks.map(task => task.username))];

    return (
        <div>
           <div class="alert alert-success my-2 w-75 offset-1" role="alert">
            see  your tasks
           </div>
           {/*button to add taks and show the add pop up */}
           <button onClick={()=>fetchTasks()} className="btn btn-lg btn-primary mx-5">See all tasks</button>
           <button onClick={()=>{setShowAddForm(true)}} className="btn btn-lg btn-info offset-3">add a new task</button>
    

           <select className="btn btn-success btn-lg offset-2" onChange={(e) => fetchTaksByUsername(e.target.value)}>
  <option selected>find task by username</option>
  {uniqueUsernames.map((username) => (
    <option key={username}>{username}</option>
  ))}
</select>
          {/* add taks component*/}
          {showAddForm && <AddTaks fetchTasks={fetchTasks} setShowAddForm={setShowAddForm}/>}
          {/* taks details component*/}
          {showTaskDeatails && <TaskDeatails show={setShowTaskDeatails} task={selectedTask} />}
          {/* modify task form*/}
          {showModifyForm && <ModifyTask show={setShowModifyForm} task={selectedTask} fetchTasks={fetchTasks} />}
          
           {/* display list of tasks in a table*/}
           <table class="table  mx-5">
  <thead >
    <tr >
      <th scope="col">Title</th>
      <th scope="col">Username</th>
      <th scope="col">Action</th>
      
    </tr>
  </thead>
  <tbody>
    {tasks&& tasks.map((task)=>{
        return(
            <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.username}</td>
                <td>
                    {/* on click change selected task and show taks details*/}
                    <button onClick={()=>{
                        setSelectedTask(task)
                        setShowTaskDeatails(true)
                    }} className="btn btn-primary mx-2">details</button>
                    <button onClick={()=>{
                        setSelectedTask(task)
                        setShowModifyForm(true)
                    }}  className="btn btn-warning mx-2">modify</button>
                    <button onClick={()=>deleteTask(task._id)} className="btn btn-danger">delete</button>
                </td>
            </tr>
        )
    })}
  </tbody>
</table>           
        </div>
    );
};
