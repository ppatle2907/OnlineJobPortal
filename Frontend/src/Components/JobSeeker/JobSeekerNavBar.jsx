import React from 'react'
import { NavLink } from 'react-bootstrap'
import EducationalDetails from './EducationalDetails'

const JobSeekerNavBar = () => {
  return (
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <NavLink class="nav-link active" onClick={<EducationalDetails />}>
          Education
        </NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to={''}>
          Experience
        </NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to={''}>
          Skills
        </NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link ">Disabled</NavLink>
      </li>
    </ul>
  )
}

export default JobSeekerNavBar
