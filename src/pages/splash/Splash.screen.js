import { CssBaseline } from "@mui/material";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "../../components/privateRoute";
import AppScreen from "../app";
import Login from "../auth/login/Login";
import Register from "../auth/register/Register";

const SplashScreen = () => {
  return (
    <>
      {/* // <StyledEngineProvider injectFirst>
    //   <ThemeProvider theme={appliedTheme}> */}
      <CssBaseline />
      {/* <GlobalStyles /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="login" replace />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/*"
            element={
              <PrivateRoute>
                <AppScreen />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
      {/* //   </ThemeProvider>
    // </StyledEngineProvider> */}
    </>
  );
};

export default SplashScreen;
