import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid d-flex justify-content-between">
          <div>
            <a class="navbar-brand" href="#">
              URL Shortner
            </a>
          </div>
          <div>
            <button class="btn btn-outline-success" type="submit">
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
