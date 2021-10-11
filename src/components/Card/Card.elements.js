import styled from "styled-components"
import { COLORS_VARIABLES, FONT_VARIABLES } from "../../styles/GlobalStyleVariable"

export const Card = styled.article`
  display: block;
  margin: 0 auto;
  max-width: 500px;
  padding: 1rem;
  background-color: #297f87;
  border-radius: 20px;
  color: ${COLORS_VARIABLES.white};

  table {
    display: table;
    width: 100%;
    height: 100%;
    text-align: left;
    th {
      font-size: 0.9rem;
    }
  }
`
export const Cardheader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-size: 1.4rem;
  }
  div {
    display: table;
    span {
      display: table-cell;
      vertical-align: middle;
      color: #8ae6ef;
      font-size: 1.2rem;
      font-weight: ${FONT_VARIABLES.semiBold};
      padding: 0 15px;
      text-align: right;
    }
  }
`

export const Pillcontainer = styled.div`
  padding-top: 20px;
  width: 100%;
  h5 {
    display: inline;
    color: #8ae6ef;
    margin-right: 5px;
    margin-left: 10px;
    &:first-child {
      margin-left: 0;
    }
  }
`

export const Pill = styled.a`
  display: inline;
  background-color: #8ae6ef;
  padding: 1px 5px;
  border-radius: 50px;
  color: #297f87;
  margin-left: 7px;
`
