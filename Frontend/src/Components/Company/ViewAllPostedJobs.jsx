import React, { useState, useEffect, useContext } from 'react'
import companyServices from '../../services/company-services'
import CompanyJobList from './CompanyJobList'

const ViewAllPostedJobs = (props) => {
  window.$companyView = true
  const [jobPost, setJobPost] = useState([])
  const [count, setCount] = useState('')
  const id = props.id
  const init = () => {
    companyServices
      .getAllJobs(id)
      .then((response) => {
        console.log('company posted jobs: ', response.data)
        setJobPost(response.data)
      })
      .catch((error) => {
        console.log('error : ', error)
      })
  }

  useEffect(() => {
    init()
  }, [count])

  return (
    <>
      <CompanyJobList jobPost={jobPost} />
    </>
  )
}

export default ViewAllPostedJobs
