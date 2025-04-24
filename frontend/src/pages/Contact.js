import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://studentportal-backend-8gjk.onrender.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      });

      const result = await res.json();
      if (result.success) {
        alert("Message sent successfully!");
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert(result.message || "Failed to send message");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="container mt-5" style={{ backgroundColor: 'black', padding: '20px', borderRadius: '10px', color: 'white', maxWidth: '600px', margin: 'auto' }}>
      <h3>Contact Us</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name:</label>
          <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Email:</label>
          <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Message:</label>
          <textarea className="form-control" rows="4" value={message} onChange={e => setMessage(e.target.value)} required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
