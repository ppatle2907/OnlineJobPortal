import React, { useState, useContext } from 'react'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'
import { AuthenticateContext } from '../../Context'

import jobseekerService from '../../services/jobseeker-service'
function Description() {
  const history = useHistory()

  const { isAuth, setIsAuth } = useContext(AuthenticateContext)

  let user = localStorage.getItem('user')
  user = JSON.parse(user)

  const [jobSeekerId, setJobSeekerId] = useState('')
  const [jobPostId, setJobPostId] = useState('')
  const [userjobDescription, setjobDescription] = useState({
    jobTitle: '',
    jobDescription: '',
    jobType: '',
    streetAddress: '',
    pincode: '',
    city: '',
    skillName: '',
    jobExperience: '',
  })

  const e = localStorage.getItem('jobDescription')
  let jobDesc = JSON.parse(e)
  console.log('inside jobDescription : ', jobDesc.job.id)

  let { id } = useParams()
  console.log('url id : ', id)

  function isSubmit(e) {
    e.preventDefault()
    console.log('user loginid ', user.loginId)
    console.log('authenitcated value', isAuth)

    //check user is logged in or not
    //if yes then apply to job
    if (isAuth) {
      const data = {
        jobSeekerId,
        jobPostId,
      }
      data.jobSeekerId = user.loginId
      data.jobPostId = id
      //apply to jobPost
      console.log('data : ', data)
      jobseekerService
        .jobApply(data)
        .then((response) => {
          console.log('respones : ', response.data)
          history.push('/myjobs')
        })
        .catch((error) => {
          console.log('something went wrong : ', error)
        })
    } else {
      //go to login page and show pop up message for apply to job first need to login to portal
      history.push('/login')
    }

    //if not then go to login page and first need to logged in
    console.log('yes submit is working')
  }

  return (
    <section className="inner-body mt-5">
      <div className="container">
        <div className="card border-0 default-border-radius default-box-shadow  mt-5">
          <div className="card-body p-5">
            <div className="row">
              <div className="col-sm-3 mb-2">
                <b>Job Title </b>
              </div>
              <div className="col-sm-9 mb-2">: {jobDesc.job.jobTitle} </div>
            </div>
            <div className="row">
              <div className="col-sm-3 mb-2">
                <b>Company Name</b>
              </div>
              <div className="col-sm-9 mb-2">
                : {jobDesc.job.componyId.companyName}
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3 mb-2">
                <b>Experience</b>
              </div>
              <div className="col-sm-9 mb-2">
                {' '}
                : {jobDesc.job.jobExperience}{' '}
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3 mb-2">
                <b>City</b>
              </div>
              <div className="col-sm-9 mb-2">
                : {jobDesc.job.jobLocationId.city.cityName}
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3 mb-2">
                <b>State</b>
              </div>
              <div className="col-sm-9 mb-2">
                : {jobDesc.job.jobLocationId.city.state.stateName}
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3 mb-2">
                <b>Job Type</b>
              </div>
              <div className="col-sm-9 mb-2">
                : {jobDesc.job.jobTypeId.jobtypes}
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3 mb-2">
                <b>Job Description</b>
              </div>
              <div className="col-sm-9 mb-2">
                {' '}
                : {jobDesc.job.jobDescription}
              </div>
            </div>
            <button
              className="apply btn btn-primary"
              onClick={(e) => {
                isSubmit(e)
              }}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Description
