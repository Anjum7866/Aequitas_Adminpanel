import { Card, CardContent, CardHeader, Grid, LinearProgress, Typography } from "@mui/material";
import React from "react";

const Dashboard = () => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ background: "#2eb85c" }}>
              <CardContent>
                <Typography color='#fff' variant="h5">1000</Typography>
                <Typography color='#fff' my={1} variant="body1">Total Players</Typography>
                {/* <LinearProgress /> */}
                <Typography color='#fff' my={1} variant="body1">Last 365 Days</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ background: "#39f" }}>
              <CardContent>
                <Typography color='#fff' variant="h5">1000</Typography>
                <Typography color='#fff' my={1} variant="body1">Total Players</Typography>
                {/* <LinearProgress /> */}
                <Typography color='#fff' my={1} variant="body1">Last 365 Days</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ background: "#ffc107" }}>
              <CardContent>
                <Typography color='#fff' variant="h5">1000</Typography>
                <Typography color='#fff' my={1} variant="body1">Total Players</Typography>
                {/* <LinearProgress /> */}
                <Typography color='#fff' my={1} variant="body1">Last 365 Days</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ background: "#321fdb" }}>
              <CardContent>
                <Typography color='#fff' variant="h5">1000</Typography>
                <Typography color='#fff' my={1} variant="body1">Total Players</Typography>
                {/* <LinearProgress /> */}
                <Typography color='#fff' my={1} variant="body1">Last 365 Days</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Dashboard;
