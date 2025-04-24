import React, { useState } from "react";

function AddStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rollno, setRollno] = useState("");
  const [branch, setBranch] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "rollno") {
      setRollno(value);
    } else if (name === "branch") {
      setBranch(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const studentData = { name, email, rollno, branch };
    try {
      const response = await fetch("https://studentportal-backend-8gjk.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studentData),
      });
      const result = await response.json();
      if (result.message === "Student added successfully") {
        alert("Student added successfully");
        setName("");
        setEmail("");
        setRollno("");
        setBranch("");
      } else {
        alert("Failed to add student");
      }
    } catch (err) {
      console.error("Error adding student details", err);
      alert("An error occurred. Please try again.");
    }
  };
  

  return (
    <div className="container mt-5" style={{backgroundColor:'black', padding:'20px', borderRadius:'10px' ,color:'white' ,maxWidth:'600px', margin:'auto'}}>
      <h3>Add Student Details</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Roll No:</label>
          <input
            type="number"
            className="form-control"
            name="rollno"
            value={rollno}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Branch:</label>
          <select
            className="form-control"
            name="branch"
            value={branch}
            onChange={handleChange}
          >
            <option value="">Select Branch</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="ME">ME</option>
            <option value="CE">CE</option>
            <option value="IT">IT</option>
            <option value="AIDS">AIDS</option>
            <option value="IOT">IOT</option>
            <option value="BT">BT</option>
            <option value="AIML">AIML</option>
          </select>
        </div>

        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddStudent;
