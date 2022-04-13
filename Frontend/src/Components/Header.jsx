import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthenticateContext } from '../Context'
import logo from '../assets/jobportal-logo.png'

import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Link } from 'react-bootstrap-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  const { isAuth, setIsAuth } = useContext(AuthenticateContext)
  return (
    <>
      <header className="fixed-top">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-0">
          <div className="container">
            <div className="col-sm-4">
              <NavLink className="navbar-brand h-auto" to="/">
                <img src={logo} alt="Logo" />
              </NavLink>
            </div>
            <div className="col-sm-4">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto">
                  <li className="nav-item active">
                    <NavLink className="nav-link" to="/">
                      Home <span className="sr-only">(current)</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/jobs">
                      Jobs
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link " to="/contact">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4">
              <ul className="navbar-nav pull-right">
                <li className="nav-item">
                  {isAuth ? (
                    <NavLink
                      className="nav-link "
                      to="/"
                      onClick={() => setIsAuth(false)}
                    >
                      Logout
                    </NavLink>
                  ) : (
                    <NavLink className="nav-link " to="/login">
                      Login
                    </NavLink>
                  )}
                </li>
                <li className="nav-item">
                  {isAuth ? (
                    <NavLink className="nav-link " to="/jobSeeker">
                      Profile
                    </NavLink>
                  ) : (
                    <Dropdown>
                      <Dropdown.Toggle variant="" id="dropdown-basic">
                        Register
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item to={`/register`}>
                          <NavLink className="nav-link " to="/register">
                            JobSeeker
                          </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item to={`/companyRegister`}>
                          <NavLink className="nav-link " to="/companyRegister">
                            Company
                          </NavLink>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    // <NavLink className="nav-link " to="/register">
                    //   Register
                    // </NavLink>
                  )}
                </li>

                <li className="nav-item">
                  {isAuth ? (
                    <NavLink
                      className="nav-link "
                      to="/myjobs"
                      // onClick={() => setIsAuth(false)}
                    >
                      MyJobs
                    </NavLink>
                  ) : (
                    ''
                  )}
                </li>

                {/* <li className="nav-item">
                  {isAuth ? <h5>Welcome {}</h5>(
                    ''
                  )}
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
