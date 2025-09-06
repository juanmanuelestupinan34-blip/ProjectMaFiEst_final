const { Contact } = require('../models/Contact');

// Handle contact form submission
exports.submitContactForm = async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const newContact = await Contact.create({ name, email, message });
        res.status(201).json({ message: 'Contact form submitted successfully', contact: newContact });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting contact form', error: error.message });
    }
};