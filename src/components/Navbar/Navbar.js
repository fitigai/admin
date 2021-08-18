import React from "react"
import Logo from "../../icons/logos/Logo"
import NavbarLogin from "./NavbarLogin"
import NavbarLogout from "./NavbarLogout"
import { Nav, NavbarContainer, NavbarLogo } from "./Navbar.elements"

function Navbar(props) {
  return (
    <Nav>
      <NavbarContainer>
        <NavbarLogo to="/">
          <Logo />
        </NavbarLogo>
        {props.setLoggedin ? <NavbarLogin /> : <NavbarLogout setLoggedin={props.setLoggedin} />}
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
