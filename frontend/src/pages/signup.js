import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Signup() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'password') {
            setPassword(value);
        } else {
            setEmail(value);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const studentData = {
            email: email.trim().toLowerCase(),
            password: password.trim()
          };        try {
            const response = await fetch("http://localhost:5000/Signup", {
                method: "POST",
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify(studentData),
            });
            const result = await response.json();
            alert(result.message);
            setPassword("");
            setEmail("");
        } catch (error) {
            console.log("error login", error);
            alert("Error, please try again");
        }
    };

    return (
        <div style={{
            minHeight: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px"
        }}>
            <form
                onSubmit={handleSubmit}
                style={{
                backgroundColor: "#1f1f1f",padding: "40px",borderRadius: "15px",color: "white",width: "100%",maxWidth: "400px",boxShadow: "0 0 15px rgba(0,0,0,0.6)"}}>
                <h2 style={{ textAlign: "center", marginBottom: "25px" }}>Create Account</h2>
                <label>Email</label>
                <input type="text" name="email" value={email} onChange={handleChange} placeholder="Enter your email" required style={{ width: "100%",padding: "10px", marginBottom: "20px",borderRadius: "8px"}}/>
                <label>Password</label>
                <input type="password" name="password" value={password} onChange={handleChange} placeholder="Enter your password" required style={{ width: "100%",padding: "10px",marginBottom: "30px",borderRadius: "8px"}}/>
                <button type="submit" style={{width: "100%",padding: "10px",backgroundColor: "#007bff",borderRadius: "8px",color: "white",fontWeight: "bold",cursor: "pointer",marginBottom: "15px"}} >Sign Up</button>
                <div style={{ textAlign: "center" }}><p style={{ marginBottom: "8px" }}>Already have an account?</p>
                    <Link to="/signup" style={{backgroundColor: "#28a745",padding: "8px 20px",borderRadius: "8px",color: "white",textDecoration: "none",fontWeight: "bold"}}> Login</Link></div>
            </form>
        </div>
    );
}

export default Signup;
