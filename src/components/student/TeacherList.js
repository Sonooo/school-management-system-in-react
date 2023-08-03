import React, { useState, useEffect } from 'react';
// import Student from './Student';

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    // Fetch the student data from local storage or IndexedDB and update the state
    const storedtechersData = JSON.parse( localStorage.getItem('teachers') || '[]' );

    // For this example, we'll use a dummy data array
    const dummyData = [
      { id: 1, name: 'Devashish', subject: 'math', email: 'A@tcs.com' },
      { id: 2, name: 'Veeramani', subject: 'english', email: 'B@ge.com' },
      // Add more dummy data or fetch real data from local storage or IndexedDB
    ];
    dummyData.push(...storedtechersData)
    setTeachers(dummyData);
  }, []);

  return (
    <div>
      <h3 className='text-center'>Teacher's List</h3>
      {/* <ul>
        {teachers.map((student) => (
          <li key={student.id}>
            {student.name} - Subject: {student.subject} - Email: {student.email}
          </li>
        ))}
      </ul> */}

      <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Subject</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    {
        [...new Set(teachers)].map((teacher , index)=>(
            <tr key={index}>

                <td>{teacher.name}</td>
                <td>{teacher.subject}</td>
                <td>{teacher.email}</td>


            </tr>
        ))
    }
  </tbody>
</table>
    </div>
  );
};

export default TeacherList;
