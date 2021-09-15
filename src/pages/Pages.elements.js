import styled from "styled-components"
import { COLORS_VARIABLES } from "../styles/GlobalStyleVariable"

export const FormFloating = styled.form`
  background: ${COLORS_VARIABLES.white};
  max-width: 415px;
  padding: 1rem;
  border-radius: 30px;
  color: ${COLORS_VARIABLES.primary};
  text-align: center;
`

export const FormTextCenter = styled.p`
  display: block;
  margin: 0 auto;
  max-width: 420px;
  margin-bottom: 1.5rem;
  font-size: 0.8rem;
`

export const MainHomePage = styled.main`
  width: 100%;
  height: calc(100% - 80px);
  background: url(${props => props.imgUrl}) top center no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const DashboardPage = styled.main`
  display: grid;
  grid-template-columns: 300px 1fr 1fr;
  height: calc(100% - 80px);
`

export const UserListPane = styled.section`
  position: relative;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: ${COLORS_VARIABLES.accent};
`

export const DashboardPane = styled.section``

export const TitleThree = styled.h3`
  color: ${COLORS_VARIABLES.primary};
`
