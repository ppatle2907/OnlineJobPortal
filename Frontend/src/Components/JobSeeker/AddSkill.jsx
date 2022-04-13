import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import jobseekerService from '../../services/jobseeker-service'
import Skills from './Skills'

function AddSkill() {
  const [jobSeekerId, setJobSeekerId] = useState('')
  const [skills, setSkills] = useState('')
  let user = JSON.parse(sessionStorage.getItem('user'))
  const init = () => {
    if (user) {
      setJobSeekerId(user.loginId)
    }
  }

  useEffect(() => {
    init()
  }, [])

  console.log('jobseekerId : ', jobSeekerId)
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

  const onSave = (e) => {
    e.preventDefault()

    jobseekerService
      .addSkills(Skills, jobSeekerId)
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log('something went wroing', error)
      })
  }

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSkills(Array.isArray(e) ? e.map((x) => x.value) : [])
  }

  return (
    <div className="App">
      <span>Choose the skills :</span>

      <Select
        className="dropdown"
        placeholder="Select Option"
        value={data.filter((obj) => skills.includes(obj.value))} // set selected values
        options={data} // set list of the data
        onChange={handleChange} // assign onChange function
        isMulti
        isClearable
      />

      {skills && (
        <div style={{ marginTop: 20, lineHeight: '25px' }}>
          <div>
            <b>Selected Value: </b> {JSON.stringify(skills, null, 2)}
          </div>
        </div>
      )}

      <div class="form-group text-center ">
        <button
          className="btn btn-primary m-auto rounded-pill"
          onClick={onSave}
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default AddSkill
