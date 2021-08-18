import { Link } from "react-router-dom"
import styled from "styled-components"
import { DEVICE } from "../../styles/GlobalStyleVariable"
import { Container } from "../../styles/GlobalStyle"
import { SideSheet, Button } from "evergreen-ui"

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  font-size: 1.2rem;
  background: red;
`

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  ${Container}
`

export const NavbarLogo = styled(Link)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 45px;
  height: 45px;
`

export const NavbarTools = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const SideSheetHiddenUp = styled(SideSheet)`
  display: block;
  @media ${DEVICE.mobileL} {
    display: none;
  }
`

export const ButtonHiddenUp = styled(Button)`
  display: block;
  @media ${DEVICE.mobileL} {
    display: none;
  }
`
