import React from 'react'
import Experience from '../JobSeeker/Experience'
const JobSeekerExerienceList = (props) => {
  return (
    <>
      <div className="row">
        {props.allExperince.map((experience) => {
          console.log('Job data in map : ', experience)
          return <Experience experience={experience} key={experience.id} />
        })}
      </div>
    </>
  )
}

export default JobSeekerExerienceList
