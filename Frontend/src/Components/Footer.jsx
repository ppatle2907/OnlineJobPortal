import React from 'react'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <footer className="w-100 p-5">
        <div className="container">
          <ul class="nav justify-content-center mb-3">
            <li class="nav-item">
              <NavLink className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to="/jobs">
                Jobs
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link " to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          {/* Footer Bottom */}
          <>
            <p className="text-center">
              &copy;{new Date().getFullYear()} Online Job Portal - All Rights
              Reserved.
            </p>
          </>
        </div>
      </footer>
    </>
  )
}

export default Footer
