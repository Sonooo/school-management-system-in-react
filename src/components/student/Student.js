import React from 'react';
import StudentForm from './StudentForm';
import StudentList from './StudentList';
import Teacher from './Teacher';
import TeacherList from './TeacherList';
import Entermarks from './Entermarks';
import Result from './Result';

const Student = () => {
  return (
    <div>
      <h2 className='text-center'>Student Management</h2>
      <StudentForm />
      <StudentList />
      <Teacher />
      <TeacherList />
      <Entermarks />
      <Result />
    </div>
  );
};

export default Student;
