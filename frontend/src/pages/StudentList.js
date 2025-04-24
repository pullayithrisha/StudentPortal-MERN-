import React, { useEffect, useState } from "react";
import './studentList.css'; 
function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/students")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => {
        console.error("Error fetching student data:", err);
        alert("Failed to fetch students");
      });
  }, []);

  return (
    <div className="container-fluid d-flex justify-content-center">
  <div style={{ maxWidth: "900px", width: "100%" ,marginTop:"50px"}}>
    <h2 className="text-center text-dark" >Student List</h2>
    <table className="table table-dark table-bordered table-striped">
      <thead>
        <tr>
          <th>Roll No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Branch</th>
        </tr>
      </thead>
      <tbody>
        {students.length > 0 ? (
          students.map((student, index) => (
            <tr key={index}>
              <td>{student.rollno}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.branch}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">No student data available</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>

  );
}

export default StudentList;
