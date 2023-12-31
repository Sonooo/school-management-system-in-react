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
      <br />

      <div className="row">

        
          <div className="col-md-4  mb-4">
          <Link to="/showstudent" >

            <div className="card">
              <img src={student} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="btn btn-block btn-success">Students Info</h5>
              </div>
            </div>
            </Link>

          </div>

          <div className="col-md-4  mb-4">
          <Link to="/showteacher">

            <div className="card">
              <img src={teacher} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="btn btn-block btn-success">Teachers Info</h5>
              </div>
            </div>
            </Link>

          </div>

          <div className="col-md-4  mb-4">
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

          <div className="col-md-4  mb-4">
          <Link to="/addstudent">
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

          <div className="col-md-4  mb-4">
          <Link to="/addresults">
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

          <div className="col-md-4  mb-4">
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

          {/* <div className="col-md-4  mb-4">
          <Link to="/all">
            <div className="card">
              <img src={result} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="btn btn-lg btn-block btn-success">
                  Add and Show all Info
                </h5>
              </div>
            </div>
            </Link>
          </div> */}

          <div className="col-md-4  mb-4">
          <Link to="/Showall">
            <div className="card">
              <img src={result} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="btn btn-lg btn-block btn-success">
                  Show all Info
                </h5>
              </div>
            </div>
            </Link>
          </div>


      </div>
    </div>
  );
}
