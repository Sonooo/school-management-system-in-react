import React  from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import StudentForm from './components/student/StudentForm';
import Teacher from './components/student/Teacher';
import StudentList from './components/student/StudentList';
import TeacherList from './components/student/TeacherList';
import Result from './components/student/Result';
import StudentAddnView from './Views/StudentAddnView';
import TeachersAddNview from './Views/TeachersAddNview';
import Homepage from './components/student/Homepage';
import Entermarks from './components/student/Entermarks';
import Student from './components/student/Student';
// import Student from './components/student/Student';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <React.StrictMode>
    <BrowserRouter>
    <Routes>
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


</Routes>
    </BrowserRouter>
  </React.StrictMode>
);