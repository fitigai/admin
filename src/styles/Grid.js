import React from "react"
import styled, { css } from "styled-components"

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

const FlexItems = {
  top: `-webkit-box-align: flex-start;
            -moz-box-align: flex-start;
            -ms-flex-align: flex-start;
            -webkit-align-items: flex-start;
            align-items: flex-start;`,
  stretch: `-webkit-box-align: stretch;
            -moz-box-align: stretch;
            -ms-flex-align: stretch;
            -webkit-align-items: stretch;
            align-items: stretch;`,
  center: `-webkit-box-align: center;
            -moz-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;`
}

const Row = styled.div`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: ${FlexItems};
  width: 100%;
  height: 100%;
`

// const column = 12

// function gridSystem(colNb) {
//   let size = ''
//   for (let i = 0; i < column; i += 1){
//     size += `
//       0 0 100% / ${column} * ${i};
//     `
//   }
// }

// const Col = styled.div`
//    flex: ${gridSystem()}
// `

const media = {
  xs: styles => {
    ;`
    @media only screen and (min-width: 768px){
      ${styles}
    }
  `
  }
}

const Col = styled.div`
  flex: ${props => props.size};
  ${props =>
    props.collapse &&
    media[props.collapse](`
      display: none;
   `)};
`