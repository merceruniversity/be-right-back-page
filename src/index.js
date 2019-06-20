import React from 'react';
import ReactDOM from 'react-dom';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import WordmarkSVG from './svgs/MercerWordmarkForWeb.svg';
import ToolsSVG from './svgs/tools-wrench-screwdriver.svg';

const theme = {
  // Fundamental colors
  white: '#fff',
  black: '#222',

  // Grey color scale
  grey900: '#0b0b0b',
  grey850: '#161616',
  grey800: '#2f2f2f',
  grey700: '#3f3f41',
  grey600: '#676767',
  grey400: '#848484',
  grey300: '#999999',
  grey100: '#b9b9b9',
  grey80: '#d5d5d5',
  grey20: '#f5f5f5',
  //  Made with Geenes | geenes.app

  red: '#f9314a',

  // Red color scale (Default = 600)
  red900: '#1b0508',
  red850: '#370a10',
  red800: '#771723',
  red750: '#c12639',
  red600: '#f9314a',
  red500: '#fa596d',
  red300: '#fb7f8e',
  red200: '#fca1ac',
  red80: '#fdc6cd',
  red20: '#feecee',
  //  Made with Geenes | geenes.app

  orange: '#f76800',

  // Orange color scale (Default = 500)
  orange900: '#1b0b00',
  orange850: '#361600',
  orange750: '#763100',
  orange600: '#c04f00',
  orange500: '#f76800',
  orange300: '#f88432',
  orange200: '#faa060',
  orange100: '#fbb98b',
  orange50: '#fcd5b9',
  orange20: '#fef1e7',
  //  Made with Geenes | geenes.app

  green: '#6db644',

  // Red color scale (Default = 300)
  green900: '#0c1407',
  green850: '#18280f',
  green700: '#345720',
  green500: '#548d34',
  green300: '#6db644',
  green200: '#89c468',
  green100: '#a4d18a',
  green80: '#bcddaa',
  green50: '#d7ebcc',
  green20: '#f1f8ee',
  //  Made with Geenes | geenes.app

  blue: '#2297d0',

  // Blue color scale (Default = 400)
  blue900: '#031017',
  blue850: '#07212e',
  blue750: '#0f4764',
  blue600: '#1974a1',
  blue400: '#2297d0',
  blue300: '#4caad9',
  blue200: '#75bde1',
  blue100: '#9acee9',
  blue50: '#c2e2f2',
  blue20: '#eaf5fa',
  //  Made with Geenes | geenes.app

  purple: '#8850f8',

  // Purple color scale (Default = 600)
  purple900: '#0f081b',
  purple850: '#1e1136',
  purple800: '#412676',
  purple700: '#693dc0',
  purple600: '#8850f8',
  purple400: '#9e71f8',
  purple300: '#b491fa',
  purple100: '#c8affb',
  purple80: '#decffc',
  purple20: '#f4effe',
  //  Made with Geenes | geenes.app

  // Nonce colors
  blueDarkerForNavMenu: '#0e89c6',
  emhBeige: '#fff8f3',
  emhBlack: '#313131',
};

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 1vmin;

    *, *::before, *::after {
      box-sizing: inherit;
    }
  }

  body {
    color: ${props => props.theme.black};
  }
`;

const EntireViewportOuter = styled.div`
  align-content: center;
  background-color: ${props => props.theme.emhBeige};
  display: grid;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100vw;
`;

const EntireViewPortInner = styled.div`
  align-content: center;
  display: grid;
  height: 90vh;
  justify-content: center;
  width: 90vw;
`;

const WordmarkWrapper = styled.div`
  svg {
    height: auto;
    max-width: 30vmin;
    min-width: 80vmin;
  }
`;

const ToolsWrapper = styled.div`
  svg {
    fill: ${props => props.theme.black};
    height: auto;
    max-width: 10vmin;
  }
`;

const Message = styled.div`
  text-align: center;

  h1 {
    font-size: 8rem;
  }

  p {
    font-size: 5rem;
  }
`;

const node = document.body.appendChild(document.createElement('div'));

const App = () => (
  <ThemeProvider theme={theme}>
    <div>
      <EntireViewportOuter>
        <EntireViewPortInner>
          <Message>
            <ToolsWrapper>
              <ToolsSVG />
            </ToolsWrapper>
            <h1>Be right back.</h1>
            <p>
              This site is undergoing maintenance
              <br />
              and will be back soon.
            </p>
            <WordmarkWrapper>
              <WordmarkSVG />
            </WordmarkWrapper>
          </Message>
        </EntireViewPortInner>
      </EntireViewportOuter>
      <GlobalStyle />
    </div>
  </ThemeProvider>
);

ReactDOM.render(<App />, node);
