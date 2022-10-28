import { Box, Typography } from "@mui/material";

import React from "react";

const Footer = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      px={2}
      pt={2}
      pb={1.5}
      sx={{ width: "100%", position: "fixed", bottom: 0, background: "#fff",borderTop:'1px solid #d8dbe0' }}
    >
      <Typography>© 2022 Lucky Numbers.</Typography>
    </Box>
  );
};

export default Footer;
