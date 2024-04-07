import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './task.css'; 
import axios from "axios"
import {useForm}from "react-hook-form"


const AddTaks = ({setShowAddForm,fetchTasks}) => {
  const sendData=async(taskData)=>{
    console.log(taskData)
  const url=process.env.REACT_APP_API_URL
  try{
  const response=await axios.post(url,taskData)
  fetchTasks()
  setShowAddForm(false)
  
  }catch(err){
  console.log(err)
  }
  }
const {register,handleSubmit}=useForm()
  return (
    <div className=" overlay">
      <div className="card rounded p-4">
        <div className="card-body">
          <h1 className="text-body-emphasis">add a new task</h1>
          <form onSubmit={handleSubmit(sendData)}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Task title</label>
              <input required {...register("title")} type="text" className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="task title" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
              <textarea required {...register("description")} className="form-control form-control-sm" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Date</label>
              <input required {...register("date")} type="date" className="form-control form-control-sm" id="exampleFormControlInput1"  />
            </div>
          
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Username</label>
              <input required {...register("username")} type="text" className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="username" />
            </div>
            <button type="submit" className="btn btn-primary">+New task</button>
            <button onClick={()=>setShowAddForm(false)} type="submit" className="btn btn-danger offset-4">Close</button>
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTaks;
