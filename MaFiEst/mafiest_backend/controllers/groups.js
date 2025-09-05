const { Group } = require('../models/Group');
const { User } = require('../models/User');

// Create a new academic group
exports.createGroup = async (req, res) => {
    const { name, description } = req.body;

    try {
        const newGroup = await Group.create({ name, description });
        res.status(201).json(newGroup);
    } catch (error) {
        res.status(500).json({ error: 'Error creating group' });
    }
};

// Get all academic groups
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
    const { id } = req.params;

    try {
        const group = await Group.findByPk(id);
        if (!group) {
            return res.status(404).json({ error: 'Group not found' });
        }
        res.status(200).json(group);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching group' });
    }
};

// Update a group by ID
exports.updateGroup = async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;

    try {
        const group = await Group.findByPk(id);
        if (!group) {
            return res.status(404).json({ error: 'Group not found' });
        }
        group.name = name;
        group.description = description;
        await group.save();
        res.status(200).json(group);
    } catch (error) {
        res.status(500).json({ error: 'Error updating group' });
    }
};

// Delete a group by ID
exports.deleteGroup = async (req, res) => {
    const { id } = req.params;

    try {
        const group = await Group.findByPk(id);
        if (!group) {
            return res.status(404).json({ error: 'Group not found' });
        }
        await group.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error deleting group' });
    }
};

// Assign users to a group
exports.assignUsersToGroup = async (req, res) => {
    const { groupId, userIds } = req.body;

    try {
        const group = await Group.findByPk(groupId);
        if (!group) {
            return res.status(404).json({ error: 'Group not found' });
        }

        const users = await User.findAll({ where: { id: userIds } });
        await group.addUsers(users);
        res.status(200).json({ message: 'Users assigned to group' });
    } catch (error) {
        res.status(500).json({ error: 'Error assigning users to group' });
    }
};