import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./auth.styles";

const Auth = ({
  type,
  name,
  email,
  password,
  confirmPassword,
  onChangeName,
  onChangeEmail,
  onChangePassword,
  onChangeConfirmPassword,
  onSubmit,
  showPassword,
  showConfirmPassword,
  onTooglePassword,
  onToogleConfirmPassword,
  handleMouseDownPassword,
  handleMouseDownConfirmPassword,
  title,
  subTitle,
  buttonText,
  onClickSignIn,
  onClickRegister,
}) => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      p={2}
      sx={{ height: "100vh", width: "100%" }}
    >
      <Card variant="outlined" className={classes.authContainer}>
        <Grid container>
          <Grid item xs={12} sm={6.5} p={4}>
            <Typography variant="h4" fontWeight="bold">
              {title}
            </Typography>
            <Typography variant="body1" color="GrayText" mt={1}>
              {subTitle}
            </Typography>
            <Box mt={2}>
              {type === "register" && (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  value={name}
                  onChange={onChangeName}
                />
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={onChangeEmail}
              />
              <FormControl variant="outlined" fullWidth margin="normal">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={onChangePassword}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={onTooglePassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>

              {type === "register" && (
                <FormControl variant="outlined" fullWidth margin="normal">
                  <InputLabel htmlFor="confirmpassword">
                    Confirm Password
                  </InputLabel>
                  <OutlinedInput
                    id="confirmpassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={onChangeConfirmPassword}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={onToogleConfirmPassword}
                          onMouseDown={handleMouseDownConfirmPassword}
                          edge="end"
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              )}
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                mt={3}
              >
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={onSubmit}
                >
                  {buttonText}
                </Button>
                {type === "login" && (
                  <Link href="#" variant="body2">
                    Forgot password
                  </Link>
                )}
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} sm={5.5} className={classes.rightContainer} p={3}>
            <Typography variant="h4" fontWeight="bold" color="#fff">
              {type === "register" ? "Login" : " Sign Up"}
            </Typography>
            <Typography variant="body1" my={1} color="#fff" mt={1}>
              {type === "register"
                ? "Sign In To Handle This Panel"
                : "Sign Up To Handle This Panel"}
            </Typography>
            <Button
              type="submit"
              variant="contained"
              className={classes.button}
              onClick={() =>
                type === "register" ? onClickSignIn() : onClickRegister()
              }
            >
              {type === "register" ? "Login" : "Register Now!"}
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default Auth;
