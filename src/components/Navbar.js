import React from "react"
import { Link } from "react-router-dom"

import Logo from "../icons/logos/Logo"


export const Navbar = props => {


  return (
    <header className="navbar--header">
      {/* LOGO SITE */}
      <span className="navbar--logo">
        <Link to="/">
          <Logo />
        </Link>
      </span>
    </header>
  )
}


export default (Navbar)
