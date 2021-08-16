import React from "react"
import styled, { css } from "styled-components"

const center = styled.div`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const top = styled.div`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  -webkit-box-align: flex-start;
  -moz-box-align: flex-start;
  -ms-flex-align: flex-start;
  -webkit-align-items: flex-start;
  align-items: flex-start;
  align-content: stretch;
  width: 100%;
  height: 100%;
`

const stretch = styled.div`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  -webkit-box-align: stretch;
  -moz-box-align: stretch;
  -ms-flex-align: stretch;
  -webkit-align-items: stretch;
  align-items: stretch;
  width: 100%;
  height: 100%;
`

const alignRow = styled.div`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: ${props.align} || flex-start;
  width: 100%;
  height: 100%;
`
export default function Row(props) {
  return <Row top stretch center>{props.children}</Row>
}

function generateMobileGrid(columns) {
  let createGrid = ''
  for (let i = 0; i < columns; i += 1){
    createGrid += `
      @media ${DEVICE.mobileL} {
        flex: 0 0 100% / ${columns} * ${i};
        & > * {
          padding: 0;
          margin: 0;
        }
      }
    `
  }
  return css`${createGrid}`;
}

const MobileLGrid = styled.div`
  ${generateMobileGrid(12)};
`

export default function MobileGridContainer(props) {
  return <MobileLGrid>{props.children}</MobileLGrid>
}



