// Attribution:
// https://webreaper.dev/posts/material-ui-theme-with-docusaurus/#create-mui-color-theme

import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

const extTheme = extendTheme({
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
