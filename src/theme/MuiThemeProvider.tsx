import React, { useEffect, useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { useColorMode } from '@docusaurus/theme-common';

export default function MuiThemeClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { colorMode } = useColorMode();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Only enable after client mounts
  }, []);

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
