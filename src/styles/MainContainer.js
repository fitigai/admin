import React from "react"
import styled from "styled-components"

const MainContainer = styled.main`
  position: relative;
  height: 100%;
  display: block;
  width: ${props => (props.narrowContainer ? "calc(100% - 1rem)" : "100%")};
  max-width: 80rem;
  margin: 0 auto;
`

function Container(props) {
  return <MainContainer narrowContainer>{props.children}</MainContainer>
}

export default Container
