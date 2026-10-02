import React, { useMemo, useSyncExternalStore } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { useColorMode } from '@docusaurus/theme-common';

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export default function MuiThemeClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { colorMode } = useColorMode();
  const mounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: colorMode === 'dark' ? 'dark' : 'light',
        },
      }),
    [colorMode],
  );

  if (!mounted) return null; // Skip rendering on the server

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
