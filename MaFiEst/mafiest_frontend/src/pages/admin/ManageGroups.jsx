import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/roles/admin.css'; 

const ManageGroups = () => {
    const [groups, setGroups] = useState([]);
    const [groupName, setGroupName] = useState('');
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
            if (editingGroupId) {
                await axios.put(`/api/groups/${editingGroupId}`, { name: groupName });
            } else {
                await axios.post('/api/groups', { name: groupName });
            }
            setGroupName('');
            setEditingGroupId(null);
            fetchGroups();
        } catch (error) {
            console.error('Error adding/updating group:', error);
        }
    };

    const handleEditGroup = (group) => {
        setGroupName(group.name);
        setEditingGroupId(group.id);
    };

    const handleDeleteGroup = async (id) => {
        try {
            await axios.delete(`/api/groups/${id}`);
            fetchGroups();
        } catch (error) {
            console.error('Error deleting group:', error);
        }
    };

    return (
        <div>
            <h1>Manage Groups</h1>
            <form onSubmit={handleAddGroup}>
                <input
                    type="text"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                    placeholder="Group Name"
                    required
                />
                <button type="submit">{editingGroupId ? 'Update Group' : 'Add Group'}</button>
            </form>
            <ul>
                {groups.map((group) => (
                    <li key={group.id}>
                        {group.name}
                        <button onClick={() => handleEditGroup(group)}>Edit</button>
                        <button onClick={() => handleDeleteGroup(group.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManageGroups;
