import React, { useState, useEffect } from 'react';
import UpdateTeacherForm from './UpdateForms/UpdateTeacherForm';
// import Student from './Student';

const TeacherList = (reloadData) => {
  const [teachers, setTeachers] = useState([]);
  const [selectedTeacherIndex, setSelectedTeacherIndex] = useState(null);

  useEffect(() => {
    // Fetch the student data from local storage or IndexedDB and update the state
    const storedtechersData = JSON.parse( localStorage.getItem('teachers') || '[]' );

    // For this example, we'll use a dummy data array
    const dummyData = [
      { id: 1, name: 'Devashish', subject: 'math', email: 'A@tcs.com' },
      { id: 2, name: 'Veeramani', subject: 'english', email: 'B@ge.com' },
      { id: 3, name: 'Pulkit', subject: 'IT', email: 'P@tcs.com' },
      { id: 4, name: 'Aabhishek', subject: 'Hindi', email: 'Aa@ge.com' },
      // Add more dummy data or fetch real data from local storage or IndexedDB
    ];

    storedtechersData.length < 1 ?     setTeachers(dummyData) :     setTeachers(storedtechersData);

  }, [reloadData]);

  const handleUpdate = (updatedTeacher) => {
    const updatedTeachers = [...teachers];
    updatedTeachers[selectedTeacherIndex] = updatedTeacher;
    localStorage.setItem('teacher', JSON.stringify(updatedTeachers));
    setTeachers(updatedTeachers);
    setSelectedTeacherIndex(null);
  };

  const handleDelete = (index) => {
    const updatedTeachers = teachers.filter((_, i) => i !== index);
    localStorage.setItem('teachers', JSON.stringify(updatedTeachers));
    setTeachers(updatedTeachers)
  };

  return (
    <div>
      <h3 className='text-center'>Teacher's List</h3>
    

      <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Subject</th>
      <th scope="col">Email</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {
        [...new Set(teachers)].map((teacher , index)=>(
            <tr key={index}>

                <td>{teacher.name}</td>
                <td>{teacher.subject}</td>
                <td>{teacher.email}</td>
                <td>
                {selectedTeacherIndex === index ? (
                  <UpdateTeacherForm
                    teacher={teacher}
                    onUpdate={handleUpdate}
                  />
                ) : (
                  <button onClick={() => setSelectedTeacherIndex(index)}>
                    Update
                  </button>
                )}                </td>

<td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>


            </tr>
        ))
    }
  </tbody>
</table>
    </div>
  );
};

export default TeacherList;
