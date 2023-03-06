import React, { useState, useEffect } from 'react';
import '../styles/Projects.css'


const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('http://localhost:9292/projects');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.log(error);
      }
    }

    async function fetchMembers() {
      try {
        const response = await fetch('http://localhost:9292/members');
        const data = await response.json();
        setMembers(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProjects();
    fetchMembers();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:9292/projects/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setProjects(projects.filter(project => project.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      const response = await fetch(`http://localhost:9292/projects/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          status: newStatus
        })
      });

      if (response.ok) {
        const updatedProjects = projects.map(project => {
          if (project.id === id) {
            return {
              ...project,
              status: newStatus
            };
          }
          return project;
        });

        setProjects(updatedProjects);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getRandomMembers = (project) => {
    const randomMembers = [];

    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * members.length);
      const member = members[randomIndex];
      randomMembers.push(member);
    }

    return randomMembers;
  };

  return (
    <div className='projects'>
      <h2>Current Projects</h2>

      <div className='projects_display'>
        {projects.map(project => (
          <div className='project' key={project.id}>
            <p>No: {project.id}</p>
            <p>Title: {project.title}</p>
            <p>Goals: {project.goals}</p>
            <p>Status: {project.status}</p>
            <p>Timeframe: {project.timeframe}</p>
            <p>created_at: {project.created_at}</p>
            <p>updated_at: {project.updated_at}</p>

            <div className='buttons'>
              <button onClick={() => handleDelete(project.id)}>Delete</button>
              <button onClick={() => handleStatusUpdate(project.id, 'In Progress')}>
                Mark as InProgress
              </button>
              <button onClick={() => handleStatusUpdate(project.id, 'Completed')}>
                Mark as Completed
              </button>
              <button onClick={() => handleStatusUpdate(project.id, 'On Hold')}>
                Mark as onHold
              </button>
            </div>

            <div className='members'>
              <h4>Members:</h4>

              <div>
                {getRandomMembers(project).map(member => (
                  <p key={member.id}>{member.name}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;