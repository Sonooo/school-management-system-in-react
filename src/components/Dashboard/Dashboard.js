import React from 'react';
import Sidebar from './Sidebar';
import { Link, Outlet } from 'react-router-dom'; // Import Outlet

import '../../CSS/style.css'

const Dashboard = () => {
    return (
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <h4 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                Dashboard
              </h4>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link to="/students" className="nav-link">
                    Students
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/teachers" className="nav-link">
                    Teachers
                  </Link>
                </li>
                {/* Add more navigation links as needed */}
              </ul>
            </div>
          </nav>
  
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <h1 className="mt-4">School Management System</h1>
            <Outlet /> {/* Render the nested route component */}
          </main>
        </div>
      </div>
    );
  };
  
  export default Dashboard;