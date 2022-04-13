import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'

import companyServices from '../../services/company-services'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Select from 'react-select'
export default function AddJobPost() {
  let { id } = useParams() //get parameter from url
  console.log('Compnay id : ', id)

  const history = useHistory()
  const [userJobPost, setuserJobPost] = useState({
    jobTitle: '',
    jobDescription: '',
    jobType: '',
    skillName: '',
    jobExperience: '',
    streetAddress: '',
    pincode: '',
    city: '',
  })
  const cities = [
    {
      value: 'Mumbai',
      label: 'Mumbai',
    },
    {
      value: 'Pune',
      label: 'Pune',
    },
    {
      value: 'Nagpur',
      label: 'Nagpur',
    },
    {
      value: 'Nasik',
      label: 'Nasik',
    },
  ]

  const skill = [
    {
      value: 'FORTRAN',
      label: 'FORTRAN',
    },
    {
      value: 'XML',
      label: 'XML',
    },
    {
      value: 'PYTHON',
      label: 'PYTHON',
    },
    {
      value: 'aqua sky',
      label: 'aqua sky',
    },
    {
      value: 'JAVA',
      label: 'JAVA',
    },
    {
      value: 'JAVASCRIPT',
      label: 'JAVASCRIPT',
    },
    {
      value: 'SWIFT',
      label: 'SWIFT',
    },
    {
      value: 'CPP',
      label: 'CPP',
    },
    {
      value: 'PHP',
      label: 'PHP',
    },
    {
      value: 'SQL',
      label: 'SQL',
    },
    {
      value: 'C',
      label: 'C',
    },
  ]

  //const [city, setCity] = useState('')
  const [postJobError, setPostJobError] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  function onChangeHandler(e) {
    const name = e.target.name
    const value = e.target.value
    console.log('name of filed', name)
    console.log('value of filed', value)
    console.log('User : ', userJobPost)
    setuserJobPost({ ...userJobPost, [name]: value })
  }

  const onsubmit = async () => {
    setPostJobError(validate(userJobPost))
    setIsSubmit(true)
    console.log('jobpost ', userJobPost)
    console.log('responc from ser===> details')

    companyServices
      .addJobPost(userJobPost, id)
      .then((response) => {
        console.log('company job reponse: ', response.data)
        history.push('/companyHome')
      })
      .catch((error) => {
        console.log('error : ', error)
      })
  }

  useEffect(() => {
    console.log(postJobError)
    if (Object.keys(postJobError).length == 0 && isSubmit) {
      console.log(userJobPost)
    }
  }, [postJobError])

  const validate = (value) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

    if (!value.jobTitle) {
      errors.jobTitle = 'Job Title is required!!'
    }

    if (!value.jobDescription) {
      errors.jobDescription = 'Job Description is required!!'
    }

    if (!value.jobType) {
      errors.jobType = 'Job Type is required!!'
    }

    if (!value.skillName) {
      errors.skillName = 'Skill is required!!'
    }
    if (!value.streetAddress) {
      errors.streetAddress = 'Street Address is required!!'
    }

    if (!value.pincode) {
      errors.pincode = 'Pincode is required!!'
    }

    if (!value.city) {
      errors.city = 'city is required!!'
    }

    return errors
  }

  return (
    <>
      <section className="inner-body">
        <div className="container">
          <div className="jobpost-form">
            <h2>Job Post</h2>

            <div className="add-jobpost">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <span>Job Title :</span>
                    </td>
                    <td>
                      <input
                        type="text"
                        autoComplete="off"
                        name="jobTitle"
                        onChange={onChangeHandler}
                        value={userJobPost.jobTitle}
                        required
                      />
                    </td>
                  </tr>
                  <p>{postJobError.jobTitle}</p>
                  <tr>
                    <td>
                      <span>Job Description:</span>
                    </td>
                    <td>
                      <input
                        type="text"
                        autoComplete="off"
                        name="jobDescription"
                        onChange={onChangeHandler}
                        value={userJobPost.jobDescription}
                        required
                      />
                    </td>
                  </tr>
                  <p>{postJobError.jobDescription}</p>

                  <tr>
                    <td>
                      <span>Job Type :</span>
                    </td>
                    <td>
                      <input
                        type="text"
                        autoComplete="off"
                        name="jobType"
                        onChange={onChangeHandler}
                        value={userJobPost.jobType}
                        required
                      />
                    </td>
                  </tr>
                  <p>{postJobError.jobType}</p>

                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="skillName">skill:</label>

                      <select onChange={onChangeHandler} name="skillName">
                        {skill.map((option) => (
                          <option value={option.value}>{option.label}</option>
                        ))}
                      </select>
                      <p className="error-text">{postJobError.skillName}</p>
                    </div>
                  </div>

                  <tr>
                    <td>
                      <span>Job Experience :</span>
                    </td>
                    <td>
                      <input
                        type="number"
                        autoComplete="off"
                        name="jobExperience"
                        onChange={onChangeHandler}
                        value={userJobPost.jobExperience}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span>Street Address :</span>
                    </td>
                    <td>
                      <input
                        type="text"
                        autoComplete="off"
                        name="streetAddress"
                        onChange={onChangeHandler}
                        value={userJobPost.streetAddress}
                      />
                    </td>
                  </tr>
                  <p>{postJobError.streetAddress}</p>

                  <tr>
                    <td>
                      <span>Pin Code :</span>
                    </td>
                    <td>
                      <input
                        type="number"
                        autoComplete="off"
                        name="pincode"
                        onChange={onChangeHandler}
                        value={userJobPost.pincode}
                      />
                    </td>
                  </tr>
                  <p>{postJobError.pincode}</p>

                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="city">city:</label>

                      <select onChange={onChangeHandler} name="city">
                        {cities.map((option) => (
                          <option value={option.value}>{option.label}</option>
                        ))}
                      </select>
                      <p className="error-text">{postJobError.city}</p>
                    </div>
                  </div>
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
  )
}
