import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './MyForm.css'; 
import axios from "axios"
import {useForm}from "react-hook-form"
const sendData=async(taskData)=>{
  console.log(taskData)
const url="http://localhost:3000/tasks"
try{
const response=await axios.post(url,taskData)
}catch(err){
console.log(err)
}
}

const MyForm = () => {
const {register,handleSubmit}=useForm()
  return (
    <div className="container">
      <div className="card rounded p-4">
        <div className="card-body">
          <h1 className="text-body-emphasis">add a new task</h1>
          <form onSubmit={handleSubmit(sendData)}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Task title</label>
              <input {...register("title")} type="text" className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
              <textarea {...register("description")} className="form-control form-control-sm" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Date</label>
              <input {...register("date")} type="date" className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
          
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Username</label>
              <input {...register("username")} type="text" className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <button type="submit" className="btn btn-primary"> +New task</button>
            <button  className="btn btn-danger offset-10"> Clear all</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyForm;
