import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { Box, ListItem, Typography } from "@mui/material";
import { useStyles } from "./navbar.styles";
//import { useStyles } from "./navbar.styles";


const NavItem = ({
  className,
  href,
  icon: Icon,
  title,
  category,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <ListItem
      className={clsx(classes.item, className)}
      disableGutters
      sx={{ margin: "4px 0" }}
      {...rest}
    >
      <NavLink
        to={href}
        className={({ isActive }) =>
          isActive ? classes.active : classes.button
        }
      >
        <Box display='flex' alignItems='center' alignContent='center'>
        {Icon && <Icon className={classes.icon} fontSize="small" />}
        <Typography color="#fff" className={classes.title}>{title}</Typography>
        </Box>
      </NavLink>
    </ListItem>
  );
};

export default NavItem;
