// Attribution:
// https://webreaper.dev/posts/material-ui-theme-with-docusaurus/#create-mui-color-theme

import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

const extTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {},
    },
    dark: {
      palette: {},
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      '"Helvetica Neue"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default extTheme;
