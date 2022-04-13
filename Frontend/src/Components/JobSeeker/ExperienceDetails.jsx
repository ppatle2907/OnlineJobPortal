import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import jobseekerService from '../../services/jobseeker-service'
import { useHistory } from 'react-router-dom'

const ExperienceDetails = () => {
  const [flag, setFlag] = useState(false)
  const history = useHistory()
  const [userExperience, setuserExperience] = useState({
    company: '',
    currentSalary: '',
    designation: '',
    endDate: '',
    startDate: '',
    jobDescription: '',
  })

  function onChangeHandler(e) {
    const name = e.target.name
    const value = e.target.value
    console.log(userExperience)
    console.log(name, value)
    setuserExperience({ ...userExperience, [name]: value })
  }

  const onsubmit = async () => {
    console.log('user Exp: ', userExperience.data)

    const loggedInUser = localStorage.getItem('user')
    let login = JSON.parse(loggedInUser)

    console.log('loggedin User :', loggedInUser)
    console.log('login user : ', login)
    console.log('logged in user id : ', login.loginId)

    jobseekerService
      .addExperienceDetails(userExperience, login.loginId)
      .then((response) => {
        console.log(response.data)

        jobseekerService
          .getAllExperience(login.loginId)
          .then((response) => {
            localStorage.setItem('experience', JSON.stringify(response.data))
            const exp = localStorage.getItem('experience')
            let e2 = JSON.parse(exp)
            console.log('all exp on local storage ', e2)
            console.log('all exp : ', response.data)
          })
          .catch((error) => {
            console.log('something went wroing', error)
          })

        history.push('/jobSeeker')
      })
      .catch((error) => {
        console.log('something went wroing', error)
      })
    setFlag(true)

    console.log('responc from ser===> details')
  }

  return !flag ? (
    <>
      <section className="inner-body">
        <div className="container">
          <div className="experience-form">
            <h2>Experince Details</h2>

            <div className="add-experince">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <span>Company Name :</span>
                    </td>
                    <td>
                      <input
                        type="text"
                        autoComplete="off"
                        name="company"
                        id="company"
                        onChange={onChangeHandler}
                        value={userExperience.company}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Current Salary:</span>
                    </td>
                    <td>
                      <input
                        type="number"
                        autoComplete="off"
                        name="currentSalary"
                        onChange={onChangeHandler}
                        value={userExperience.currentSalary}
                        required
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span>Designation :</span>
                    </td>
                    <td>
                      <input
                        type="text"
                        autoComplete="off"
                        name="designation"
                        onChange={onChangeHandler}
                        value={userExperience.designation}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Start Date :</span>
                    </td>
                    <td>
                      <input
                        type="date"
                        autoComplete="off"
                        name="startDate"
                        onChange={onChangeHandler}
                        value={userExperience.startDate}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>End Date :</span>
                    </td>
                    <td>
                      <input
                        type="date"
                        autoComplete="off"
                        name="endDate"
                        onChange={onChangeHandler}
                        value={userExperience.endDate}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Job Description :</span>
                    </td>
                    <td>
                      <input
                        type="text"
                        autoComplete="off"
                        name="jobDescription"
                        onChange={onChangeHandler}
                        value={userExperience.jobDescription}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>

              <div>
                <button type="submit" className="btn" onClick={onsubmit}>
                  Submit{' '}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  ) : (
    <Redirect to="/jobSeeker" />
  )
}

export default ExperienceDetails
