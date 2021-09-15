import styled from "styled-components"
import { COLORS_VARIABLES } from "../../../styles/GlobalStyleVariable"

export const OptionForm = styled.form`
  display: flex;
  flex-direction: row;
  float: left;
  margin-right: 5rem;
`

export const SelectBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  width: 100%;
  max-width: 350px;
  margin-top: 1rem;
`

export const OptionContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: 50px;
  left: 0;
  background-color: $gray-dark;
  color: #f5f6fa;
  max-height: 0;
  width: 100%;
  opacity: 0;
  transition: all 0.4s;
  border-radius: 8px;
  overflow: hidden;

  &.is-active {
    max-height: 240px;
    opacity: 1;
    overflow-y: scroll;
  }
  &::-webkit-scrollbar {
    width: 8px;
    background-color: #0d141f;
    border-radius: 0 8px 8px 0;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #525861;
    border-radius: 0 8px 8px 0;
  }
`

// export const.select-box label,
// export const.is-selected {
//   padding: 12px 24px;
//   cursor: pointer;
//   display: block;
//   width: 100%;
//   height: 100%;
// }

// export const.select-box .is-selected {
//   background-color: $gray-dark;
//   border-radius: 8px;
//   margin-bottom: 8px;
//   color: #f5f6fa;
//   position: relative;
//   order: 1px;
//   &:after {
//     content: "";
//     background: url("../../img/svg/triangle.svg");
//     background-size: contain;
//     background-repeat: no-repeat;

//     position: absolute;
//     height: 100%;
//     width: 20px;
//     right: 10px;
//     top: 12px;
//     transition: all 0.4s;
//   }
// }

// .select-box .options--container.is-active + .select-box .is-selected::after {
//   transform: rotateX(180deg);
//   top: -6px;
// }

// .select-box .option:hover {
//   background: $gray;
// }
// .select-box .option .radio {
//   display: none;
// }
