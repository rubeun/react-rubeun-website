import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: '120.82px',
      fontWeight: 900,
      letterSpacing: '-1.5px',
      lineHeight: '98px',
    },
    h2: {
      fontSize: '61.14px',
      fontWeight: 900,
      letterSpacing: '-0.5px',
      lineHeight: '62px',
    },
    h3: {
      fontSize: '48.91px',
      fontWeight: 900,
      lineHeight: '52px',
    },
    h4: {
      fontSize: '34.64px',
      fontWeight: 900,
      letterSpacing: '0.25px',
      lineHeight: '40px',
    },
    h5: {
      fontSize: '24.45px',
      fontWeight: 900,
      letterSpacing: '0.25px',
      lineHeight: '32px',
    },
    h6: {
      fontSize: '20.86px',
      fontWeight: 900,
      letterSpacing: '0.25px',
      lineHeight: '32px',
    },
    body1: {
      fontSize: '16.69px',
      fontWeight: 500,
      letterSpacing: '0.5px',
      lineHeight: '24px',
      color: '#424242',
    },
    body2: {
      fontSize: '14.6px',
      fontWeight: 500,
      letterSpacing: '0.25px',
      lineHeight: '22px',
      color: '#000000',
    },
    subtitle1: {
      fontSize: '16.69px',
      fontWeight: 500,
      letterSpacing: '0.17px',
      lineHeight: '24px',
      color: '#000000',
    },
    subtitle2: {
      fontSize: '14.6px',
      fontWeight: 500,
      letterSpacing: '0.1px',
      lineHeight: '24px',
      color: '#000000',
    },
    caption: {
      fontSize: '12.52px',
      letterSpacing: '0.4px',
      lineHeight: '18px',
    },
    overline: {
      fontSize: '12.23px',
      letterSpacing: '2px',
      lineHeight: '24px',
      fontWeight: 900,
    },
    button: {
      fontSize: '14.27px',
      fontWeight: 900,
      letterSpacing: '1.25px',
      lineHeight: '24px',
    },
  },
  palette: {
    primary: {
      main: '#aa44ff',
      dark: '#9723ff',
      light: '#bd74ff',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#aaaaaa',
      light: '#cccccc',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#F44336',
      dark: '#D32F2F',
      light: '#E57373',
      contrastText: '#FFFFFF',
    },
    grey: {
      900: '#212121',
      800: '#424242',
      700: '#616161',
      600: '#757575',
      500: '#9E9E9E',
      400: '#BDBDBD',
      300: '#E0E0E0',
      200: '#EEEEEE',
      100: '#FAFAFA',
    },
    background: {
      default: '#000000',
      grey: '#F4F4F4',
    },
  },
  image: {
    borderRadius: '6px',
    boxShadow: '0 10px 10px rgba(100, 100, 100, 0.2)',
  },
  shadow: {
    light: {
      boxShadow: '0 4px 12px 0px rgba(0,0,0,0.07)',
    },
    medium: {
      boxShadow: '0 10px 20px 0px rgba(0,0,0,0.08)',
    },
    dark: {
      boxShadow: '0 20px 40px 0px rgba(0,0,0,0.10)',
    },
  },
});


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
