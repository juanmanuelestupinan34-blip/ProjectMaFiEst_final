const mongoose = require('mongoose');

const WorkshopSchema = new mongoose.Schema({
  title: String,
  description: String,
  activities: Array,
  institution: { type: mongoose.Schema.Types.ObjectId, ref: 'Institution' },
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Workshop', WorkshopSchema);