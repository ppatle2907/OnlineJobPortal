import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Select from 'react-select'
import JobSeekerService from '../../services/jobseeker-service'

import JobList from '../Company/JobList'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { ExclamationSquareFill } from 'react-bootstrap-icons'
const Home = () => {
  //on render useEffect will execute and get data from the backend to display job List

  const [jobPost, setJobPost] = useState([])
  const [isCity, setIsCity] = useState(false)
  const [isSkills, setIsSkills] = useState(false)
  const [isSkillsAndCity, setIsSkillsAndCity] = useState(false)
  const [city, setCity] = useState('')
  const [selectCity, setSelectCity] = useState('')
  const [isDefault, setIsDefault] = useState(true)
  const [skills, setSkills] = useState([])
  const [value, setValue] = useState('')

  // set value for default selection
  const [selectedValue, setSelectedValue] = useState([])

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    console.log('skills: ', skills)
    //setSelectedValue(Array.isArray(e) ? e.map((x) => x.value) : [])
    setSkills(Array.isArray(e) ? e.map((x) => x.value) : [])
    //setSkills(selectedValue)
  }

  console.log('SElected city : ', city)
  const handleSelect = (e) => {
    console.log('selected value ', e)
    setValue(e)
  }

  function onChangeHandler(e) {
    const name = e.target.name //firstname
    const value = e.target.value //pushkar
    console.log('name of filed', name)
    console.log('value of filed', value)
    //if data chages continusloy in form it will update into state
    setCity({ ...city, [name]: value })
  }

  const cities = [
    { label: 'Mumbai', value: 1 },
    { label: 'Pune', value: 2 },
    { label: 'Nagpur', value: 3 },
    { label: 'Nasik', value: 4 },
  ]

  const data = [
    {
      value: 1,
      label: 'HTML and CSS',
    },
    {
      value: 2,
      label: 'XML',
    },
    {
      value: 3,
      label: 'Python',
    },
    {
      value: 4,
      label: 'aqua sky',
    },
    {
      value: 5,
      label: 'java',
    },
    {
      value: 6,
      label: 'JavaScript',
    },
    {
      value: 7,
      label: 'Swift',
    },
    {
      value: 8,
      label: 'c++',
    },
    {
      value: 9,
      label: 'c#',
    },
    {
      value: 10,
      label: 'R',
    },
    {
      value: 11,
      label: 'JavaScript',
    },
    {
      value: 12,
      label: 'Golang (Go)',
    },
    {
      value: 13,
      label: 'SQL',
    },
    {
      value: 14,
      label: 'Ruby',
    },
    {
      value: 15,
      label: 'PHP',
    },
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('skills : ', skills)

    const data = {
      skills,
      city,
    }

    data.city = city
    data.skills = skills
    console.log('data : ', data)
    JobSeekerService.searchJobs(data)
      .then((response) => {
        console.log('response data : ', response.data)
        setJobPost(response.data)
      })
      .catch((error) => {
        console.log('somethin wrong happened ', error)
      })
  }

  const init = () => {
    //default  jobs
    JobSeekerService.getAllJObs()
      .then((response) => {
        console.log('response data : ', response.data)
        setJobPost(response.data)
        console.log('deafult jobs:  ', jobPost)
      })
      .catch((error) => {
        console.log('somethin wrong happened ', error)
      })
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <>
      <section className="inner-body">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 offset-sm-3">
              <div className="text-center welcome-section pt-5">
                <h1>Welcome to job Portal</h1>
                <h3>Find your dream Job</h3>
              </div>
            </div>
            <div className="col-sm-12 ">
              <div className="global-search te">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Select skills</Form.Label>
                    <div className="form-group">
                      <Select
                        className="dropdown"
                        placeholder="Select Option"
                        value={data.filter((obj) => skills.includes(obj.value))} // set selected values
                        options={data} // set list of the data
                        onChange={(e) => {
                          handleChange(e)
                        }} // assign onChange function
                        isMulti
                        isClearable
                      />
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Select City</Form.Label>
                    <div className="form-group">
                      <Select
                        options={cities}
                        onChange={(opt) => {
                          setCity(opt.value)
                        }}
                        placeholder="City"
                      />
                    </div>
                  </Form.Group>
                  <div className="text-center">
                    <Button
                      variant="primary"
                      type="submit"
                      className="text-center rounded-pill"
                      onClick={handleSearch}
                    >
                      Search
                    </Button>
                  </div>
                </Form>
              </div>
              <JobList jobPost={jobPost} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
