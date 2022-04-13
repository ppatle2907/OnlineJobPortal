import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Education from './Education'
import jobseekerService from '../../services/jobseeker-service'

const EducationList = (props) => {
  const [education, setEducation] = useState([])
  const [isEducation, setIsEducation] = useState(false)

  const init = () => {
    setIsEducation(true)
    const loggedInUser = localStorage.getItem('user')
    let login = JSON.parse(loggedInUser)

    console.log('loggedin User :', loggedInUser)
    console.log('login user : ', login)
    console.log('logged in user id : ', login.loginId)
    jobseekerService
      .getAllEducationDetails(login.loginId)
      .then((response) => {
        console.log('response data  : ', response.data)
        setEducation(response.data)
        console.log('Education data ', education)
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
      <div className="row mt-5 mb-5">
        <div className="col-sm-6">
          <h2 className="font-weight-bold">3.Education Details :</h2>
        </div>
        <div className="col-sm-6 text-right">
          <Link
            className="btn btn-primary rounded-pill ml-auto"
            to={`/education`}
          >
            Add Education
          </Link>
        </div>
      </div>

      <div className="row">
        {props.allEducation.map((e) => {
          return <Education e={e} key={e.id} />
        })}
      </div>
    </>
  )
}

export default EducationList
