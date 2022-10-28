//import { styled} from "@mui/material/styles";
import { NoEncryption } from "@mui/icons-material";
import { styled } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import { makeStyles } from "@mui/styles";
//import { makeStyles } from "@mui/styles";

const PREFIX = "TopBar";

export const classes = {
  root: `${PREFIX}-root`,
  avatar: `${PREFIX}-avatar`,
  name: `${PREFIX}-name`,
  item: `${PREFIX}-item`,
  button: `${PREFIX}-button`,
  icon: `${PREFIX}-icon`,
  title: `${PREFIX}-title`,
  active: `${PREFIX}-active`,
};
export const openedMixin = (theme) => ({
  width: 250,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

export const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-end",
//   padding: theme.spacing(0, 1),
// }));

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: 250,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: 250,
    width: `calc(100% - ${250}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const useStyles = makeStyles((theme) => ({
  appBar:{
    backgroundColor:'#fff',
    borderBottom:"1px solid #d8dbe0",
    display: "flex",
     justifyContent: "space-between"
  },
  item: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0,
    fontSize: "14px",
  },
  button: {
    color: theme.palette.primary.contrastText,
    fontWeight: theme.typography.fontWeightLight,
    fontSize: "14px",
    textDecoration:'none',
    justifyContent: "flex-start",
    letterSpacing: 0,
    borderRadius: "0",
    textTransform: "none",
    width: "100%",
    padding: "10px 10px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      borderRadius: "10px",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    transform: "scale(0.9)",
  },
  title: {
    marginRight: "auto",
  },
  active: {
    background: theme.palette.secondary.light,
    color: theme.palette.primary.contrastText,
    textDecoration:'none',
    borderRadius: "10px",
    padding: "10px 10px",
    width: "100%",
    "& $title": {
      fontWeight: theme.typography.fontWeightMedium,
    },
    "& $icon": {
      color: theme.palette.primary.contrastText,
    },
  },
}));
