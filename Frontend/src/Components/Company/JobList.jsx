import React from 'react'
import Job from './Job'
const JobList = (props) => {
  console.log('jobPost are ', props.jobPost)

  return (
    <section className="inner-body mt-5">
      <div className="container">
        <div className="row">
          {props.jobPost.map((job) => {
            console.log('Job data in map : ', job)

            return <Job job={job} key={job.id} />
          })}
        </div>
      </div>
    </section>
  )
}

export default JobList
