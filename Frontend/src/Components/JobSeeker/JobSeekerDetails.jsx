import React, { useEffect, useState } from 'react'
import AddSkill from './AddSkill'
import EducationalDetails from './EducationalDetails'
import EducationList from './EducationList'
import ExperienceDetails from './ExperienceDetails'
import JobSeekerNavBar from './JobSeekerNavBar'
import PersonalDetails from './PersonalDetails'
import Profile from './Profile'
import JobSeekerService from '../../services/jobseeker-service'
import ExperienceList from './ExperienceList'
import Skills from './Skills'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import jobseekerService from '../../services/jobseeker-service'

const JobSeekerDetails = () => {
  const [counterJobSeeker, setCounterJobSeeker] = useState(0)

  const [state, setstate] = useState('')

  const [isEducation, setIsEducation] = useState(false)
  const [isProfile, setIsProfile] = useState(false)
  const [isExperience, setIsExperience] = useState(false)
  const [isSkillls, setIsSkills] = useState(false)
  const [jobSeeker, setJobSeeker] = useState([])
  const [allEducation, setAllEducation] = useState([])
  const [skills, setSkills] = useState([])
  const [jobSeekerId, setJobSeekerId] = useState('')
  const [personalDetails, setPersonalDetails] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
    phoneNumber: '',
    username: '',
    dob: '',
    city: '',
    stateName: '',
  })

  const setCount = () => {
    setCounterJobSeeker(counterJobSeeker + 1)
  }

  //let user = JSON.parse(sessionStorage.getItem('user'))
  //console.log('user data ', user)

  //on render , jobseeker data will come from backend
  const init = () => {
    // //get jobseeker details
    // let user = JSON.parse(sessionStorage.getItem('user'))
    // console.log('user loginid : ', user.loginId)

    // if (user) {
    //   setJobSeekerId(user.loginId)
    // }

    const loggedInUser = localStorage.getItem('user')
    let login = JSON.parse(loggedInUser)

    console.log('loggedin User :', loggedInUser)
    console.log('login user : ', login)
    console.log('logged in user id : ', login.loginId)

    JobSeekerService.get(login.loginId)
      .then((response) => {
        console.log('jobSeekerData pratike : ', response.data)

        setJobSeeker(response.data)
        setAllEducation(response.data.allEducation)
        setIsEducation(true)
        setIsProfile(true)
        setIsExperience(true)
        //console.log('education data : ', response.data.allEducation)
        //console.log('jobSeeker after setting data : ', jobSeeker)
      })
      .catch((error) => {
        console.log('something went wrong : ', error)
      })
  }

  useEffect(() => {
    init()
  }, [])

  console.log('education : ', isEducation)
  return (
    <section className="inner-body mt-5">
      <div className="container">
        <div className="col-sm-6">
          <h2 className="font-weight-bold mb-3">1.Personal Details :</h2>
        </div>
        <div className="col-sm-12">
          <div className="card mb-5 border-0 default-border-radius default-box-shadow ">
            <div className="card-body p-5">
              {isProfile ? <Profile jobSeeker={jobSeeker} /> : ''}
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <h2 className="font-weight-bold mb-3">2.Upload Resume :</h2>
          <div class="custom-file">
            <input type="file" class="custom-file-input" id="customFile" />
            <label class="custom-file-label" for="customFile">
              Choose file
            </label>
          </div>
        </div>
        <div className="col-sm-12">
          {isEducation ? (
            <EducationList allEducation={allEducation} setCount={setCount} />
          ) : (
            ''
          )}
          {/* <EducationList /> */}
          {isExperience ? (
            <ExperienceList jobSeeker={jobSeeker} setCount={setCount} />
          ) : (
            ''
          )}
        </div>
      </div>
    </section>
  )
}

export default JobSeekerDetails
