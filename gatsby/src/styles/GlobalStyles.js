import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --blue: #1080D0;
    --black: #2E2E2E;
    --white: #fff;
    --grey: #efefef;
    /* width of website */
    --fullsize: 100%;
    --maxSize: 1100px;
  }
  html {
    font-size: 10px;
  }

  body {
    font-size: 2rem;
  }

  ul, li {
    margin: 0;
    padding: 0;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    background: var(--blue);
    color: white;
    border: 0;
    padding: 1.25rem 1.25rem;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  hr {
    border: 0;
    height: 8px;
  }

  img {
    max-width: 100%;
  }


`;

export default GlobalStyles;
