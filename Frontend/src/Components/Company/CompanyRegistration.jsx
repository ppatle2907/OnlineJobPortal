import React, { useEffect, useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { AuthenticateContext } from '../../Context'

import CompanyService from '../../services/company-services'
function CompanyRegistration() {
  const history = useHistory()
  const { isAuth, setIsAuth } = useContext(AuthenticateContext)

  const [company, setcompany] = useState({
    companyName: '',
    username: '',
    yearOfEastablish: '',
    companyURL: '',
    emailId: '',
    password: '',
    phoneNumber: '',
    companyDescription: '',
  })

  const [companyError, setcompanyError] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  function onChangeHandler(e) {
    const name = e.target.name
    const value = e.target.value
    console.log(company)
    console.log(name, value)
    setcompany({ ...company, [name]: value })
  }

  const onsubmit = () => {
    setcompanyError(validate(company))
    setIsSubmit(true)
    console.log('comapany data on submit : ', company)

    CompanyService.register(company)
      .then((response) => {
        console.log(response.data)
        setIsAuth(true)
        history.push('/companyHome')
      })
      .catch((error) => console.log('server side error', error))
    console.log('responc from ser===> details')
  }
  useEffect(() => {
    console.log(companyError)

    if (Object.keys(companyError).length == 0 && isSubmit) {
      console.log('comany in error : ', company)
    }
  }, [companyError])

  const validate = (value) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

    if (!value.companyName) {
      errors.companyName = 'Company Name is required!!'
    }

    if (!value.username) {
      errors.username = 'UserName is required!!'
    }

    if (!value.yearOfEastablish) {
      errors.yearOfEastablish = 'yearOfEastablish is required!!'
    }

    if (!value.companyURL) {
      errors.companyURL = 'Company URL is required!!'
    }
    if (!value.emailId) {
      errors.emailId = 'Email is required!!'
    } else if (!regex.test(value.emailId)) {
      errors.emailId = 'This is not a valid email format'
    }

    if (!value.phoneNumber) {
      errors.phoneNumber = 'Phone Number is required!!'
    }

    if (!value.password) {
      errors.password = 'Password is required!!'
    } else if (value.password < 6) {
      errors.password = 'Password must be more than 6 characters'
    }

    if (!value.companyDescription) {
      errors.companyDescription = 'Company Description is required!!'
    }

    return errors
  }

  return (
    <section className="inner-body">
      <div className="container">
        <div className="col-sm-6 offset-sm-3">
          <div className="card border-0 default-border-radius default-box-shadow  mt-5">
            <div className="login-wrapper p-5">
              <div className="title mb-5 text-center">
                <h2 className="font-weight-bold">Company Registration</h2>
              </div>
              <div className="mb-3">
                <label htmlFor="firstName">Company Name :</label>
                <input
                  className="form-control"
                  type="text"
                  autoComplete="off"
                  name="companyName"
                  onChange={onChangeHandler}
                  value={company.companyName}
                  required
                />
                <p className="error-text">{companyError.companyName}</p>
              </div>
              <div className="mb-3">
                <label htmlFor="firstName">Email :</label>
                <input
                  className="form-control"
                  type="text"
                  autoComplete="off"
                  name="emailId"
                  onChange={onChangeHandler}
                  value={company.emailId}
                  required
                />
                <p className="error-text">{companyError.emailId}</p>
              </div>
              <div className="mb-3">
                <label htmlFor="password">Password :</label>
                <input
                  className="form-control"
                  type="password"
                  autoComplete="off"
                  name="password"
                  onChange={onChangeHandler}
                  value={company.password}
                  required
                />
                <p className="error-text">{companyError.password}</p>
              </div>
              <div className="mb-3">
                <label htmlFor="firstName">Username :</label>
                <input
                  className="form-control"
                  type="text"
                  autoComplete="off"
                  name="username"
                  onChange={onChangeHandler}
                  value={company.username}
                />
                <p className="error-text">{companyError.username}</p>
              </div>
              <div className="mb-3">
                <label htmlFor="firstName">Year of Eastablishment :</label>
                <input
                  className="form-control"
                  type="number"
                  autoComplete="off"
                  name="yearOfEastablish"
                  onChange={onChangeHandler}
                  value={company.yearOfEastablish}
                />
                <p className="error-text">{companyError.yearOfEastablish}</p>
              </div>
              <div className="mb-3">
                <label htmlFor="firstName">Company Url :</label>
                <input
                  className="form-control"
                  type="text"
                  autoComplete="off"
                  name="companyURL"
                  onChange={onChangeHandler}
                  value={company.companyURL}
                />
                <p className="error-text">{companyError.companyURL}</p>
              </div>
              <div className="mb-3">
                <label htmlFor="firstName">Phone number :</label>
                <input
                  className="form-control"
                  type="text"
                  autoComplete="off"
                  name="phoneNumber"
                  onChange={onChangeHandler}
                  value={company.phoneNumber}
                />
                <p className="error-text">{companyError.phoneNumber}</p>
              </div>
              <div className="mb-3">
                <label htmlFor="firstName">Company Description :</label>
                <input
                  className="form-control"
                  type="text"
                  autoComplete="off"
                  name="companyDescription"
                  onChange={onChangeHandler}
                  value={company.companyDescription}
                />
                <p className="error-text">{companyError.companyDescription}</p>
              </div>
              <div className="text-center mt-4">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={onsubmit}
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyRegistration
