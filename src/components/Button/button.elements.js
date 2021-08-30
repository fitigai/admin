import { Link } from "react-router-dom"
import styled from "styled-components"
import { COLORS_VARIABLES, FONT_VARIABLES } from "../../styles/GlobalStyleVariable"

export const ButtonLink = styled(Link)`
  display: block;
  width: 100%;
  max-width: 140px;
  color: ${COLORS_VARIABLES.white};
  margin: 1rem auto;
  padding: 0.7rem 1rem;
  border-radius: 20px;
  font-weight: ${FONT_VARIABLES.bold};
  background-color: ${props => (props.primary ? COLORS_VARIABLES.primary : COLORS_VARIABLES.secondary)};
`
