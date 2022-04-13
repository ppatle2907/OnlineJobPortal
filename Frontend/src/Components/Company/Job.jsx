import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

const Job = (props) => {
  console.log('in job comp ', localStorage.getItem('userData'))

  const saveJobData = () => {
    // store the user in localStorage
    localStorage.setItem('jobDescription', JSON.stringify(props))
    const e = localStorage.getItem('jobDescription')
    let job = JSON.parse(e)
    console.log('jobDescription : ', job)
  }

  return (
    <>
      <div className="col-6">
        <div className="card mb-5 border-0 default-box-shadow rounded-lg default-border-radius">
          <div className="card-body p-5">
            <h2 className="font-weight-bold">{props.job.jobTitle}</h2>
            <h4 className="mb-3">{props.job.jobTypeId.jobtypes}</h4>
            <div className="row">
              <div className="col-sm-3">
                <p>Experience </p>
              </div>
              <div className="col-sm-9">: {props.job.jobExperience} Years</div>
            </div>
            <div className="row">
              <div className="col-sm-3">
                <p>Location </p>
              </div>
              <div className="col-sm-9">
                : {props.job.jobLocationId.city.cityName},
                {props.job.jobLocationId.city.state.stateName}
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3">
                <p>Company </p>
              </div>
              <div className="col-sm-9">
                {' '}
                : {props.job.componyId.companyName}{' '}
              </div>
            </div>

            <Link
              className="btn btn-primary rounded-pill mt-4"
              to={`/viewJobPost/${props.job.id}`}
              onClick={saveJobData}
            >
              View Job Post
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Job
