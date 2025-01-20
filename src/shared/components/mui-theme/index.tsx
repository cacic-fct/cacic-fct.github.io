// Attribution:
// https://webreaper.dev/posts/material-ui-theme-with-docusaurus/#create-mui-color-theme

import { extendTheme } from '@mui/material/styles';

const extTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Helvetica Neue"',
      'Helvetica',
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
