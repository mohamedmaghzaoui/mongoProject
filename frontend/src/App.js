import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import AddTaks from "./Home/addTaks";
import { Home } from "./Home/home";
function App() {
  return (
    <div className="App">
   

      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddTaks />} />
       
        </Routes>
       
      </Router>
    </div>
  );
}

export default App;
