import styled from "styled-components"
import { COLORS_VARIABLES, FONT_VARIABLES } from "../../../styles/GlobalStyleVariable"

export const FieldInput = styled.div`
  position: relative;
  height: 72px;
  padding: 16px 0 8px 0;
  &:before {
    background-color: ${COLORS_VARIABLES.white};
  }
  &:after {
    background-color: ${COLORS_VARIABLES.grayLight};
    transform: scaleX(0);
    transition: transform 0.5s;
  }
  &.is-focused:after {
    transform: translateY(0) scale(0.95);
    transform: scaleX(1);
  }
  .has-label {
    font-size: 12px;
    color: ${COLORS_VARIABLES.secondary};
    transform: translateY(0) scale(0.95);
  }
`
export const FieldLabel = styled.label`
  position: relative;
  line-height: 0;
  font-size: 0.9rem;
  font-weight: ${FONT_VARIABLES.semiBold};
  display: block;
  margin: 0;
  transform: translateY(24px);
  transition: transform 0.3s;
  transform-origin: 0 50%;
  z-index: 10;
  color: ${COLORS_VARIABLES.primary};
  margin-left: 10px;
  pointer-events: none;
  text-align: left;
`

export const Input = styled.input`
  padding: 8px 10px;
  line-height: 16px;
  border: none;
  -webkit-appearance: none;
  width: 100%;
  height: 45px;
  font-size: 16px;
  background-color: transparent;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  border-radius: 15px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.41);
  -webkit-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.41);
  -moz-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.41);
  &:focus {
    outline: 0;
  }
`
