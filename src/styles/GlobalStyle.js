import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Poppins', 'Helvetica', 'Arial', sans-serif;
        src : url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,700&display=swap');
    }

    html,
    body {
      position: relative;
      height: 100%;
      width: 100%;
    }

    body {
      font-family: 'Poppins', 'Helvetica', 'Arial', sans-serif;
      font-size: 12px;
      overflow-x: hidden;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    html,
    body,
    p,
    ol,
    ul,
    li,
    dl,
    dt,
    dd,
    blockquote,
    figure,
    fieldset,
    legend,
    textarea,
    pre,
    iframe,
    hr,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
      padding: 0;
    }

    ul {
      list-style: none;
    }

    button,
    input,
    select,
    textarea {
      margin: 0;
    }

    html {
      box-sizing: border-box;
    }

    img,
    video {
      height: auto;
      max-width: 100%;
    }

    iframe {
      border: 0;
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    td,
    th {
      padding: 0;
    }

    a {
      display: block;
      text-decoration: none;
      cursor: pointer;
    }

    
    #root {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: scroll;
    }

    h1 {
      font-size: 25px;
      font-weight: 600;
      padding: 1rem 0;
    }

    h2 {
      font-size: 1.9rem;
      font-weight: 800;
    }
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

export default GlobalStyle
