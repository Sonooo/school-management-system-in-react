import React, { useState } from 'react';

const Entermarks = (onFormsubmit) => {
  const [resultData, setresultData] = useState({
    name: '',
    rollNumber: '',
    grade: '',
    standard:'',
    div:'',
    marks:[
        {
            subject:'Maths',
            marks:0
        },
        {
            subject:'English',
            marks:0
        },
        {
            subject:'Hindi',
            marks:0
        },
        {
            subject:'Marathi',
            marks:0
        }
    ]
  });


  const [showSuccess, setShowSuccess] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setresultData({ ...resultData, [name]: value });
  };

  const handleSubjectMarksChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSubjectMarks = [...resultData.marks];
    updatedSubjectMarks[index][name] = parseInt(value);
    setresultData({ ...resultData, marks: updatedSubjectMarks });
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormsubmit();
    // Add your logic here to save the result data to local storage or IndexedDB
 const results = JSON.parse(localStorage.getItem('results') || '[]')
 results.push(resultData)
    console.log('result Data:', resultData);
    localStorage.setItem('results', JSON.stringify(results));
    // Clear the form after submission
    setShowSuccess(true)

    setresultData({
        name: '',
        rollNumber: '',
        grade: '',
        standard:'',
        div:'',
        marks: 
        resultData.marks.map((marks) =>(
            {
                ...marks,
                marks:0,
            }
        )
        )
      
      
    });
  };



  return (
    <div
      className="text-center container"
      style={{ textAlign: "center", margin: "auto", padding: "10px" }}
    >
      <h3 className="text-center">Add result</h3>
      {
        showSuccess && (
          <div className='alert alert-success' role='alert'>
            Data Submitted Successfully
          </div>
        )
      }
      <form onSubmit={handleSubmit}>
        <div className="form-outline mb-4 col row">
          <label className="form-label">
            Name:
            <input
              type="text"
              name="name"
              value={resultData.name}
              onChange={handleChange}
              className="form-control"
            />
          </label>
        </div>

        <div className="form-outline mb-4 col row">
          <label className="form-label">
            Roll Number:
            <input
              type="text"
              name="rollNumber"
              value={resultData.rollNumber}
              onChange={handleChange}
              className="form-control"
            />
          </label>
        </div>
        <div className="form-outline mb-4 col row">
          <label className="form-label">
            Grade:
            <input
              type="text"
              name="grade"
              value={resultData.grade}
              onChange={handleChange}
              className="form-control"
            />
          </label>
        </div>

        <div className="form-outline mb-4 col row">
          <label className="form-label">
          standard:
            <input
              type="number"
              name="standard"
              value={resultData.standard}
              onChange={handleChange}
              className="form-control"
            />
          </label>
        </div>

        <div className="form-outline mb-4 col row">
          <label className="form-label">
            Division:
            <input
              type="text"
              name="div"
              value={resultData.div}
              onChange={handleChange}
              className="form-control"
            />
          </label>
        </div>

    <p>Marks</p>

    {
        resultData.marks.map((marks,index)=>(
            <div className="form-outline mb-4 col row">
            <label className="form-label">
                {marks.subject}
              <input
                type="number"
                name="marks"
                value={marks.marks}
                onChange={(e)=> handleSubjectMarksChange(index, e) }
                className="form-control"
              />
            </label>
          </div> 
        ))
    }
        
        <br />
        <button className="btn btn-block btn-success" type="submit">
          Add result
        </button>
      </form>
    </div>
  );
};

export default Entermarks;
