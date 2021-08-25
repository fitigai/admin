import styled from "styled-components"

export const FieldInput = styled.div`
  position: relative;
  height: 72px;
  padding: 16px 0 8px 0;
`
export const FieldLabel = styled.label`
  position: relative;
  line-height: 0;
  font-size: 1.5rem;
  font-weight: $light;
  display: block;
  margin: 0;
  transform: translateY(24px);
  transition: transform 0.3s;
  transform-origin: 0 50%;
  z-index: 10;
  color: $white;
  margin-left: 10px;
  pointer-events: none;
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
  &:focus {
    outline: 0;
  }
`
