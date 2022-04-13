import React from 'react'

const Education = (props) => {
  return (
    <>
      <div className="col-sm-6">
        <div className="card border-0 default-border-radius default-box-shadow mb-5">
          <div className="card-body p-5 ">
            <div className="row">
              <div className="col-sm-4">
                <p>
                  <strong>Education :</strong>
                </p>
              </div>
              <div className="col-sm-8">
                <p>{props.e.educationType}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <p>
                  <strong>University</strong>
                </p>
              </div>
              <div className="col-sm-8">{props.e.universityName}</div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <p>
                  <strong>Institute :</strong>
                </p>
              </div>
              <div className="col-sm-8">{props.e.instituteName}</div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <p>
                  <strong>Passing Year :</strong>
                </p>
              </div>
              <div className="col-sm-8">{props.e.passingYear}</div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <p>
                  <strong>Percentage :</strong>
                </p>
              </div>
              <div className="col-sm-8">{props.e.educationType}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Education
