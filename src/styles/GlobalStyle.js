import { createGlobalStyle } from "styled-components"

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
      font-size: 1.6rem;
      font-weight: 600;
    }
`

export default GlobalStyle
