import React from 'react';
import { Link, Outlet } from 'react-router-dom'; // Import Outlet
import { FaUserCircle } from 'react-icons/fa';

import '../../CSS/style.css'

const Dashboard = () => {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            School Management System
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
              </li>
              <li className="nav-item">
                <FaUserCircle size={32} className="ml-3" />
              </li>
            </ul>
          </div>
        </nav>
        <div className="row">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar navbar navbar-dark bg-dark">
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
            <Outlet />
          </main>
        </div>
      </div>
    );
  };
  
  
  export default Dashboard;