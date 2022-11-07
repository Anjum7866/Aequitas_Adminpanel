import React from "react";
import { makeStyles } from "@mui/styles";
import Image from '../img/logo.png'

const useStyles = makeStyles((theme) => ({
  logo: {
    width: "auto",
    height: "100px",
    paddingTop: "2vh",
    paddingBottom: "2vh",
    [theme.breakpoints.down("sm")]: {
      minWidth: "80%",
    }
  },
}));

const Logo = ({top}) => {
  
  const classes = useStyles();
  return (
         
    <img className={classes.logo}src={Image} alt='img' />
                    
    // <img
    //   alt="LuckyNo dashboard"
    //   className={classes.logo}
    //   src={top?"/cp_logo_admin.png":'/logo_cp.png'}
    // />
  );
};

export default Logo;
