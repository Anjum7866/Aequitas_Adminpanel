import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../Auth";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [snackBar, setSnackBar] = useState({
    open: false,
    severity: "success",
    message: "",
  });
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const onTooglePassword = (e) => {
    setShowPassword(!showPassword);
  };
  const onToogleConfirmPassword = (e) => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
  const handleMouseDownConfirmPassword = (e) => {
    e.preventDefault();
  };

  const onClickSignIn = () => {
    navigate("/login");
  };
  // const onValidate = () => {
  //   const emailRegex = /\S+@\S+\.\S+/;
  //   if (email === "") {
  //     setSnackBar({
  //       ...snackBar,
  //       open: true,
  //       severity: "error",
  //       message: "email can't be empty",
  //     });
  //   } else if (emailRegex.test(email) === false) {
  //     setSnackBar({
  //       ...snackBar,
  //       open: true,
  //       severity: "error",
  //       message: "invalid email",
  //     });
  //   } else if (password === "") {
  //     setSnackBar({
  //       ...snackBar,
  //       open: true,
  //       severity: "error",
  //       message: "password can't be empty",
  //     });
  //   } else {
  //     return true;
  //   }
  // };
  const onSubmit = () => {
    //   const data = {
    //     user_email: email,
    //     password: password,
    //   };
    //   if (onValidate) {
    //     localStorage.setItem("luckyNumber_User", JSON.stringify(data));
    //     navigate("/dashboard");
    //   }
  };
  return (
    <Auth
      name={name}
      email={email}
      password={password}
      confirmPassword={confirmPassword}
      onChangeName={onChangeName}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onSubmit={onSubmit}
      onChangeConfirmPassword={onChangeConfirmPassword}
      showPassword={showPassword}
      showConfirmPassword={showConfirmPassword}
      onTooglePassword={onTooglePassword}
      onToogleConfirmPassword={onToogleConfirmPassword}
      handleMouseDownPassword={handleMouseDownPassword}
      handleMouseDownConfirmPassword={handleMouseDownConfirmPassword}
      onClickSignIn={onClickSignIn}
      title="Sign Up"
      subTitle="Create your account"
      buttonText="Register Now"
      type="register"

    />
  );
};

export default Register;
