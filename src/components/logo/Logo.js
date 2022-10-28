import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  logo: {
    width: "auto",
    height: "55px",
    paddingTop: "2vh",
    [theme.breakpoints.down("sm")]: {
      minWidth: "80%",
    }
  },
}));

const Logo = ({top}) => {
  
  const classes = useStyles();
  return (
    <img
      alt="LuckyNo dashboard"
      className={classes.logo}
      src={top?"/cp_logo_admin.png":'/logo_cp.png'}
    />
  );
};

export default Logo;
