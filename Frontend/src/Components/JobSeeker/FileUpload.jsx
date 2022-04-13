import React from 'react'

import { useState } from 'react'
const FileUpload = () => {
  const [image, setImage] = useState('')

  const fileSelectedHandler = (event) => {
    event.preventDefault()
    const name = event.target.name //firstname
    const value = event.target.value //pushkar
    console.log(event.target.files[0])
    setImage({ ...image, [name]: value })
    //setImage(event.target.value)
  }

  const uploadHandler = (event) => {
    event.preventDefault()
  }

  return (
    <section className="inner-body">
      <div className="container">
        <form>
          <div>Image Uplaod</div>
          {/* <input type="file" onChange={handleChange} /> */}
          <input
            type="file"
            name="image"
            accept="image/png, image/jpeg"
            onChange={fileSelectedHandler}
          />
          <button onClick={uploadHandler}>Upload</button>
        </form>
      </div>
    </section>
  )
}

export default FileUpload
