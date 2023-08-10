// import React from 'react'
import { NavLink, Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <Link to="/" className="navbar-brand" href="#">
    <h1 className="text-center ">Rick & Morty
          <span className="text-primary"> Almanac</span>      
        </h1>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link active" to="/" >Characters</NavLink>
        <NavLink className="nav-link" to="/episodes">Episodes</NavLink>
        <NavLink className="nav-link" to="/location">Location</NavLink>
        
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar