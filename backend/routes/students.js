// /routes/students.js
const express = require('express');
const Student = require('../models/student');
const router = express.Router();

// GET all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching students', error: err });
  }
});

// POST a new student
router.post('/', async (req, res) => {
  try {
    const { name, email, rollno, branch } = req.body;
    const newStudent = new Student({ name, email, rollno, branch });
    await newStudent.save();
    res.status(201).json({ message: 'Student added successfully', student: newStudent });
  } catch (err) {
    res.status(500).json({ message: 'Error adding student', error: err });
  }
});

// PUT update a student by rollno
router.put('/update', async (req, res) => {
  try {
    const { rollno, name, email, branch } = req.body;
    const student = await Student.findOneAndUpdate(
      { rollno },
      { name, email, branch },
      { new: true }
    );
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json({ message: 'Student updated successfully', student });
  } catch (err) {
    res.status(500).json({ message: 'Error updating student', error: err });
  }
});

// DELETE a student by rollno
router.delete('/delete/:rollno', async (req, res) => {
  try {
    const { rollno } = req.params;
    const student = await Student.findOneAndDelete({ rollno });
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json({ message: 'Student deleted successfully', student });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting student', error: err });
  }
});

module.exports = router;
