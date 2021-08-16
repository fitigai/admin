import React from "react"
import { Link } from "react-router-dom"
import Logo from "../icons/logos/Logo"
import NavbarLogin from "./NavbarLogin"
import NavbarLogout from "./NavbarLogout"
import styled from "styled-components"

const NavbarHeader = styled.header`
  position: relative;
  z-index: 1;
  height: 60px;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const NavbarLogo = styled(Link)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 45px;
  height: 45px;
`

function Navbar(props) {
  return (
    <NavbarHeader>
      <NavbarLogo to="/">
        <Logo />
      </NavbarLogo>
      {props.setLoggedin ? <NavbarLogin /> : <NavbarLogout setLoggedin={props.setLoggedin} />}
    </NavbarHeader>
  )
}

export default Navbar
