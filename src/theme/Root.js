// Attribution:
// https://webreaper.dev/posts/material-ui-theme-with-docusaurus/
import { getInitColorSchemeScript } from '@mui/material/styles';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import theme from '@site/src/shared/components/mui-theme';

export default function Root({ children }) {
  return (
    <>
      {getInitColorSchemeScript()}
      <CssVarsProvider theme={theme}>{children}</CssVarsProvider>
    </>
  );
}
