import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import MyForm from "./MyForm/MyForm";

function App() {
  return (
    <div className="App">
      <div class="alert alert-success my-2 w-75 offset-1" role="alert">
  see my tasks
</div>
      <Router>
        <Routes>
        <Route path="/" element={<MyForm />} />
        </Routes>
       
      </Router>
    </div>
  );
}

export default App;
