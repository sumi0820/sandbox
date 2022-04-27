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
        body: {
          WebkitFontSmoothing: 'auto',
          margin: 0,
          padding: 0,
          backgroundColor: '#ffff',
        },
        h1: {
          fontSize: '96px',
          fontFamily: 'Noto Sans',
          [breakpoints.up('sm')]: {
            fontSize: '60px',
          },
          [breakpoints.down('xs')]: {
            fontSize: '.8rem',
          },
        },
        h2: {
          fontSize: '60px',
          fontFamily: 'Noto Sans',
          margin: '0 !important',
          lineHeight: '90%',
          [breakpoints.up('sm')]: {
            fontSize: '48px',
            whiteSpace: 'nowrap',
            margin: '5px 0 !important',
          },
          [breakpoints.down('xs')]: {
            fontSize: '1.3rem',
            margin: '2px 0 !important',
            whiteSpace: 'nowrap',
          },
        },
        h3: {
          fontSize: '48px',
          fontFamily: 'Noto Sans',
          [breakpoints.up('sm')]: {
            fontSize: '34px',
          },
          [breakpoints.down('xs')]: {
            fontSize: '4rem',
          },
        },
        h4: {
          fontSize: '34px',
          fontFamily: 'Lato',
          margin: '0',
          [breakpoints.down('sm')]: {
            fontSize: '24px',
          },
          [breakpoints.down('xs')]: {},
        },
        h5: {
          fontSize: '24px',
          fontFamily: 'Lato',
          margin: '0',
          lineHeight: '90%',
          [breakpoints.down('sm')]: {
            fontSize: '20px',
          },
          [breakpoints.down('xs')]: {
            fontSize: '.9rem',
          },
        },
        h6: {
          fontSize: '20px',
          fontFamily: 'Lato',
          margin: '0',
          lineHeight: '90%',
          [breakpoints.down('sm')]: {
            fontSize: '16px',
          },
          [breakpoints.down('xs')]: {
            fontSize: '.8rem',
          },
        },
        p: {
          fontSize: '16px',
          fontFamily: 'Lato',
          letterSpacing: '-0.05em',
          [breakpoints.down('sm')]: {
            fontSize: '14px',
          },
          [breakpoints.down('xs')]: {
            fontSize: '12px',
            marginTop: '4px',
            color: '#868686',
          },
        },
        li: {
          fontSize: '16px',
          fontFamily: 'Lato',
          letterSpacing: '0em',
          [breakpoints.up('sm')]: {
            fontSize: '14px',
          },
          [breakpoints.down('xs')]: {
            fontSize: '4rem',
          },
        },
        ul: {
          listStyleType: 'none',
          margin: '0',
          padding: '0',
          [breakpoints.up('sm')]: {
            fontSize: '14px',
          },
          [breakpoints.down('xs')]: {
            fontSize: '.8rem',
          },
        },
        a: {
          fontFamily: 'Lato',
          fontSize: '16px',
          color: '#96FC9E',
          letterSpacing: '-0.05em',
          fontWeight: 'bold',
          textDecoration: 'none',
          textAlign: 'center',
          '&:hover': {
            color: '#F5F946 ',
          },
          [breakpoints.up('sm')]: {
            fontSize: '14px',
          },
          [breakpoints.down('xs')]: {
            fontSize: '.8rem',
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
