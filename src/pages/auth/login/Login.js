import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../Auth";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false)
  const [snackBar, setSnackBar] = useState({
    open: false,
    severity: "success",
    message: "",
  });
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onTooglePassword = (e) => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
  const onClickRegister = () => {
    navigate("/register");
  };
  const onValidate = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (email === "") {
      setSnackBar({
        ...snackBar,
        open: true,
        severity: "error",
        message: "email can't be empty",
      });
    } else if (emailRegex.test(email) === false) {
      setSnackBar({
        ...snackBar,
        open: true,
        severity: "error",
        message: "invalid email",
      });
    } else if (password === "") {
      setSnackBar({
        ...snackBar,
        open: true,
        severity: "error",
        message: "password can't be empty",
      });
    } else {
      return true;
    }
  };
  const onSubmit = () => {
    const data = {
      user_email: email,
      password: password,
    };
    if (onValidate) {
      localStorage.setItem("luckyNumber_User", JSON.stringify(data));
      navigate("/dashboard");
    }
  };
  // const onSubmit = () => {
  //   axios
  //     .post(`http://localhost:3000/admin/login`, {
  //       email, password
  //     })
  //     .then(function (data) {
  //       if (data.error) {
  //         console.log(data.error);
  //       } else {
  //         navigate("/dashboard");
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       console.log("error",error.response.data.message);
  //       setSnackBar(true);
  //     });
  // };
  return (
    <Auth
      email={email}
      password={password}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onSubmit={onSubmit}
      showPassword={showPassword}
      onTooglePassword={onTooglePassword}
      handleMouseDownPassword={handleMouseDownPassword}
      onClickRegister={onClickRegister}
      title='Login'
      subTitle='Sign In to your account'
      buttonText='Login'
      type='login'
    />
  );
};

export default Login;
