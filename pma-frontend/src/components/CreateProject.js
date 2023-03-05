import React, { useState, useEffect } from 'react';

const CreateProject = ({ onCreateProject }) => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [goals, setGoals] = useState('');
  const [timeframe, setTimeframe] = useState('');
  const [status, setStatus] = useState('');
  const [created_at, setCreated_at] = useState('');
  const [updated_at, setUpdated_at] = useState('')




  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');

  const handleCreate = (e) => {
    e.preventDefault();
    // Create new project using the API
    fetch('http://localhost:9292/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        title: title,
        goals: goals,
        status: status,
        timeframe: timeframe,
        created_at: created_at,
        updated_at: updated_at,
      })
    })
      .then(response => response.json())
      .then(data => {
        onCreateProject(data);
        setId('');
        setTitle('');
        setGoals('');
        setStatus('');
        setTimeframe('');
        setCreated_at('');
        setUpdated_at('')

      })
      .catch(error => console.log(error));
  }

  useEffect(() => {
    // Fetch list of users from the API
    fetch('http://localhost:9292/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);

  const handleUserChange = (e) => {
    setSelectedUser(e.target.value);
  }

  return (
    <div className='create_project'>
      <h2>Create a New Project</h2>
      <form className='form' onSubmit={handleCreate}>
      <label>
        Id:
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
    </label>
        <label>
        Title:
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
    </label>
    <label>
        Goals:
      <input type="text" value={goals} onChange={(e) => setGoals(e.target.value)} />
    </label>
    <label>
      Timeframe:
      <input type="text" value={timeframe} onChange={(e) => setTimeframe(e.target.value)} />
    </label>
    <label>
      Status:
      <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
    </label>
    <label>
      Created_at:
      <input type="text" value={created_at} onChange={(e) => setCreated_at(e.target.value)} />
    </label>
    <label>
      updated_at:
      <input type="text" value={updated_at} onChange={(e) => setUpdated_at(e.target.value)} />
    </label>
    <label>
      Assign to:
      <select value={selectedUser} onChange={handleUserChange}>
        <option value="">Select user</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </label>
    <button type="submit">Create Project</button>
  </form>
</div>
);
};

export default CreateProject;