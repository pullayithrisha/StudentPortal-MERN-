// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cards from "./components/cards";
import AddStudent from "./pages/AddStudent";
import DeleteStudent from "./pages/DeleteStudent";
import UpdateStudent from "./pages/UpdateStudent";
import StudentList from "./pages/StudentList";
import ContactForm from "./pages/Contact";
function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/deletestudent" element={<DeleteStudent />} />
        <Route path="/updatestudent" element={<UpdateStudent />} />
        <Route path="/studentlist" element={<StudentList />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App;
