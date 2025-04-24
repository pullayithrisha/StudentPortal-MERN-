import React, { useState } from "react";

function DeleteStudent() {
  const [rollno, setRollno] = useState("");

  const handleChange = (e) => {
    setRollno(e.target.value);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://studentportal-backend-8gjk.onrender.com/students/delete", {
        method: "DELETE", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rollno }),
      });

      const result = await response.json();
      alert(result.message);
      setRollno("");
    } catch (error) {
      console.error("Error:", error);
      alert("Error deleting student");
    }
  };

  return (
    <div className="container mt-5" style={{backgroundColor:'black', padding:'20px', borderRadius:'10px' ,color:'white' ,maxWidth:'600px', margin:'auto'}}>
    <form onSubmit={handleDelete}>
        <h3>Delete Student Details</h3>
        <label  className="form-label" htmlFor="rollno">Roll No:</label>
      <input type="number"className="form-control" name="rollno" placeholder="Enter Roll No" value={rollno} onChange={handleChange} required/><br/>
      <button type="submit" className="btn btn-danger">submit</button>
    </form>
    </div>
  );
}

export default DeleteStudent;
