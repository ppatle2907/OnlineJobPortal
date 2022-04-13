import React from 'react'
import Skills from './Skills'
import profile from '../../assets/profile.jpeg'

const PersonalDetails = (jobSeeker) => {
  return (
    <>
      <div className="col-sm-4">
        <div className="profile-img">
          <img src={profile} alt="" />
        </div>
        <div class="custom-file">
          <button className="btn btn-secondary  mt-3"> Upload Profile </button>
        </div>
      </div>
      <div className="col-sm-8">
        <div className="row">
          <div className="col-sm-3 mb-3">
            <b> First Name </b>
          </div>
          <div className="col-sm-9">{jobSeeker.personalDetails.firstName}</div>
        </div>
        <div className="row">
          <div className="col-sm-3 mb-3">
            <b> Last Name </b>
          </div>
          <div className="col-sm-9">{jobSeeker.personalDetails.lastName}</div>
        </div>
        <div className="row">
          <div className="col-sm-3 mb-3">
            <b> City </b>
          </div>
          <div className="col-sm-9">
            {jobSeeker.personalDetails.city.cityName}{' '}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3 mb-3">
            <b> State </b>
          </div>
          <div className="col-sm-9">
            {jobSeeker.personalDetails.city.state.stateName}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3 mb-3">
            <b> Email ID </b>
          </div>
          <div className="col-sm-9">
            {jobSeeker.personalDetails.loginId.emailId}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3 mb-3">
            <b> Phone Number </b>
          </div>
          <div className="col-sm-9">
            {jobSeeker.personalDetails.loginId.phoneNumber}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3 mb-3">
            <b> Skills </b>
          </div>
          <div className="col-sm-9">
            <Skills />
          </div>
        </div>
      </div>
    </>
  )
}

export default PersonalDetails
