import React from 'react'

import Experience from './Experience'
import { Link } from 'react-router-dom'

const ExperienceList = (props) => {
  console.log('props', props.jobSeeker.experienceDetails)
  return (
    <>
      <div className="row mt-5 mb-5">
        <div className="col-sm-6">
          <h2 className="font-weight-bold">4.Experience Details : </h2>
        </div>
        <div className="col-sm-6 text-right">
          <Link className="btn btn-primary rounded-pill" to={`/experience`}>
            Add Experince
          </Link>
        </div>
      </div>

      <div className="row">
        {props.jobSeeker.experienceDetails.map((experience) => {
          console.log('Job data in map : ', experience)
          return <Experience experience={experience} key={experience.id} />
        })}
      </div>
    </>
  )
}

export default ExperienceList
