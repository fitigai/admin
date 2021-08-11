import React from "react"
import { Link } from "react-router-dom"
import Logo from "../icons/logos/Logo"
import NavbarLogin from "./NavbarLogin"
import NavbarLogout from "./NavbarLogout"

function Navbar(props) {
  return (
    <header className="navbar--header">
      <span className="navbar--logo">
        <Link to="/">
          <Logo />
        </Link>
      </span>
      {props.setLoggedin ? <NavbarLogin /> : <NavbarLogout setLoggedin={props.setLoggedin} />}
    </header>
  )
}

export default Navbar
