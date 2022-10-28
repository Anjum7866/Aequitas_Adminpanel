import {
    ListItem,
    ListItemText,
    Divider,
    Avatar,
    ListItemIcon,
  } from "@mui/material";
  import { Skeleton } from '@mui/material';
  import React from "react";
  
  export function ListSkeletonLoader() {
    return Array(4)
      .fill(0)
      .map((i, x) => (
        <React.Fragment key={`MedSkele${x}`}>
          <ListItem>
            <ListItemIcon>
              <Skeleton variant="circular">
                <Avatar />
              </Skeleton>
            </ListItemIcon>
            <ListItemText
              primary={<Skeleton />}
              secondary={<Skeleton width="80%" />}
            />
          </ListItem>
          <Divider variant="inset" />
        </React.Fragment>
      ));
  }
  