import React from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from 'components/Routes';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

const breakpoints = createBreakpoints({});

const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        'html, body': {
          WebkitFontSmoothing: 'auto',
          margin: 0,
          padding: 0,
          backgroundColor: '#ffff',
          fontSize: '16px !important',
          fontFamily: 'Lato',
          [breakpoints.up('sm')]: {
            fontSize: '14px !important',
          },
          [breakpoints.down('xs')]: {
            fontSize: '10px !important',
          },
        },
        h1: {
          fontSize: '6rem',
          fontFamily: 'Noto Sans',
          margin: '0',
        },
        h2: {
          fontSize: '4rem',
          fontFamily: 'Noto Sans',
          margin: '0',
        },
        h3: {
          fontSize: '3rem',
          fontFamily: 'Noto Sans',
          margin: '0',
        },
        h4: {
          fontSize: '2rem',
          fontFamily: 'Noto Sans',
          margin: '0',
        },
        h5: {
          fontSize: '1.5rem',
          fontFamily: 'Noto Sans',
          margin: '0',
        },
        h6: {
          fontSize: '1.25rem',
          fontFamily: 'Noto Sans',
          margin: '0',
        },
        p: {
          fontSize: '1.2rem',
          margin: '0',
        },
        li: {
          fontSize: '1.2rem',
        },
        ul: {
          listStyleType: 'none',
          margin: '0',
          padding: '0',
        },
        a: {
          fontSize: '1.2rem',
          color: '#33A6B8',
          fontWeight: 'bold',
          textDecoration: 'none',
          textAlign: 'center',
          '&:hover': {
            color: '#F5F946 ',
          },
        },
      },
    },
  },
  palette: {
    primary: {
      light: '#F5F946',
      main: '#ADF173',
      dark: '#000000',
    },
    secondary: {
      main: '#ffff',
      dark: '#595959',
    },
  },
});

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <Routes />
    </CssBaseline>
  </ThemeProvider>
);

export default App;
