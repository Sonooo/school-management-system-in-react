import React, { useState } from 'react';

const Teacher = () => {
  const [teacherData, setTeacherData] = useState({
    name: '',
    subject: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacherData({ ...teacherData, [name]: value });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // Add your logic here to save the teacher data to local storage or IndexedDB
    const teachers = JSON.parse(localStorage.getItem('teachers') || '[]')
 teachers.push(teacherData)
    localStorage.setItem('teachers', JSON.stringify(teachers));
    console.log('Teacher Data:', teacherData);
    // Clear the form after submission
    setTeacherData({
      name: '',
      subject: '',
      email: '',
    });

  };

  

  return (
    <div className='text-center container'>
      <h2>Teacher Management</h2>
      <form onSubmit={handleSubmit}>

        <div className='form-outline mb-4 col row '>
        <label className='form-label'>
          Name:
          <input
            type="text"
            name="name"
            value={teacherData.name}
            onChange={handleChange}
            className='form-control'
          />
</label>
        </div>
        <br />
        <div className='form-outline mb-4 col row'>
        <label className='form-label'>
          Subject:
          <input
            type="text"
            name="subject"
            value={teacherData.subject}
            onChange={handleChange}
            className='form-control'
          />
</label>
        </div>
        <br />
        <div className='form-outline mb-4 col row'>
        <label className='form-label'>
          Email:
          <input
            type="text"
            name="email"
            value={teacherData.email}
            onChange={handleChange}
            className='form-control'
          />
</label>
        </div>
        <br />
        <button  className='btn btn-block btn-success' type="submit">Add Teacher</button>
      </form>
    </div>
  );
};

export default Teacher;
