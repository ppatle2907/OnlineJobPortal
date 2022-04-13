import React, { useState } from 'react'
import admiService from '../../http-common/admin-http-common'
const JobSeeker = () => {
  const [jobSeekers, setJobSeekers] = useState([])

  const init = () => {
    admiService
      .getAllJobSeeker()
      .then((response) => {
        console.log('Printing JobSeeker data', response.data)
        setJobPost(response.data)
      })
      .catch((error) => {
        console.log('Something went wrong', error)
      })
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <section className="inner-body">
      <div className="container">
        <h3>Job</h3>
        <hr />
        <div>
          <table className="table table-bordered table-striped">
            <thead className="thead-dark">
              <tr>
                <th>jobTitle</th>
                <th>jobDescription</th>
                <th>city</th>
              </tr>
            </thead>
            <tbody>
              {jobPost.map((job) => (
                <tr key={job.id}>
                  <td>{job.jobTitle}</td>
                  <td>{job.jobDescription}</td>
                  <td>{job.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default JobSeeker
