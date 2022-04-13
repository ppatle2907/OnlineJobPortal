import React, { useEffect, useState } from 'react'
import jobseekerService from '../../services/jobseeker-service'
const Skills = () => {
  const [skill, setSkill] = useState([])
  // getJobSeekerSkilss
  const init = () => {
    const loggedInUser = localStorage.getItem('user')
    let login = JSON.parse(loggedInUser)

    console.log('loggedin User :', loggedInUser)
    console.log('login user : ', login)
    console.log('logged in user id : ', login.loginId)
    jobseekerService
      .getSkills(login.loginId)
      .then((response) => {
        console.log('response data  : ', response.data)
        setSkill(response.data)
      })
      .catch((error) => {
        console.log('something went wrong : ', error)
      })
  }
  useEffect(() => {
    init()
  }, [])

  console.log('skills in skills componet : ')
  return (
    <>
      <p>
        {skill.map((s) => {
          console.log('skill : ', s)

          return <> {s.skillSetID.skillType} , </>
        })}
      </p>
    </>
  )
}

export default Skills
