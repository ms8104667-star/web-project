import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box; 
    margin: 0;
    padding: 0; 
  }

  html {
    font-size: 10px; 
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Arial', sans-serif; 
    font-size: 1.6rem; 
    line-height: 1.5; 
    color: #333; 
    background-color: #f4f4f4; 
    overflow-x: hidden; 
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0; 
    text-rendering: optimizeLegibility; 
  }

  a {
    text-decoration: none; 
    color: #43cea2; 
    transition: color 0.3s ease-in-out;

		&.active {
			font-weight: bold;
			color: #00ffb7;
		}
    
    &:hover {
      color: #36b08d;
    }
  }

  ul, ol {
    list-style: none; 
  }

  img {
    max-width: 100%; 
    height: auto; 
    display: block; 
  }


`;

export default GlobalStyles;