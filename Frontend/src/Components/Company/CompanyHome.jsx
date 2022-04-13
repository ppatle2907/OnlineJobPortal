import React from 'react'
import { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthenticateContext } from '../../Context'
import CompanyProfile from './CompanyProfile'
import ViewAllPostedJobs from './ViewAllPostedJobs'
const CompanyHome = () => {
  const { isAuth, setIsAuth } = useContext(AuthenticateContext)
  const history = useHistory()
  const [postedJobs, setPostedJobs] = useState()
  //get company details
  let user = localStorage.getItem('user')
  user = JSON.parse(user)

  console.log('Company details : ', user)

  const handleJobPost = (e) => {
    e.preventDefault()
    console.log('user loginid ', user.loginId)
    console.log('authenitcated value', isAuth)

    if (isAuth) {
      console.log('is auth value ', isAuth)
      history.push(`/jobpost/${user.loginId}`)
    } else {
      history.push('/login')
    }
  }

  return (
    <>
      <section className="inner-body mt-5">
        <div className="container">
          <CompanyProfile />
          <button
            className="apply btn btn-primary mt-4 mb-5"
            onClick={(e) => {
              handleJobPost(e)
            }}
          >
            Post Job
          </button>

          <hr />

          <h2 className="mt-5 mb-5 font-weight-bold text-center">
            ALL Jobs Posted By Company
          </h2>
          <ViewAllPostedJobs id={user.loginId} />
        </div>
      </section>
    </>
  )
}

export default CompanyHome
