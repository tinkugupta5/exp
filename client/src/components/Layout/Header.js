import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <>
      <nav classname="navbar navbar-expand-lg bg-light">
  <div classname="container-fluid">
    <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span classname="navbar-toggler-icon">
      </span></button>
    <div classname="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link classname="navbar-brand" to="/">Expense Management</Link>
      <ul classname="navbar-nav ms-auto mb-2 mb-lg-0">
        <li classname="nav-item">
          <Link classname="nav-link active" aria-current="page" to="/user" >User</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


    </>
  )
}

export default Header
