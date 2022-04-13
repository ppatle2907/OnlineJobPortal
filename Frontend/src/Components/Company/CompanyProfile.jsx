import React, { useEffect, useState } from 'react'
import companyServices from '../../services/company-services'

const CompanyProfile = () => {
  let user = localStorage.getItem('user')
  user = JSON.parse(user)
  console.log('login deatils ', user)
  const [company, setCompany] = useState('')
  const [count, setCount] = useState('')

  const init = () => {
    //get all company details
    companyServices
      .getCompanyDetails(user.loginId)
      .then((response) => {
        console.log('company job reponse: ', response.data)
        setCompany(response.data)
      })
      .catch((error) => {
        console.log('error : ', error)
      })
  }

  useEffect(() => {
    init()
  }, [count])

  return (
    <>
      <h1 className="font-weight-bold mb-5">Company Profile</h1>
      <div className="card border-0 default-border-radius default-box-shadow ">
        <div className="card-body p-5">
          <div className="row">
            <div className="col-sm-3 mb-2">
              <b> Company Name </b>
            </div>
            <div className="col-sm-9 mb-2"> : {company.companyName}</div>
          </div>
          <div className="row">
            <div className="col-sm-3 mb-2">
              <b> Year Of Eastablished </b>
            </div>
            <div className="col-sm-9 mb-2"> : {company.yearOfEastablish}</div>
          </div>
          <div className="row">
            <div className="col-sm-3 mb-2">
              <b> About </b>
            </div>
            <div className="col-sm-9 mb-2"> : {company.companyDescription}</div>
          </div>
          <div className="row">
            <div className="col-sm-3 mb-2">
              <b> Email </b>
            </div>
            <div className="col-sm-9 mb-2"> : {user.emailId}</div>
          </div>
          <div className="row">
            <div className="col-sm-3 mb-2">
              <b> PhoneNumber </b>
            </div>
            <div className="col-sm-9 mb-2"> : {user.phoneNumber}</div>
          </div>
          <div className="row">
            <div className="col-sm-3 mb-2">
              <b> Webiste </b>
            </div>
            <div className="col-sm-9 mb-2"> : {company.companyURL}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CompanyProfile
