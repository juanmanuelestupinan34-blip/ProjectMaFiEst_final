const Institution = require('../models/institution');

exports.createInstitution = async (req, res) => {
  try {
    const institution = new Institution(req.body);
    await institution.save();
    res.status(201).json(institution);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};