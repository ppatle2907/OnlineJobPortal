import React, { useEffect, useState } from 'react'
import jobseekerService from '../../services/jobseeker-service'
import JobList from '../Company/JobList'
const AppliedJobs = () => {
  let user = localStorage.getItem('user')
  user = JSON.parse(user)
  let id = user.loginId

  const [jobPost, setJobPost] = useState([])

  const init = () => {
    jobseekerService
      .getAllAppliedJobs(id)
      .then((response) => {
        console.log('all applied jobs : ', response.data)
        setJobPost(response.data)
      })
      .catch((error) => {
        console.log('something went wrong : ', error)
      })
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <>
      <JobList jobPost={jobPost} />
    </>
  )
}

export default AppliedJobs
