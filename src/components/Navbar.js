import React from "react"
import { Link } from "react-router-dom"
import Logo from "../icons/logos/Logo"
import NavbarLogin from "./NavbarLogin"

export const Navbar = props => {
  return (
    <header className="navbar--header">
      <span className="navbar--logo">
        <Link to="/">
          <Logo />
        </Link>
      </span>
      <NavbarLogin />
    </header>
  )
}

export default Navbar
