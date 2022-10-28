import {
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Divider,
  Typography,
  Avatar,
  Popover,
  Grid,
  Button,
  Paper,
  CssBaseline,
  Tooltip,
  ButtonGroup,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";
import version from "../../../package.json";
import { Global } from "@emotion/react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import NavItem from "./NavItem";
import { AppBar, classes, Drawer } from "./navbar.styles";
import { useState } from "react";
import { navItems } from "./NavMenu";
import Logo from "../logo/Logo";
import AppBreadcrumb from "./AppBreadcrumb";

const NavBar = () => {
  //   const dispatch = useDispatch();
  const users = localStorage.getItem("luckyNumber_User");
  const user = JSON.parse(users);
  const [top, settop] = useState(window.innerWidth >= 800);
  const [popoverAnchor, setPopoverAnchor] = useState(null);

  //const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  //const open = Boolean(anchorEl);
  const openUserInfo = Boolean(anchorEl2);

  const handleClickUserInfo = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleCloseUserInfo = () => {
    setAnchorEl2(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    settop(open);
  };

  async function handleLogout() {
    // try {
    //   logout && (await logout());
    // } catch (err) {
    //   console.log(err);
    // }
    // localStorage.clear();
  }

  const accountInfo = (
    <Paper sx={{ padding: 2 }}>
      <Grid container alignItems="center">
        <Typography color="textPrimary" variant="h5" align="center">
          {/* {currentUser?.displayName || user.name} */}
          user Name
        </Typography>

        <Typography color="textSecondary" variant="body2" align="center">
          {/* {currentUser?.email || user.email} */}
          user email
        </Typography>

        <Button
          fullWidth
          sx={{ marginTop: "10px" }}
          variant="contained"
          color="secondary"
          onClick={() => handleLogout()}
        >
          log out
        </Button>
      </Grid>
    </Paper>
  );
  const content = (
    <Box
      className=""
      minWidth={20}
      sx={{
        maxWidth: "100%",
        //height:'80vh',
        paddingTop: "32px",
        //background: "red",
        overflow: "hidden",
        //background:'red',
      }}
      display="flex"
      flexDirection={"column"}
      role="presentation"
      onClick={toggleDrawer(top)}
      onKeyDown={toggleDrawer(top)}
    >
      <Box
        pr={1}
        pl={1}
        pt={0}
        overflow={"auto"}
        style={{
          overflowX: "hidden",
          //background:'yellow',
          height: "75vh",
          //borderTop: "1px solid rgba(255, 255, 255, 0.12)",
        }}
      >
        <>
          {navItems.map((item, index) => {
            // if (item.category === "User Management") {
            return (
              <Tooltip
                key={index}
                title={item.title}
                disableHoverListener={top}
                placement="right"
              >
                <Box>
                  <NavItem
                    href={item.href}
                    title={top ? item.title : ""}
                    icon={item.icon}
                    category={item.category}
                  />
                </Box>
              </Tooltip>
            );
            // }
          })}
        </>
      </Box>
     
    </Box>
  );

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Global
          styles={{
            ".MuiDrawer-root > .MuiPaper-root": {
              borderRight: "0",
              backgroundColor: "#263144",
              overflow: "hidden",
              "*::-webkit-scrollbar": {
                WebkitAppearance: "none",
                borderRadius: "4px",
                border: "1px solid rgba(0,0,0,.2)",
                width: "7px",
              },
              "*::-webkit-scrollbar-thumb": {
                borderRadius: "4px",
                backgroundColor: "rgba(0,0,0,.5)",
                WebkitBoxShadow: "0 0 1px rgba(255,255,255,.5)",
              },
            },
            // ".MuiToolbar-root":{
            //   minHeight:'40px !important'
            // }
          }}
        />
        <AppBar
          elevation={0}
          position="fixed"
          sx={{
            background:'#fff',
            borderBottom:"1px solid #d8dbe0",
            left: {
              sm: top ? "250px" : "65px",
              xs: top ? "250px" : "57px",
            },
            width: top ? "calc(100% - 250px)" : "calc(100% - 65px)",
          }}
        >
          <Toolbar
            sx={{ display: "flex", justifyContent: "space-between" }}
            className={classes.appBar}
          >
            <Hidden lgDown>
              <Popover
                open={Boolean(popoverAnchor)}
                anchorEl={popoverAnchor}
                onClose={() => setPopoverAnchor(null)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                {accountInfo}
              </Popover>
            </Hidden>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2 ,color:'#212121'}}
              onClick={() => settop(!top)}
            >
              <MenuIcon />
            </IconButton>

            <Button
              // variant="contained"
              onClick={handleClickUserInfo}
              sx={{ textTransform: "none" }}
            >
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  marginRight: "8px",
                  background: "#212121",
                }}
                //src={currentUser?.photoURL || "./admin-logo.jpg"}
                src=""
              >
                {user.name?.split("")[0][0]}
              </Avatar>
            </Button>
          </Toolbar>
          <Divider sx={{background:'#d8dbe0'}}/>
          <Toolbar
            sx={{ minHeight:'40px !important' }}
            className={classes.appBar}
          >
            <AppBreadcrumb/>
          </Toolbar>
         
        </AppBar>
       
         
       
        <Drawer
          variant="permanent"
          open={top}
          sx={{ overflow: "hidden", background: "" }}
        >
          <Box sx={{ height: "64px", paddingLeft: top ? "16px" : "8px" }}>
            <RouterLink to="/app">
              <Logo top={top} />
            </RouterLink>
          </Box>
          {content}
        </Drawer>
      </Box>
      <Popover
        id={"user-info"}
        open={openUserInfo}
        anchorEl={anchorEl2}
        onClose={handleCloseUserInfo}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Paper
          sx={{
            marginTop: 0,
            padding: 3,
            right: 16,
          }}
        >
          {/* <Typography fontWeight='bold' >User Profile</Typography> */}
          <Box alignItems="center" display="flex" flexDirection="row" py={2}>
            <Avatar
              sx={{ width: 72, height: 72, background: "#0DC7FA" }}
              src=""
            >
              A
            </Avatar>
            <Box ml={2}>
              <Typography
                className={classes.name}
                variant="h6"
                fontWeight="bold"
              >
                {user.name}
              </Typography>

              <Box mt={1} display="flex" alignItems="center">
                <MailOutlineIcon sx={{ fontSize: 16 }} />
                <Typography variant="body1" ml={0.5}>
                  {user.email}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box mt={2}>
            <Button variant="contained" fullWidth color="secondary">
              LogOut
            </Button>
          </Box>
        </Paper>
      </Popover>
    </>
  );
};

export default NavBar;
