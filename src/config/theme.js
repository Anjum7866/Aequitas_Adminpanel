import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#321fdb",
      contrastText: "#fff",
      light:'#5B4CE2',
      dark:'#005BEA',
    },
    secondary: {
      main: "#212121",
      light:'#FFFFFF0D'
    },
    background:{
        default:'#ebedef'
    }
  },
  typography: {
    fontFamily: "Roboto",
    fontWeightRegular: 500,
  },
});

