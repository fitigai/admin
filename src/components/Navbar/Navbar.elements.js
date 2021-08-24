import { Link } from "react-router-dom"
import styled from "styled-components"
import { DEVICE, FONT_VARIABLES, COLORS_VARIABLES } from "../../styles/GlobalStyleVariable"
import { Container } from "../../styles/GlobalStyle"
import { Popover } from "evergreen-ui"

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  font-size: 1.2rem;
`

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  ${Container}
`

export const NavbarLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 135px;
  font-size: 1.6rem;
  font-weight: ${FONT_VARIABLES.bold};
  color: ${COLORS_VARIABLES.primary};
  cursor: pointer;
`

export const NavbarTools = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const NavMobile = styled(Popover)`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(0, 0);
  cursor: pointer;

  @media ${DEVICE.mobileL} {
    display: none;
  }
`

export const SideSheetHiddenUp = styled.div`
  display: block;
  @media ${DEVICE.mobileL} {
    display: none;
  }
`

export const ButtonHiddenUp = styled.div`
  display: block;
  @media ${DEVICE.mobileL} {
    display: none;
  }
`
