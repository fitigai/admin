import styled from "styled-components"
import { COLORS_VARIABLES } from "../styles/GlobalStyleVariable"

export const MainHomePage = styled.main`
  width: 100%;
  height: calc(100% - 80px);
  background: url(${props => props.imgUrl}) top center no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const FormCenter = styled.form`
  background: ${COLORS_VARIABLES.white};
  max-width: 600px;
  padding: 1rem;
  border-radius: 30px;
  color: ${COLORS_VARIABLES.primary};
  display: flex;
  align-items: center;
`
