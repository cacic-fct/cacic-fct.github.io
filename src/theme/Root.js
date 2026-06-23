// Attribution:
// https://webreaper.dev/posts/material-ui-theme-with-docusaurus/

import { useEffect } from 'react';
import { createCookieBanner } from '@cacic-fct/account-manager-cookie-banner';
import '@cacic-fct/account-manager-cookie-banner/styles.css';

export default function Root({ children }) {
  useEffect(() => {
    const banner = createCookieBanner({
      privacyPolicyUrl: 'https://cacic.dev.br/legal/privacy-policy',
      onAccept: () => {
        window.dispatchEvent(new Event('cookieBannerAccepted'));
      },
    });

    return () => {
      banner.destroy();
    };
  }, []);

  return (
    <>
      {/* <InitColorSchemeScript /> */}
      {/* <ThemeProvider theme={theme}> */}
      {children}
      {/* </ThemeProvider> */}
    </>
  );
}
