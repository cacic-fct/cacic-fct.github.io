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
});

export default extTheme;
