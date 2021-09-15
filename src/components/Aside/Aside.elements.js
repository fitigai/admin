import styled from "styled-components"
import { COLORS_VARIABLES, FONT_VARIABLES } from "../../styles/GlobalStyleVariable"
import { Tab } from "evergreen-ui"

export const AsideMain = styled.aside`
  position: relative;
  height: 100%;
  background-color: ${COLORS_VARIABLES.grayLight};
`

export const TabNav = styled(Tab)`
  display: block;
  margin: 10px 0;
  padding: 0.5rem 0 0.5rem 1.5rem;
  color: ${COLORS_VARIABLES.grayDark};
  font-weight: ${FONT_VARIABLES.semiBold};
  font-size: 1rem;
  transition-duration: 0.3s;
  width: 100%;

  &:hover {
    color: ${COLORS_VARIABLES.dark};
  }
  &[aria-current="page"]:hover {
    color: ${COLORS_VARIABLES.primary};
  }
`
