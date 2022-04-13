import React, { useState, useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Service from '../services/jobseeker-service'

import { AuthenticateContext } from '../Context'

export default function Register() {
  const { isAuth, setIsAuth } = useContext(AuthenticateContext)
  const [selectedCity, setSelectedCity] = useState('')

  const history = useHistory()
  //declare registerUser obj with useState() hooks
  const [registerUser, setRegisterUser] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
    phoneNumber: '',
    password: '',
    username: '',
    gender: '',
    dob: '',
    street: '',
    houseNumber: '',
    pincode: '',
    city: '',
  })

  const cities = [
    {
      value: 1,
      label: 'Mumbai',
    },
    {
      value: 2,
      label: 'Pune',
    },
    {
      value: 3,
      label: 'Nagpur',
    },
    {
      value: 4,
      label: 'Nasik',
    },
  ]

  const gender = [
    {
      value: 'MALE',
      label: 'MALE',
    },
    {
      value: 'FEMALE',
      label: 'FEMALE',
    },
    {
      value: 'OTHER',
      label: 'OTHER',
    },
  ]

  const [registerError, setRegisterError] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const onRegister = () => {
    setRegisterError(validate(registerUser))
    setIsSubmit(true)
    console.log(registerUser)
    //call to service and from this call to post method of axios
    Service.register(registerUser)
      .then((response) => {
        console.log(response.data)
        setIsAuth(true)
        history.push('/')
      })
      .catch((error) => console.log('server side error', error))
    //history.push('/')
  }

  function onChangeHandler(e) {
    const name = e.target.name //firstname
    const value = e.target.value //pushkar
    console.log('name of filed', name)
    console.log('value of filed', value)
    console.log('User : ', registerUser)
    //if data chages continusloy in form it will update into state
    setRegisterUser({ ...registerUser, [name]: value })
  }

  useEffect(() => {
    console.log(registerError)
    if (Object.keys(registerError).length == 0 && isSubmit) {
      console.log(registerUser)
    }
  }, [registerError])

  const validate = (value) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

    if (!value.firstName) {
      errors.firstName = 'First Name is required!!'
    }

    if (!value.lastName) {
      errors.lastName = 'Last Name is required!!'
    }

    if (!value.emailId) {
      errors.emailId = 'Email is required!!'
    } else if (!regex.test(value.emailId)) {
      errors.emailId = 'This is not a valid email format'
    }

    // if (!value.phoneNumber) {
    //   errors.phoneNumber = 'PhoneNumber is required!!'
    // } else if (value.phoneNumber > 10 || value.phoneNumber < 9) {
    //   errors.phoneNumber = 'Phone Number must be of 10 digits'
    // }

    if (!value.password) {
      errors.password = 'Password is required!!'
    } else if (value.password < 6) {
      errors.password = 'Password must be more than 6 characters'
    }
    if (!value.houseNumber) {
      errors.houseNumber = 'House Number is required!!'
    }
    if (!value.dob) {
      errors.dob = 'DOB is required!!'
    }

    if (!value.street) {
      errors.street = 'Street Address is required!!'
    }
    if (!value.gender) {
      errors.gender = 'Gender is required!!'
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
    <section className="inner-body">
      <div className="container">
        <div class="offset-lg-2 col-lg-8">
          <div className="card border-0 default-border-radius default-box-shadow  mt-5">
            <div className="login-wrapper p-5">
              <div className="title text-center mb-5">
                <h1 className="font-weight-bold">Register Now</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  ullam
                </p>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="firstName">FirstName:</label>
                    <input
                      type="textbox"
                      onChange={onChangeHandler}
                      value={registerUser.firstName}
                      className="form-control"
                      id="firstName"
                      placeholder="Enter first name"
                      name="firstName"
                    />
                    <p className="error-text">{registerError.firstName}</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="lastName">LastName:</label>
                    <input
                      type="textbox"
                      onChange={onChangeHandler}
                      value={registerUser.lastName}
                      className="form-control"
                      id="lastName"
                      placeholder="Enter last name"
                      name="lastName"
                    />
                    <p className="error-text">{registerError.lastName}</p>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  onChange={onChangeHandler}
                  value={registerUser.emailId}
                  className="form-control"
                  id="emailId"
                  placeholder="Enter email"
                  name="emailId"
                />
                <p className="error-text">{registerError.emailId}</p>
              </div>
              <div className="form-group">
                <label htmlFor="username">Enter Username:</label>
                <input
                  type="textbox"
                  onChange={onChangeHandler}
                  value={registerUser.username}
                  className="form-control"
                  id="username"
                  placeholder="Enter userName"
                  name="username"
                />
                <p className="error-text">{registerError.username}</p>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  onChange={onChangeHandler}
                  value={registerUser.password}
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  name="password"
                />
                <p className="error-text">{registerError.password}</p>
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                  type="tel"
                  onChange={onChangeHandler}
                  value={registerUser.phoneNumber}
                  className="form-control"
                  id="phoneNumber"
                  placeholder="Enter Phone Number"
                  name="phoneNumber"
                />
                {/* <p className="error-text">{registerError.phoneNumber}</p> */}
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="gender">Gender:</label>
                    <select onChange={onChangeHandler} name="gender">
                      <option value={''}>Select gender</option>
                      {gender.map((option) => (
                        <option value={option.value}>{option.label}</option>
                      ))}
                    </select>
                    <p className="error-text">{registerError.gender}</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="dob">DOB:</label>
                    <input
                      type="date"
                      onChange={onChangeHandler}
                      value={registerUser.dob}
                      className="form-control calender-input"
                      id="dob"
                      placeholder="select dob"
                      name="dob"
                    />
                    <p className="error-text">{registerError.dob}</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="houseNumber">HouseNumber:</label>
                    <input
                      type="text"
                      onChange={onChangeHandler}
                      value={registerUser.houseNumber}
                      className="form-control"
                      id="houseNumber"
                      placeholder="Enter houseNumber"
                      name="houseNumber"
                    />
                    <p className="error-text">{registerError.houseNumber}</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="street">Street:</label>
                    <input
                      type="text"
                      onChange={onChangeHandler}
                      value={registerUser.street}
                      className="form-control"
                      id="street"
                      placeholder="Enter street"
                      name="street"
                    />
                    <p className="error-text">{registerError.street}</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="pincode">Pincode:</label>
                    <input
                      type="number"
                      onChange={onChangeHandler}
                      value={registerUser.pincode}
                      className="form-control"
                      id="pincode"
                      placeholder="Enter pincode"
                      name="pincode"
                    />
                    <p className="error-text">{registerError.pincode}</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="city">city:</label>

                    <select onChange={onChangeHandler} name="city">
                      <option value={''}>Select city</option>
                      {cities.map((option) => (
                        <option value={option.value}>{option.label}</option>
                      ))}
                    </select>
                    <p className="error-text">{registerError.city}</p>
                  </div>
                </div>
              </div>

              <div className="form-group text-center mt-5">
                <button
                  type="button"
                  className="btn btn-primary mr-2"
                  // onClick={handleSubmit}
                  onClick={onRegister}
                >
                  Register Now
                </button>
                {/* isLogin ? true : false  */}
                <Link className="btn btn-secondary" to={`/login`}>
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
