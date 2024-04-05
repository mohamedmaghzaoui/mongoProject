import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './MyForm.css'; 

const MyForm = () => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <div className="container">
      <div className="card rounded p-4">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
              <textarea className="form-control form-control-sm" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary"> +add a new card</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyForm;
