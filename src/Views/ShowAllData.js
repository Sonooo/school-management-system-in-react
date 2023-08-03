import React from 'react'
import Result from '../components/student/Result'
import StudentList from '../components/student/StudentList'
import TeacherList from '../components/student/TeacherList'

export default function ShowAllData() {
  return (
    <div>

        <h3 className="text-center">  Result</h3>
         
         <Result />

        <h3 className="text-center">  students</h3>

        <StudentList />

        <h3 className="text-center">  Teachers</h3>

        <TeacherList/>

    </div>
  )
}
