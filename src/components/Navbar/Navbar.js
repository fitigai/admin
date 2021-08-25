import React from "react"
import Logo from "../Logo/Logo"
import NavbarLogin from "./NavbarLogin"
import { Nav, NavbarContainer, NavbarLogo } from "./Navbar.elements"

function Navbar(props) {
  return (
    <Nav>
      <NavbarContainer>
        <NavbarLogo to="/">
          <Logo />
          Fitigai
        </NavbarLogo>
        {props.setLoggedin ? <NavbarLogin setLoggedin={props.setLoggedin} /> : ""}
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
