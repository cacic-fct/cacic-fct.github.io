// Attribution:
// https://webreaper.dev/posts/material-ui-theme-with-docusaurus/

import { useEffect } from 'react';
import { createCookieBanner } from '@cacic-fct/account-manager-cookie-banner';
import '@cacic-fct/account-manager-cookie-banner/styles.css';
import { isCookieBannerEnabled } from '../feature-flags/cookie-banner-feature-flag';

export default function Root({ children }) {
  useEffect(() => {
    let banner;
    let disposed = false;

    void isCookieBannerEnabled('cacic-fct').then((enabled) => {
      if (disposed || !enabled) {
        return;
      }

      banner = createCookieBanner({
        privacyPolicyUrl: 'https://cacic.dev.br/legal/privacy-policy',
        onAccept: () => {
          window.dispatchEvent(new Event('cookieBannerAccepted'));
        },
      });
    });

    return () => {
      disposed = true;
      banner?.destroy();
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
