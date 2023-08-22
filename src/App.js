import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import StudentList from './components/student/StudentList';
import TeacherList from './components/student/TeacherList'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          {/* Nested route components */}
          <Route path="/" element={<h2>Welcome to the Dashboard</h2>} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/teachers" element={<TeacherList />} />
          {/* Add more nested routes for other components */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
