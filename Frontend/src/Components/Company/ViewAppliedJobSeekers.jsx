import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import JobSeekerEducationList from './JobSeekerEducationList'
import JobSeekerExerienceList from './JobSeekerExerienceList'
import companyServices from '../../services/company-services'

const ViewAppliedJobSeekers = () => {
  //get all jobseeker applied for this particular post
  let { id } = useParams()
  const [jobSeekers, setJobSeekers] = useState([])

  const init = () => {
    console.log('in comapny: ', id)
    companyServices
      .getAllAppliedJobSeeker(id)
      .then((response) => {
        console.log('appplied jobseeker : ', response.data)
        setJobSeekers(response.data)
      })
      .catch((error) => {
        console.log('something went wrong : ', error)
      })
  }

  useEffect(() => {
    init()
  }, [])

  console.log('job Id : ', id)
  return (
    <>
      <section className="inner-body">
        <div className="container">
          <h1 className="font-weight-bold mt-5 text-center">
            View Applied JobSeekers
          </h1>

          {jobSeekers.map((jobseeker) => {
            return (
              <>
                <h2 className="font-weight-bold mt-5">Personal Details : </h2>
                <div className="card border-0 default-border-radius default-box-shadow mt-5 mb-5">
                  <div className="card-body p-5">
                    <div className="row">
                      <div className="col-sm-3 mb-3">
                        <b> First Name </b>
                      </div>
                      <div className="col-sm-9 mb-3s">
                        : {jobseeker.firstName}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-3 mb-3">
                        <b> Last Name </b>
                      </div>
                      <div className="col-sm-9 mb-3s">
                        :{jobseeker.lastName}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-3 mb-3">
                        <b> EmailId </b>
                      </div>
                      <div className="col-sm mb-3s-9">
                        : {jobseeker.loginId.emailId}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-3 mb-3">
                        <b> Phone Number </b>
                      </div>
                      <div className="col-sm mb-3s-9">
                        : {jobseeker.loginId.phoneNumber}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-3 mb-3">
                        <b> Location </b>
                      </div>
                      <div className="col-sm mb-3s-9">
                        : {jobseeker.city.cityName} ,{' '}
                        {jobseeker.city.state.stateName}
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="font-weight-bold mt-5 mb-4">
                  Education Details
                </h2>
                <JobSeekerEducationList
                  allEducation={jobseeker.allEducation}
                  key={jobseeker.id}
                />
                <h2 className="font-weight-bold mt-5 mb-4">
                  Experiance Details
                </h2>
                <JobSeekerExerienceList
                  allExperince={jobseeker.allExperince}
                  key={jobseeker.id}
                />
                <hr />
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default ViewAppliedJobSeekers
