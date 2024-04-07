import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './task.css'; 
import axios from "axios"
import {useForm}from "react-hook-form"


const ModifyTask = ({show,fetchTasks,task}) => {
  const sendData=async(taskData)=>{
    console.log(taskData)
  const url=process.env.REACT_APP_API_URL
  try{
  const response=await axios.put(`${url}/${task._id}`,taskData)
  fetchTasks()
  show(false)
  
  }catch(err){
  console.log(err)
  }
  }
const {register,handleSubmit}=useForm()
  return (
    <div className=" overlay">
      <div className="card rounded p-4">
        <div className="card-body">
          <h1 className="text-body-emphasis">modify a taks</h1>
          <form onSubmit={handleSubmit(sendData)}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Task title</label>
              <input required defaultValue={task.title} {...register("title")} type="text" className="form-control form-control-sm" id="exampleFormControlInput1"  />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
              <textarea required defaultValue={task.description} {...register("description")} className="form-control form-control-sm" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Date</label>
              <input required {...register("date")} type="date" className="form-control form-control-sm" id="exampleFormControlInput1"  />
            </div>
          
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Username</label>
              <input required defaultValue={task.username} {...register("username")} type="text" className="form-control form-control-sm" id="exampleFormControlInput1"  />
            </div>
            <button type="submit" className="btn btn-primary">+modify task</button>
            <button onClick={()=>show(false)} type="submit" className="btn btn-danger offset-3">Close</button>
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModifyTask;
