import React from 'react';
import { Link } from 'react-router-dom';

const FrontPage = () => {
  return (
    <div>
      <h1>Welcome to School Management System</h1>
      <div>
        <Link to="/students">
          <div className="card">Students</div>
        </Link>
        <Link to="/teachers">
          <div className="card">Teachers</div>
        </Link>
        <Link to="/classes">
          <div className="card">Classes</div>
        </Link>
        {/* Add more cards for other sections */}
      </div>
    </div>
  );
};

export default FrontPage;
