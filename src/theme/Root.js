// Attribution:
// https://webreaper.dev/posts/material-ui-theme-with-docusaurus/
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import theme from '@site/src/shared/components/mui-theme';
import { ThemeProvider } from '@mui/material/styles';

export default function Root({ children }) {
  return (
    <>
      <InitColorSchemeScript />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
}
