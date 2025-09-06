const { Group } = require('../models');

// Create a new group
exports.createGroup = async (req, res) => {
    try {
        const { name } = req.body;
        const newGroup = await Group.create({ name });
        res.status(201).json(newGroup);
    } catch (error) {
        res.status(500).json({ error: 'Error creating group' });
    }
};

// Get all groups
exports.getAllGroups = async (req, res) => {
    try {
        const groups = await Group.findAll();
        res.status(200).json(groups);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching groups' });
    }
};

// Get a group by ID
exports.getGroupById = async (req, res) => {
    try {
        const group = await Group.findByPk(req.params.id);
        if (!group) {
            return res.status(404).json({ error: 'Group not found' });
        }
        res.status(200).json(group);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching group' });
    }
};

// Update a group
exports.updateGroup = async (req, res) => {
    try {
        const { name } = req.body;
        const [updated] = await Group.update({ name }, {
            where: { id: req.params.id }
        });
        if (!updated) {
            return res.status(404).json({ error: 'Group not found' });
        }
        const updatedGroup = await Group.findByPk(req.params.id);
        res.status(200).json(updatedGroup);
    } catch (error) {
        res.status(500).json({ error: 'Error updating group' });
    }
};

// Delete a group
exports.deleteGroup = async (req, res) => {
    try {
        const deleted = await Group.destroy({
            where: { id: req.params.id }
        });
        if (!deleted) {
            return res.status(404).json({ error: 'Group not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error deleting group' });
    }
};