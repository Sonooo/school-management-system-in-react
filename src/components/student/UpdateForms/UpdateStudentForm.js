import React, { useState } from 'react';

const UpdateStudentForm = ({ student, onUpdate }) => {
  const [updatedStudent, setUpdatedStudent] = useState(student);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedStudent({ ...updatedStudent, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    onUpdate(updatedStudent);
  };

  return (
    <div>
      <h4>Update Student</h4>
      <form onSubmit={handleUpdate}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={updatedStudent.name}
          onChange={handleChange}
        />
        <label>Roll Number:</label>
        <input
          type="text"
          name="rollNumber"
          value={updatedStudent.rollNumber}
          onChange={handleChange}
        />
        <label>Grade:</label>
        <input
          type="text"
          name="grade"
          value={updatedStudent.grade}
          onChange={handleChange}
        />
        {/* Add more input fields as needed */}
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateStudentForm;
