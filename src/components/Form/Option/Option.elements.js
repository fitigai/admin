import styled from "styled-components"
import { COLORS_VARIABLES } from "../../../styles/GlobalStyleVariable"

export const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 145px;
`

export const SelectContainer = styled.div`
  order: 1;
  background-color: ${COLORS_VARIABLES.accentSecondary};
  color: ${COLORS_VARIABLES.primary};
  border-radius: 8px;
  width: 100%;
  transition: all 0.3s;

  max-height: 0;
  opacity: 0;
  overflow: hidden;

  &.is-active {
    max-height: 240px;
    opacity: 1;
    overflow-y: scroll;
  }

  &::-webkit-scrollbar {
    width: 8px;
    background-color: ${COLORS_VARIABLES.grayLight};
    border-radius: 0 8px 8px 0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${COLORS_VARIABLES.gray};
    border-radius: 0 8px 8px 0;
  }
`

export const Selected = styled.div`
  position: relative;
  background-color: ${COLORS_VARIABLES.accentSecondary};
  color: ${COLORS_VARIABLES.primary};
  border-radius: 8px;
  padding: 7px 4px;
  margin-bottom: 3px;
  cursor: pointer;
  span {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
  }
  .is-active span {
    transform: rotateX(180deg);
    transform: translateY();
  }
`

export const Option = styled.div`
  position: relative;
  padding: 12px 4px;
  cursor: pointer;
  &:hover {
    background-color: ${COLORS_VARIABLES.grayLight};
    color: ${COLORS_VARIABLES.dark};
  }
  label {
    cursor: pointer;
  }
  input {
    display: none;
  }
`
