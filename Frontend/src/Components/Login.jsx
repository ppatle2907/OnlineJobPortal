import React, { useContext, useState, useEffect } from 'react'
import { Redirect, Route } from 'react-router'
import { Link, useHistory, useParams } from 'react-router-dom'
import userLogin from '../services/login-service'
import { AuthenticateContext } from '../Context'
export default function () {
  const [user, setUser] = useState()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { isAuth, setIsAuth } = useContext(AuthenticateContext)
  const history = useHistory()

  const validateLogin = (e) => {
    //to prevent the reload the page
    e.preventDefault()
    console.log('Login successfully')

    const userCredenetails = {
      username,
      password,
    }
    //invoked service layer
    // userLogin(username,password);
    //axios api will return the promise
    userLogin(userCredenetails)
      .then((response) => {
        console.log('user role : ', response.data.role.role)
        switch (response.data.role.role) {
          case 'JOB_SEEKER':
            // sessionStorage.setItem('user', JSON.stringify(response.data))
            // set the state of the user
            setUser(response.data)
            // store the user in localStorage
            localStorage.setItem('user', JSON.stringify(response.data))

            setIsAuth(true)
            history.push('/jobSeeker') //go to home page
            break

          case 'COMPANY':
            localStorage.setItem('user', JSON.stringify(response.data))
            //get company details
            setIsAuth(true)
            // window.$companyView = true
            // sessionStorage.setItem('user', JSON.stringify(response.data))
            history.push('/companyHome')
            break

          case 'ADMIN':
            sessionStorage.setItem('user', JSON.stringify(response.data))
            history.push('/admin')
            break
        }

        // console.log(userCredenetails)
        // console.log('credential verified and login successfully', response.data)

        //sessionStorage.setItem('user', JSON.stringify(response.data))
        //history.push('/') //goto to home page
        //history.push('/') //goto to home page
      })
      .catch((error) => {
        console.log('somenthing went wrong ', error)
      })

    // //after submit the form empty the username and password box
    // setUsername("");
    // setPassword("");
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user')
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser)
      setUser(foundUser)
    }
  }, [])

  // // logout the user
  // const handleLogout = () => {
  //   setUser({})
  //   setUsername('')
  //   setPassword('')
  //   localStorage.clear()
  // }

  // // if there's a user show the message below
  // if (user) {
  //   return (
  //     <div>
  //       {user.name} is loggged in
  //       <button onClick={handleLogout}>logout</button>
  //     </div>
  //   )
  // }
  //return the login form
  return (
    <section className="inner-body">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-sm-3">
            <div className="card border-0 default-border-radius default-box-shadow mt-5">
              <div className="card-body">
                <div className="login-wrapper p-5">
                  <div className="title text-center mb-5">
                    <h1 className="font-weight-bold">Login Now</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Neque ullam
                    </p>
                  </div>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">
                        UserName
                      </label>
                      <input
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        className="form-control"
                        id="username"
                        aria-describedby="emailHelp"
                        placeholder="Enter username"
                      />
                      <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Enter password"
                      />
                    </div>

                    <div className="text-center mt-5">
                      <button
                        type="submit"
                        onClick={(e) => validateLogin(e)}
                        className="btn btn-primary mr-4"
                      >
                        Login
                      </button>
                      <Link
                        type="submit"
                        className="btn btn-secondary mr-4"
                        to={`/register`}
                      >
                        Signup
                      </Link>
                      <Link
                        type="submit"
                        className="btn btn-success"
                        to={`/companyRegister`}
                      >
                        Company Signup
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
