import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material';
import SplashScreen from './pages/splash/Splash.screen';
import { LightTheme } from './config/theme';
import { Provider } from 'react-redux';
import store from './redux/store/store';


const theme = createTheme(LightTheme);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
    <Provider store={store}>
    <SplashScreen />
    </Provider>
    </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
