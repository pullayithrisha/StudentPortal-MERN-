const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  rollno: String,
  branch: String
}, {
  collection: 'StudentDetails' // 👈 Explicitly name the collection here
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
