import { Link } from "react-router-dom"
import styled from "styled-components"
import { FONT_VARIABLES, COLORS_VARIABLES } from "../../styles/GlobalStyleVariable"

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  font-size: 1.2rem;
  background-color: ${COLORS_VARIABLES.white};

  -webkit-box-shadow: 0px 0px 11px -3px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 11px -3px rgba(0, 0, 0, 0.3);
`

export const NavbarLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 120px;
  font-size: 1.3rem;
  font-weight: ${FONT_VARIABLES.bold};
  color: ${COLORS_VARIABLES.primary};
  cursor: pointer;
`

export const NavbarTools = styled.div`
  position: absolute;
  top: 50%;
  right: ${props => props.rightPosition};
  transform: translateY(-50%);
`

export const NavbarButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  padding: 0.2rem 0.7rem;
  border-radius: 20px;
  font-weight: ${FONT_VARIABLES.bold};
  color: ${COLORS_VARIABLES.grayDark};
  font-size: 1rem;
  background-color: ${props => props.backgroundButton};
  small {
    padding: 0 0.4rem;
  }
`
