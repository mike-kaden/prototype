import { createGlobalStyle } from 'styled-components';

// the styled-components global styles object
// import in App.tsx and inserted as a Component
// applies every style defined in here to all elements (can still be overwritten)
export const GlobalStyles = createGlobalStyle`
  *{
     box-sizing: border-box;
     margin: 0;
     padding: 0;
   }
   *:focus {
    outline: none;
   }
   html{
    font-family: -apple-system, BlinkMacSystemFont,
    "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
  }
`;

export const globalDarkThemeValues = {};

export const globalLightThemeValues = {};
