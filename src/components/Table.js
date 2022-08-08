import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Table = ({ data }) => {
  const baseUrl = 'https://urlshortener-process.herokuapp.com'
  const { shortUrlParam } = useParams()
  console.log(shortUrlParam)

  const getShortUrl = async (e) => {
    const config = {
      header: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
      },
    }

    try {
      const { data } = await axios.get(
        `${baseUrl}/shortUrls/${shortUrlParam}`,
        config,
      )

      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(data.data)
  return (
    <div className="container mt-4">
      <table class="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Full Url</th>
            <th scope="col">Shorl Urls</th>
            <th scope="col">Clicks</th>
          </tr>
        </thead>
        <tbody>
          {data.data
            ? data.data.map((item) => (
                <tr key={item._id}>
                  <th scope="row">{item._id}</th>
                  <td>
                    <a href={item.fullurl}>{item.fullurl}</a>
                  </td>
                  <td>
                    <a href={item.short} onClick={getShortUrl()}>
                      {item.short}
                    </a>
                  </td>
                  <td>{item.clicks}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  )
}

export default Table
