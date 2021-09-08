import styled from "styled-components"
import { Link } from "react-router-dom"
import { COLORS_VARIABLES, FONT_VARIABLES } from "../../styles/GlobalStyleVariable"

export const AsideMain = styled.aside`
  position: relative;
  height: 100%;
  background-color: ${COLORS_VARIABLES.grayLight};
`

export const AsideLink = styled(Link)`
  padding: 0.5rem 0 0.5rem 1.5rem;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 0.5rem;
  border-radius: 20px;
  color: ${COLORS_VARIABLES.grayDark};
  font-weight: ${FONT_VARIABLES.semiBold};
  font-size: 1rem;
  transition-duration: 0.3s;
  &:hover {
    background-color: #bed2ff;
    color: ${COLORS_VARIABLES.dark};
  }
`
