import React from 'react';
import { Link } from 'react-router-dom';
import '../../CSS/style.css'

const Sidebar = () => {
  return (
    <div className="sidebar bg-dark text-light p-4">
      <h3 className="mb-4">Dashboard</h3>
      <ul className="list-unstyled">
        <li>
          <Link to="/students" className="text-light text-decoration-none">
            Students
          </Link>
        </li>
        <li>
          <Link to="/teachers" className="text-light text-decoration-none">
            Teachers
          </Link>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
