import * as React from 'react';
import { ThemeProvider, useTheme } from '@material-ui/styles';

interface MyTheme {
  spacing: string;
}

function DeepChild() {
  const theme = useTheme<MyTheme>();

  return <span>{`spacing ${theme.spacing}`}</span>;
}

export default function UseTheme() {
  return (
    <ThemeProvider
      theme={{
        spacing: '8px',
      }}
    >
      <DeepChild />
    </ThemeProvider>
  );
}
