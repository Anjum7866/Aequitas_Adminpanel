import { 
    Box,
    Button,
    Card,
    CardContent,
    Divider,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
 } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";


const GameDashboard = ({
  page,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
}) => {
 
  return (
    <Card variant="outlined">
      {/* <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ background: "#2eb85c" }}>
              <CardContent>
                <Typography color='#fff' variant="h5">1000</Typography>
                <Typography color='#fff' my={1} variant="body1">Total Players</Typography>
                <Typography color='#fff' my={1} variant="body1">Last 365 Days</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ background: "#39f" }}>
              <CardContent>
                <Typography color='#fff' variant="h5">1000</Typography>
                <Typography color='#fff' my={1} variant="body1">Total Players</Typography>
               
                <Typography color='#fff' my={1} variant="body1">Last 365 Days</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ background: "#ffc107" }}>
              <CardContent>
                <Typography color='#fff' variant="h5">1000</Typography>
                <Typography color='#fff' my={1} variant="body1">Total Players</Typography>
               
                <Typography color='#fff' my={1} variant="body1">Last 365 Days</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ background: "#321fdb" }}>
              <CardContent>
                <Typography color='#fff' variant="h5">1000</Typography>
                <Typography color='#fff' my={1} variant="body1">Total Players</Typography>
               
                <Typography color='#fff' my={1} variant="body1">Last 365 Days</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent> */}
      <CardContent>
      <Box p={2} display="flex" alignItems="center">
        <Typography color="#212121" variant="h6" mr={2}>
          Game Details
        </Typography>
        <Button color="primary" variant="contained" startIcon={<AddIcon />} >
          Add Game Details
        </Button>
      </Box>
      <Divider/>
          <Paper variant="outlined">
            <TableContainer style={{ maxHeight: "400px" }} className="scrollbar" >
              <Table stickyHeader aria-label="sticky table" size="small" >
                <TableHead>
                  <TableRow style={{ fontWeight: "bold" }}>
                    <TableCell align="left">Minutes</TableCell>
                    <TableCell align="left">Seconds</TableCell>
                    <TableCell align="left">Value</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  
                      <React.Fragment>
                        <TableRow sx={{ height: "50px" }}  hover>
                          <TableCell align="left">3</TableCell>
                          <TableCell align="left">50</TableCell>
                          <TableCell align="left">9</TableCell>
                        </TableRow>
                        <TableRow sx={{ height: "50px" }}  hover>
                          <TableCell align="left">4</TableCell>
                          <TableCell align="left">50</TableCell>
                          <TableCell align="left">40</TableCell>
                        </TableRow>
                        <TableRow sx={{ height: "50px" }}  hover>
                          <TableCell align="left">3</TableCell>
                          <TableCell align="left">30</TableCell>
                          <TableCell align="left">25</TableCell>
                        </TableRow>
                      </React.Fragment>
                    
                </TableBody>
              </Table>
            </TableContainer>
           
          </Paper>
        </CardContent>
      
    </Card>
  );
};

export default GameDashboard;
