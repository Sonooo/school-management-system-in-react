import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import StudentList from './components/student/StudentList';
import TeacherList from './components/student/TeacherList';
import Homepage from './components/student/Homepage';
import StudentForm from './components/student/StudentForm';
import Teacher from './components/student/Teacher';
import Result from './components/student/Result';
import StudentAddnView from './Views/StudentAddnView';
import TeachersAddNview from './Views/TeachersAddNview';
import Entermarks from './components/student/Entermarks';
import Student from './components/student/Student';
import ShowAllData from './Views/ShowAllData';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          {/* Nested route components */}
          <Route path="/" element={<Homepage/> } />
          <Route path="/students" element={<StudentList />} />
          <Route path="/teachers" element={<TeacherList />} />
          <Route path="/"  element={<Homepage />}/>
  <Route path="addstudent"  element={<StudentForm />}/>
  <Route path="addteacher"  element={<Teacher />}/>
  <Route path="showstudent"  element={<StudentList />}/>
  <Route path="showteacher"  element={<TeacherList />}/>
  <Route path="showresult"  element={<Result />}/>
  <Route path="studentsAddnView"  element={<StudentAddnView />}/>
  <Route path="teachersAddNview"  element={<TeachersAddNview />}/>
  <Route path="showaddresult"  element={<showAddResult />}/>
  <Route path="addresults"  element={<Entermarks />}/>
  <Route path="all"  element={<Student />}/>

  <Route path="Showall"  element={<ShowAllData />}/>
          {/* Add more nested routes for other components */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
