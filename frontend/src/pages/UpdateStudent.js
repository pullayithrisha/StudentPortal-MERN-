import React, { useState } from 'react';

function UpdateStudent() {
  const [rollno, setRollno] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [branch, setBranch] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!rollno) {
      alert("Roll No is required");
      return;
    }

    const updatedFields = {};
    if (name) updatedFields.name = name;
    if (email) updatedFields.email = email;
    if (branch) updatedFields.branch = branch;

    try {
      const response = await fetch(`https://studentportal-backend-8gjk.onrender.com/students/update/${rollno}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFields),
      });

      const result = await response.json();
      if (result.success) {
        alert("Student updated successfully");
        setName("");
        setEmail("");
        setRollno("");
        setBranch("");
      } else {
        alert(result.message || "Failed to update student");
      }
    } catch (err) {
      console.error("Error updating student details", err);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container mt-5" style={{ backgroundColor: 'black', padding: '20px', borderRadius: '10px', color: 'white', maxWidth: '600px', margin: 'auto' }}>
      <h3>Update Student Details</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Roll No:</label>
          <input type="number" className="form-control" name="rollno" value={rollno} onChange={(e) => setRollno(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input type="text" className="form-control" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input type="email" className="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="mb-3">
          <label className="form-label">Branch:</label>
          <select
            className="form-control"
            name="branch"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
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

        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}

export default UpdateStudent;
