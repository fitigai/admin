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

export const Container = styled.div`
  height: 100%;
  display: block;
  width: ${props => (props.narrowContainer ? "calc(100% - 1rem)" : "100%")};
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`

export const Row = styled.div`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: ${props => props.FlexItems};
  width: 100%;
  height: 100%;
`

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
