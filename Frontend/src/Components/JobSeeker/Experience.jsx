import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const Experience = (props) => {
  return (
    <>
      <div className="col-6">
        <div className="card border-0 default-border-radius default-box-shadow mb-5">
          <div className="card-body p-5">
            <div className="row">
              <div className="col-sm-4">
                <p>
                  <strong>Company :</strong>
                </p>
              </div>
              <div className="col-sm-8">{props.experience.company}</div>
            </div>

            <div className="row">
              <div className="col-sm-4">
                <p>
                  <strong>current Sal :</strong>
                </p>
              </div>
              <div className="col-sm-8">{props.experience.currentSalary}</div>
            </div>

            <div className="row">
              <div className="col-sm-4">
                <p>
                  <strong>Designation :</strong>
                </p>
              </div>
              <div className="col-sm-8">{props.experience.designation}</div>
            </div>

            <div className="row">
              <div className="col-sm-4">
                <p>
                  <strong>Start Date :</strong>
                </p>
              </div>
              <div className="col-sm-8">{props.experience.startDate}</div>
            </div>

            <div className="row">
              <div className="col-sm-4">
                <p>
                  <strong>End Date :</strong>
                </p>
              </div>
              <div className="col-sm-8">{props.experience.endDate}</div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <p>
                  <strong>JObDescription :</strong>
                </p>
              </div>
              <div className="col-sm-8">{props.experience.jobDescription}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience
