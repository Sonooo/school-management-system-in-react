import React from 'react';
import StudentForm from './StudentForm';
import StudentList from './StudentList';
import Teacher from './Teacher';
import TeacherList from './TeacherList';
import Entermarks from './Entermarks';
import Result from './Result';

const Student = () => {
  return (
    <div className='container'>
      <h2 className='text-center'>Student Management</h2>
  <div className="row">

        <div className="col-md-6"><StudentForm />
        </div>
        <div className="col-md-6"><StudentList />
        </div>

<hr />
      
        <div className="col-md-6">      <Teacher />

        </div>
        <div className="col-md-6"><TeacherList />
        </div>
<hr />
        <div className="col-md-6">      <Entermarks />

        </div>
        <div className="col-md-6"><Result />
        </div>
  </div>

  <hr />
      
    </div>
  );
};

export default Student;
