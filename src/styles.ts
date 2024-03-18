import { createGlobalStyle } from 'styled-components'

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Noto Sans Display, sans-serif;
    list-style: none;
    caret-color: transparent;
    color: white;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 32px 0;
  }

  body {
    background-color: black;

    h2 {
      margin-bottom: 16px;
    }
  }
`
