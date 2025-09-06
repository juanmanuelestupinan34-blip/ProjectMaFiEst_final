import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManageGroups = () => {
    const [groups, setGroups] = useState([]);
    const [groupName, setGroupName] = useState('');
    const [groupDescription, setGroupDescription] = useState('');
    const [editingGroupId, setEditingGroupId] = useState(null);

    useEffect(() => {
        fetchGroups();
    }, []);

    const fetchGroups = async () => {
        try {
            const response = await axios.get('/api/groups');
            setGroups(response.data);
        } catch (error) {
            console.error('Error fetching groups:', error);
        }
    };

    const handleAddGroup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/groups', { name: groupName, description: groupDescription });
            setGroups([...groups, response.data]);
            setGroupName('');
            setGroupDescription('');
        } catch (error) {
            console.error('Error adding group:', error);
        }
    };

    const handleEditGroup = (group) => {
        setEditingGroupId(group.id);
        setGroupName(group.name);
        setGroupDescription(group.description);
    };

    const handleUpdateGroup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`/api/groups/${editingGroupId}`, { name: groupName, description: groupDescription });
            setGroups(groups.map(group => (group.id === editingGroupId ? response.data : group)));
            setEditingGroupId(null);
            setGroupName('');
            setGroupDescription('');
        } catch (error) {
            console.error('Error updating group:', error);
        }
    };

    const handleDeleteGroup = async (id) => {
        try {
            await axios.delete(`/api/groups/${id}`);
            setGroups(groups.filter(group => group.id !== id));
        } catch (error) {
            console.error('Error deleting group:', error);
        }
    };

    return (
        <div>
            <h2>Manage Groups</h2>
            <form onSubmit={editingGroupId ? handleUpdateGroup : handleAddGroup}>
                <input
                    type="text"
                    placeholder="Group Name"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Group Description"
                    value={groupDescription}
                    onChange={(e) => setGroupDescription(e.target.value)}
                    required
                />
                <button type="submit">{editingGroupId ? 'Update Group' : 'Add Group'}</button>
            </form>
            <ul>
                {groups.map(group => (
                    <li key={group.id}>
                        <h3>{group.name}</h3>
                        <p>{group.description}</p>
                        <button onClick={() => handleEditGroup(group)}>Edit</button>
                        <button onClick={() => handleDeleteGroup(group.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManageGroups;