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
    TablePagination,
    Typography,
 } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

const GameScreen = ({
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    onClickAddGameBtn,
    editGame,
    setEditGame,
    setCurrentScreen,
    onClickDeleteBtn,
    userState,
}) => {
 
  return (
    <Card variant="outlined">
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
            <Divider/>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={userState.usersList.users.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
          </Paper>
        </CardContent>
      
    </Card>
  );
};

export default GameScreen;
