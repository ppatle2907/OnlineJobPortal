import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import jobseeker from '../../services/jobseeker-service'
import { Redirect } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
const EducationalDetails = () => {
  const [flag, setFlag] = useState(false)
  const [userEducation, setuserEducation] = useState({
    educationType: '',
    instituteName: '',
    passingYear: '',
    percentage: '',
    universityName: '',
  })

  function onChangeHandler(e) {
    const name = e.target.name
    const value = e.target.value
    console.log(userEducation)
    setuserEducation({ ...userEducation, [name]: value })
  }

  const onsubmit = async (e) => {
    const loggedInUser = localStorage.getItem('user')
    let login = JSON.parse(loggedInUser)

    console.log('loggedin User :', loggedInUser)
    console.log('login user : ', login)
    console.log('logged in user id : ', login.loginId)
    console.log('user education: ', userEducation)
    e.preventDefault()
    console.log('e : ', e)
    //call to backend api
    jobseeker
      .addEducationDetails(userEducation, login.loginId)
      .then((response) => {
        console.log(response.data)
        console.log('status', response.status)

        jobseeker
          .getAllEducationDetails(login.loginId)
          .then((response) => {
            localStorage.setItem('education', JSON.stringify(response.data))
            const e = localStorage.getItem('education')
            let e2 = JSON.parse(e)
            console.log('local strage data : ', e)
            console.log('response data  : ', response.data)
            //console.log('Education data ', education)
          })
          .catch((error) => {
            console.log('something went wrong : ', error)
          })
        //history.push('/jobSeeker')
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
          <div className="row">
            <div className="col-sm-6 offset-sm-3">
              <div className="card border-0 default-border-radius default-box-shadow mt-5">
                <div className="card-body">
                  <div className="login-wrapper p-5">
                    <div className="title text-center mb-5">
                      <h1 className="font-weight-bold">
                        Add Education Details
                      </h1>
                    </div>
                    <form>
                      <div className="mb-3 form-group ">
                        <label htmlFor="username" className="form-label">
                          Education
                        </label>
                        <select
                          name="educationType"
                          className="form-control"
                          onChange={onChangeHandler}
                          value={userEducation.educationType}
                        >
                          <option value="HSC">HSC</option>
                          <option value="SSC">SSC</option>
                          <option value="DIPLOMA">Diploma</option>
                          <option value="GRADUATION">Graduation</option>
                          <option value="POST_GRADUCATION">
                            Post Graduation
                          </option>
                        </select>
                      </div>
                      <div className="mb-3 form-group ">
                        <label htmlFor="" className="form-label">
                          Institute Name
                        </label>
                        <input
                          type="text"
                          name="instituteName"
                          className="form-control"
                          onChange={onChangeHandler}
                          value={userEducation.instituteName}
                          required
                        />
                      </div>

                      <div className="mb-3 form-group ">
                        <label htmlFor="" className="form-label">
                          Year :
                        </label>
                        <input
                          type="number"
                          name="passingYear"
                          className="form-control"
                          onChange={onChangeHandler}
                          value={userEducation.passingYear}
                          required
                        />
                      </div>
                      <div className="mb-3 form-group ">
                        <label htmlFor="" className="form-label">
                          Percentage :
                        </label>
                        <input
                          type="number"
                          name="percentage"
                          className="form-control"
                          onChange={onChangeHandler}
                          value={userEducation.percentage}
                        />
                      </div>
                      <div className="mb-3 form-group ">
                        <label htmlFor="" className="form-label">
                          University Type :
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="universityName"
                          onChange={onChangeHandler}
                          value={userEducation.universityName}
                        />
                      </div>
                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          onClick={onsubmit}
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
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

export default EducationalDetails
