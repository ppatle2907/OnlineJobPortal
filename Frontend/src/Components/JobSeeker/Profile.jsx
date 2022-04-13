import React from 'react'
import Typical from 'react-typical'
import './Profile.css'
import Form from 'react-bootstrap/Form'
import PersonalDetails from './PersonalDetails'
import EducationList from './EducationList'

export default function Profile(props) {
  console.log('in profile: ', props.jobSeeker)
  return (
    <>
      <PersonalDetails personalDetails={props.jobSeeker} />
    </>
  )
}
