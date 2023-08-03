import React, { useState, useEffect } from 'react';



const StudentList = () => {

  const [students, setStudents] = useState([]);
  useEffect(() => {
    // Fetch the student data from local storage or IndexedDB and update the state
    // For this example, we'll use a dummy data array
    const storedStudentsData = JSON.parse( localStorage.getItem('students') || '[]' );

    const dummyData = [
      { id: 1, name: 'John Doe', rollNumber: '123', grade: 'A' },
      { id: 2, name: 'Jane Smith', rollNumber: '456', grade: 'B' },
      // Add more dummy data or fetch real data from local storage or IndexedDB
    ];
    // const allData = [dummyData, ...usersdata]
    dummyData.push(...storedStudentsData)
    setStudents(dummyData);
    // setStudents(usersdata);
  }, []);

  return (
    <div>
      <h3 className='text-center'>Student's List</h3>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Roll Number</th>
      <th scope="col">Grade</th>
    </tr>
  </thead>
  <tbody>
    {
        [...new Set(students)].map((student , index)=>(
            <tr key={index}>

                <td>{student.name}</td>
                <td>{student.rollNumber}</td>
                <td>{student.grade}</td>


            </tr>
        ))
    }
  </tbody>
</table>
    </div>
  );
};

export default StudentList;
