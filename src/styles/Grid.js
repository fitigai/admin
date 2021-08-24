/* eslint-disable */

import styled from "styled-components"
import { DEVICE } from "./GlobalStyleVariable"

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

const media = {
  mediumDown: styles => `
    @media only screen and (max-width: ${DEVICE.laptop}) {
      flex: ${props => props.size};
      ${styles}
    }
  `,
  mediumUp: styles => `
    @media only screen and (min-width: ${DEVICE.laptop}){
      ${styles}
    }
  `
}

export const Col = styled.div`
  flex: ${props => props.size};
  ${props =>
    props.collapse &&
    media[props.collapse](`
      display: none;
   `)};
`
// @include small {
//     .col-#{$i} {
//       flex: 0 0 100% / $columns * $i;
//       & > * {
//         padding: 0;
//         margin: 0;
//       }
//     }
// }

//   @media only screen and (max-width: 0) and (min-width: #{$small}), (max-width: #{$medium}) {
//     @content;
//   }
