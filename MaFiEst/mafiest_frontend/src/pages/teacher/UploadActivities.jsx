import React, { useState } from 'react';
import axios from 'axios';
import '../styles/roles/teacher.css';

const UploadActivities = () => {
  const [activityFile, setActivityFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('examen'); // 'examen' o 'taller'
  const [deadline, setDeadline] = useState('');
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setActivityFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!activityFile) {
      setMessage('Please select a file');
      return;
    }

    const formData = new FormData();
    formData.append('file', activityFile);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('type', type);
    formData.append('deadline', deadline);

    try {
      const response = await axios.post('/api/activities/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.message || 'Activity uploaded successfully!');
      setTitle('');
      setDescription('');
      setType('examen');
      setDeadline('');
      setActivityFile(null);
    } catch (error) {
      setMessage('Error uploading activity. Please try again.');
    }
  };

  return (
    <div>
      <h2>Upload Activities</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Type:</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="examen">Examen</option>
            <option value="taller">Taller</option>
          </select>
        </div>
        <div>
          <label>Deadline:</label>
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Activity File:</label>
          <input type="file" onChange={handleFileChange} required />
        </div>
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UploadActivities;
