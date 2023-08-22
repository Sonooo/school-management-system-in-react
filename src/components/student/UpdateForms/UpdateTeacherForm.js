import React, { useState } from 'react';

const UpdateTeacherForm = ({teacher,onUpdate}) => {
    const [updatedTeacher, setupdatedTeacher] = useState(teacher);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setupdatedTeacher({ ...updatedTeacher, [name]: value });
      };
    
      const handleUpdate = (e) => {
        e.preventDefault();
        onUpdate(updatedTeacher)

      };
    
  
    return (
        <div>
        <h4>Update Teacher</h4>
        <form onSubmit={handleUpdate}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={updatedTeacher.name}
            onChange={handleChange}
          />
          <label>Subject:</label>
          <input
            type="text"
            name="subject"
            value={updatedTeacher.subject}
            onChange={handleChange}
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={updatedTeacher.email}
            onChange={handleChange}
          />
          {/* Add more input fields as needed */}
          <button type="submit">Update</button>
        </form>
      </div>
    );
  };

export default UpdateTeacherForm;
