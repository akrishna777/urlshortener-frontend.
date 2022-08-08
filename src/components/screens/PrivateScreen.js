import { useState, useEffect } from 'react'
import axios from 'axios'
import './PrivateScreen.css'
import { Navigate, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Navbar from '../Navbar'
import Form from '../Form'
import Table from '../Table'

const PrivateScreen = () => {
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const [shortUrls, setShortUrls] = useState([])
  const baseUrl = 'https://urlshortener-process.herokuapp.com'
  console.log(shortUrls)

  useEffect(() => {
    const fetchShortUrls = async () => {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      }

      try {
        const { data } = await axios.get(`${baseUrl}/shortUrls`, config)
        setShortUrls(data)
      } catch (error) {
        localStorage.removeItem('authToken')
        setError('You are not authorized please login')
      }
    }

    fetchShortUrls()
  }, [])
  return error ? (
    <>
      <span className="error-message">{error}</span>
      <button className="btn btn-primary" onClick={() => navigate('/login')}>
        Login
      </button>
    </>
  ) : (
    <div>
      {/* {privateData}
      <h1>Private page</h1> */}
      <Navbar />
      <h1>URL Shortner</h1>
      <Form />
      <Table data={shortUrls} />
    </div>
  )
}

export default PrivateScreen
