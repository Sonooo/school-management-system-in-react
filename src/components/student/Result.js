import React, { useState, useEffect } from 'react';



const Result = () => {

  const [students, setStudents] = useState([]);
  useEffect(() => {
    // Fetch the student data from local storage or IndexedDB and update the state
    // For this example, we'll use a dummy data array
    const storedStudentsData = JSON.parse( localStorage.getItem('students') || '[]' );

    const dummyData = [
      {
        name: "Saurabh sanap",
        rollNumber: "22",
        grade: "B",
        standard: "4",
        div: "A",
        marks: [
            {
                subject: "Maths",
                marks: 70
            },
            {
                subject: "English",
                marks: 90
            },
            {
                subject: "Hindi",
                marks: 78
            },
            {
                subject: "Marathi",
                marks: 23
            }
        ],
        "division": "a"
    },
    {
      name: "rahul sanap",
      rollNumber: "21",
      grade: "A",
      standard: "4",
      div: "A",
      marks: [
          {
              subject: "Maths",
              marks: 0
          },
          {
              subject: "English",
              marks: 0
          },
          {
              subject: "Hindi",
              marks: 0
          },
          {
              subject: "Marathi",
              marks: 0
          }
      ],
      "division": "a"
  }      // Add more dummy data or fetch real data from local storage or IndexedDB
    ];
    // const allData = [dummyData, ...usersdata]
    dummyData.push(...storedStudentsData)
    setStudents(dummyData);
    // setStudents(usersdata);
  }, []);

  return (
    <div>
      <h3 className="text-center">Result</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Roll Number</th>
            <th scope="col">Grade</th>
            <th scope="col">div</th>
            <th scope="col">standard</th>
            <th scope="col">Percentage</th>

          </tr>
        </thead>
        <tbody>
          {[...new Set(students)].map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.rollNumber}</td>
              <td>{student.grade}</td>
              <td>{student.div}</td>
              <td>{student.standard}</td>
              {student.marks && (
                <td>
                  {student.marks
                    .map((mark) => mark.marks)
                    .reduce((sum, num) => sum + num) / 4}
                </td>
              )}

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Result;
