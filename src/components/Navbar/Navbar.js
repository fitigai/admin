import React from "react"
import Logo from "../Logo/Logo"
import NavbarLogin from "./NavbarLogin"
import { NavbarContainer } from "../Container/Container.elements"
import { Nav, NavbarLogo } from "./Navbar.elements"

function Navbar(props) {
  return (
    <Nav>
      <NavbarContainer>
        <NavbarLogo to="/">
          <Logo />
          Fitigai
        </NavbarLogo>
        <NavbarLogin />
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
