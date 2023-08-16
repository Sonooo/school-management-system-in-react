import React, { useState, useEffect } from 'react';
import UpdateStudentForm from './UpdateForms/UpdateStudentForm';



const StudentList = ({reloadData}) => {

  const [students, setStudents] = useState([]);
  const [selectedStudentIndex, setSelectedStudentIndex] = useState(null);

  useEffect(() => {
    // Fetch the student data from local storage or IndexedDB and update the state
    // For this example, we'll use a dummy data array
    const storedStudentsData = JSON.parse( localStorage.getItem('students') || '[]' );

    const dummyData = [
      { id: 1, name: 'Rahul Andhale', rollNumber: '1', grade: 'A' },
      { id: 2, name: 'Piyush SHinde', rollNumber: '2', grade: 'B' },
      { id: 1, name: 'Gagan Gaikawad', rollNumber: '3', grade: 'A' },
      { id: 2, name: 'Monika Kaushal', rollNumber: '4', grade: 'B' },
      // Add more dummy data or fetch real data from local storage or IndexedDB
    ];
    // const allData = [dummyData, ...usersdata]
    // dummyData.push(...storedStudentsData)
    storedStudentsData.length < 1 ? setStudents(dummyData) :     setStudents(storedStudentsData);
    // setStudents(usersdata);
  }, [reloadData]);

  const handleUpdate = (updatedStudent) => {
    const updatedStudents = [...students];
    updatedStudents[selectedStudentIndex] = updatedStudent;
    localStorage.setItem('students', JSON.stringify(updatedStudents));
    setStudents(updatedStudents);
    setSelectedStudentIndex(null);
  };

  const handleDelete = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
    setStudents(updatedStudents);
  };

  return (
    <div>
      <h3 className='text-center'>Student's List</h3>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Roll Number</th>
      <th scope="col">Grade</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>


    </tr>
  </thead>
  <tbody>
    {
        [...new Set(students)].map((student , index)=>(
            <tr key={index}>

                <td>{student.name}</td>
                <td>{student.rollNumber}</td>
                <td>{student.grade}</td>
                <td>
                {selectedStudentIndex === index ? (
                  <UpdateStudentForm
                    student={student}
                    onUpdate={handleUpdate}
                  />
                ) : (
                  <button onClick={() => setSelectedStudentIndex(index)}>
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

export default StudentList;
