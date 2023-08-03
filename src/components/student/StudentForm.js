import React, { useState } from 'react';

const StudentForm = () => {
  const [studentData, setStudentData] = useState({
    name: '',
    rollNumber: '',
    grade: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to save the student data to local storage or IndexedDB
 const students = JSON.parse(localStorage.getItem('students') || '[]')
 students.push(studentData)
    console.log('Student Data:', studentData);
    localStorage.setItem('students', JSON.stringify(students));

    setShowSuccess(true)
    // Clear the form after submission
    setStudentData({
      name: '',
      rollNumber: '',
      grade: '',
      
    });
  };



  return (
    <div className='text-center container' style={{textAlign:"center", margin:"auto", padding:"10px"}}>
      <h3 className='text-center'>Add Student</h3>
      {
        showSuccess && (
          <div className='alert alert-success' role='alert'>
            Data Added Successfully
          </div>
        )
      }
      <form  onSubmit={handleSubmit} className='border border-secondary' >
        <div className='form-outline mb-4 col row'>
        <label className='form-label'> 
          Name:
          <input
            type="text"
            name="name"
            value={studentData.name}
            onChange={handleChange}
            className='form-control'
            required
          />
        </label>
        </div>

        <div className='form-outline mb-4 col row'>
        <label className='form-label'> 
          Roll Number:
          <input
            type="text"
            name="rollNumber"
            value={studentData.rollNumber}
            onChange={handleChange}
            className='form-control'
            required
          />
        </label>
        </div>
        <div className='form-outline mb-4 col row'>
        <label className='form-label'> 
          Grade:
          <input
            type="text"
            name="grade"
            value={studentData.grade}
            onChange={handleChange}
            className='form-control'
            required
          />
        </label>
        </div>
        <br />
        <button className='btn btn-block btn-success' type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default StudentForm;
