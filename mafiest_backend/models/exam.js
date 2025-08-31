const mongoose = require('mongoose');

const ExamSchema = new mongoose.Schema({
  title: String,
  description: String,
  questions: Array,
  institution: { type: mongoose.Schema.Types.ObjectId, ref: 'Institution' },
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Exam', ExamSchema);