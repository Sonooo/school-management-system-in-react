import React from 'react';

const Navbar = () => {
    return (
      <div>
        <ul class="nav nav-tabs " style={{background: 'black'}}>
          <li class="nav-item">
            <a class="nav-link" href="/" style={{color: 'white'}}>
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/addstudent" style={{color: 'white'}}>
            addstudent
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="/addteacher"
              style={{color: 'white'}}
            >
              addteacher
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="/addresults"
              style={{color: 'white'}}
            >
              addresults
            </a>
          </li>

          <li class="nav-item">
            <a
              class="nav-link"
              href="/Signin"
              style={{color: 'white'}}
            >
              SignIn
            </a>
          </li>

          <li class="nav-item">
            <a
              class="nav-link"
              href="/all"
              style={{color: 'white'}}
            >
             add and show
            </a>
          </li>

          <li class="nav-item">
            <a
              class="nav-link"
              href="/Showall"
              style={{color: 'white'}}
            >
              Report
            </a>
          </li>


        </ul>
      </div>
    );
}

export default Navbar;
