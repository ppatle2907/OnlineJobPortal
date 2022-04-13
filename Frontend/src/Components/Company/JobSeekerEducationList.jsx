import React from 'react'

import Education from '../JobSeeker/Education'

const JobSeekerEducationList = (props) => {
  return (
    <>
      <div className="row">
        {props.allEducation.map((e) => {
          return <Education e={e} key={e.id} />
        })}
      </div>
    </>
  )
}

export default JobSeekerEducationList
