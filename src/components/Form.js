import React, { useState } from 'react'
import axios from 'axios'

const Form = () => {
  const [formData, setFormData] = useState({
    fullurl: '',
  })
  const baseUrl = 'https://urlshortener-process.herokuapp.com'

  const postUrl = async (formData) => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
      },
    }
    try {
      const data = await axios.post(`${baseUrl}/shortUrls`, formData, config)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    postUrl(formData)
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="d-flex justify-content-center align-items-center">
          <span class="border rounded bg-dark light container d-flex justify-content-center align-items-center pt-3">
            <div className="container">
              <div class="mb-3 d-flex justify-content-center align-items-center">
                <div className="col-sm-3 col-md-3 col-lg-3 ">
                  <label
                    for="exampleInputEmail1"
                    class="form-label text-danger"
                  >
                    Enter Url
                  </label>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={formData.fullurl}
                    onChange={(e) =>
                      setFormData({ ...formData, fullurl: e.target.value })
                    }
                  />
                </div>
                <div className="col-sm-3 col-md-3 col-lg-3 ms-3">
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </span>
        </div>
      </form>
    </div>
  )
}

export default Form
