import React from 'react'
import '../.././CSS/style.css'
import result from '../.././CSS/images/result.png'
import teacher from '../.././CSS/images/teachers.png'
import student from '../.././CSS/images/student.png'
import edit from '../.././CSS/images/edit.png'
import { Link } from 'react-router-dom'




export default function Homepage() {
  return (
    <div className="container mb-4 ">
      <h2 className="text-center"> School Management System</h2>
      <br />

      <div className="row">

        
          <div className="col-md-3  mb-4">
          <Link to="/studentsAddnView" >

            <div className="card">
              <img src={student} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="btn btn-block btn-success">Students Info</h5>
              </div>
            </div>
            </Link>

          </div>

          <div className="col-md-3  mb-4">
          <Link to="/teachersAddNview">

            <div className="card">
              <img src={teacher} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="btn btn-block btn-success">Teachers Info</h5>
              </div>
            </div>
            </Link>

          </div>

          <div className="col-md-3  mb-4">
          <Link to="/showresult">
            <div className="card">
              <img src={result} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="btn btn-lg btn-block btn-success">
                  Result Info
                </h5>
              </div>
            </div>
            </Link>
          </div>

          <div className="col-md-3  mb-4">
          <Link to="/showresult">
            <div className="card">
              <img src={edit} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="btn btn-lg btn-block btn-success">
                  Add Student
                </h5>
              </div>
            </div>
            </Link>
          </div>

          <div className="col-md-3  mb-4">
          <Link to="/addstudent">
            <div className="card">
              <img src={edit} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="btn btn-lg btn-block btn-success">
                  Add  Marks
                </h5>
              </div>
            </div>
            </Link>
          </div>

          <div className="col-md-3  mb-4">
          <Link to="/addteacher">
            <div className="card">
              <img src={edit} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="btn btn-lg btn-block btn-success">
                  Add Teacher
                </h5>
              </div>
            </div>
            </Link>
          </div>



      </div>
    </div>
  );
}
