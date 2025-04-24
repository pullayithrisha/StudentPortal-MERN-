const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import the Student model
const Student = require('./models/student'); // Adjust path as necessary
const Contact = require('./models/contact'); // import Contact model


const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies

// MongoDB connection
const mongoURI = 'mongodb+srv://pullayithrisha:thrisha_2005@crud.4zvvlm7.mongodb.net/StudentPortal?retryWrites=true&w=majority&appName=CRUD';
mongoose.connect(mongoURI)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((err) => {
        console.log("MongoDB connection failed", err);
    });

// 🔹 POST route to add a new student
app.post('/students', async (req, res) => {
    try {
        const { name, email, rollno, branch } = req.body;
        const existingStudent = await Student.findOne({ rollno});
        if (existingStudent) {
          return res.status(400).json({ message: 'Roll number already exists' });
        }
        const newStudent = new Student({ name, email, rollno, branch });
        await newStudent.save();
        res.status(201).json({ message: "Student added successfully", student: newStudent });
    } catch (err) {
        res.status(500).json({ message: "Error adding student", error: err });
    }
});

// 🔹 GET route to get all students
app.get('/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.status(500).json({ message: "Error fetching students", error: err });
    }
});

//delete student by rollno
app.delete('/students/delete', async (req, res) => {
    const { rollno } = req.body;
  
    try {
      const deletedStudent = await Student.findOneAndDelete({ rollno: rollno });
  
      if (!deletedStudent) {
        return res.status(404).json({ message: "Student not found" });
      }
  
      res.json({ message: "Student deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: "Error deleting student", error: err });
    }
  });

  // update student by rollno
  app.put('/students/update/:rollno', async (req, res) => {
    try {
        const rollno = req.params.rollno;
        const updateData = req.body;

        const result = await Student.findOneAndUpdate(
            { rollno:Number(rollno) },
            { $set: updateData },
            { new: true }
        );

        if (!result) {
            return res.status(404).json({ success: false, message: "Student not found" });
        }

        res.json({ success: true, message: "Student updated successfully", updatedStudent: result });
    } catch (err) {
        res.status(500).json({ success: false, message: "Error updating student", error: err });
    }
});
//contact us
app.post('/contact', async (req, res) => {
    try {
      const { name, email, message } = req.body;
      const newContact = new Contact({ name, email, message });
      await newContact.save();
      res.status(201).json({ success: true, message: "Message received!" });
    } catch (err) {
      res.status(500).json({ success: false, message: "Error saving message", error: err });
    }
  });
// Server start
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
