import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/roles/admin.css'; 

const ManageGroups = () => {
    const [groups, setGroups] = useState([]);
    const [groupName, setGroupName] = useState('');
    const [editingGroupId, setEditingGroupId] = useState(null);
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [groupMembers, setGroupMembers] = useState({ students: [], teachers: [] });

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

    const fetchGroupMembers = async (groupId) => {
        try {
            const response = await axios.get(`/api/groups/${groupId}/members`);
            setGroupMembers(response.data);
            setSelectedGroup(groupId);
        } catch (error) {
            console.error('Error fetching group members:', error);
        }
    };

    return (
        <div>
            <h1>Gestionar Grupos</h1>
            <form onSubmit={handleAddGroup}>
                <input
                    type="text"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                    placeholder="Nombre del Grupo"
                    required
                />
                <button type="submit">
                    {editingGroupId ? 'Actualizar Grupo' : 'Añadir Grupo'}
                </button>
            </form>

            <div className="groups-list">
                {groups.map((group) => (
                    <div key={group.id} className="group-item">
                        <h3>{group.name}</h3>
                        <div className="group-actions">
                            <button onClick={() => handleEditGroup(group)}>
                                Editar
                            </button>
                            <button onClick={() => handleDeleteGroup(group.id)}>
                                Eliminar
                            </button>
                            <button onClick={() => fetchGroupMembers(group.id)}>
                                Ver Miembros
                            </button>
                        </div>

                        {selectedGroup === group.id && (
                            <div className="group-members">
                                <div className="members-section">
                                    <h4>Estudiantes:</h4>
                                    <ul>
                                        {groupMembers.students.map(student => (
                                            <li key={student.id}>{student.name}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="members-section">
                                    <h4>Docentes:</h4>
                                    <ul>
                                        {groupMembers.teachers.map(teacher => (
                                            <li key={teacher.id}>{teacher.name}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageGroups;
