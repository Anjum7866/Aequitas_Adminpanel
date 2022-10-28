import { Breadcrumbs, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

const AppBreadcrumb = () => {
  const currentPath = useLocation().pathname;
  const path = currentPath
    .split("/")
    .filter((i) => i !== "")
    .toString();
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Typography color="text.primary" underline="hover">
        Home
      </Typography>
      <Typography color="text.primary" underline="hover">
        {path}
      </Typography>
    </Breadcrumbs>
  );
};

export default AppBreadcrumb;
