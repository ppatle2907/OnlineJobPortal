import React from 'react'
import CompanyJob from './CompanyJob'

const CompanyJobList = (props) => {
  console.log('jobPost are ', props.jobPost)

  return (
    <div className="row">
      {props.jobPost.map((job) => {
        console.log('Job data in map : ', job)
        return <CompanyJob job={job} key={job.id} />
      })}
    </div>
  )
}

export default CompanyJobList
