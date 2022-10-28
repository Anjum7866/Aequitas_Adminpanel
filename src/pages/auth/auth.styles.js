import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  authContainer: {
    maxWidth: "850px",
    width:'100%',
    margin: "auto",
  },
  rightContainer:{
    background:theme.palette.primary.main,
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    background:theme.palette.primary.light,
    marginTop:'16px'
  }
}));
