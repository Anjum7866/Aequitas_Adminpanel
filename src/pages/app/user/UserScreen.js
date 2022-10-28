import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
//import { userData } from "./user.service";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { ListSkeletonLoader } from "../../../components/loader/ListSkeletonLoader";
const UserScreen = ({
  page,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
  onClickEditBtn,
  onClickViewBtn,
  onClickAddUserBtn,
  editUser,
  setEditUser,
  setCurrentScreen,
  onClickDeleteBtn,
  userState,
}) => {
  const users = localStorage.getItem("luckyNumber_User");
  const user = JSON.parse(users);
  const isUser =
    user.user_email === "luckynumber.user@gmail.com" &&
    user.password === "user@123";
  return (
    <Card variant="outlined">
      <Box p={2} display="flex" alignItems="center">
        <Typography color="#212121" variant="h6" mr={2}>
          User Details
        </Typography>
        <Button color="primary" variant="contained" startIcon={<AddIcon />} onClick={onClickAddUserBtn}>
          Add User
        </Button>
      </Box>
      <Divider />
      <CardContent>
        <Box display="flex" mb={2}>
          <TextField
            type="search"
            //value={searchVideo}
            fullWidth
            variant="outlined"
            placeholder="Search user by name"
            size="small"
            onChange={(e) => {}}
            sx={{ marginRight: 1 }}
          />

          <Button color="primary" variant="contained">
            Search
          </Button>
        </Box>
        <Paper variant="outlined">
          {userState.usersList.loading ? (
            ListSkeletonLoader()
          ) : (
            <>
              <TableContainer
                style={{ maxHeight: "400px" }}
                className="scrollbar"
              >
                <Table stickyHeader aria-label="sticky table" size="small">
                  <TableHead>
                    <TableRow style={{ fontWeight: "bold" }}>
                      <TableCell align="left">Image</TableCell>
                      <TableCell align="left">Name</TableCell>
                      <TableCell align="left">Email</TableCell>
                      <TableCell align="left">Phone number</TableCell>
                      <TableCell align="left">Role</TableCell>
                      <TableCell align="center">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {userState.usersList.users.map((item, x) => {
                      return (
                        <React.Fragment key={x}>
                          <TableRow sx={{ height: "50px" }} hover>
                            <TableCell align="center">
                              <Avatar alt={item.user_name} src="" >
                              {item.user_name.split(' ')[0][0]}
                              </Avatar>
                            </TableCell>
                            <TableCell align="left">{item.user_name}</TableCell>

                            <TableCell align="left">
                              {item.user_email}
                            </TableCell>
                            <TableCell align="left">
                              {item.user_number}
                            </TableCell>
                            <TableCell align="left">{item.role_name}</TableCell>
                            <TableCell align="center">
                              <IconButton onClick={() => onClickViewBtn(item)}>
                                <FileOpenIcon  />
                              </IconButton>
                              <IconButton onClick={()=>onClickEditBtn(item)} disabled={isUser}>
                                <EditIcon />
                              </IconButton>
                              <IconButton disabled={isUser} onClick={()=>onClickDeleteBtn(item)}>
                                <DeleteIcon color="error"  />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        </React.Fragment>
                      );
                    })}
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
            </>
          )}
        </Paper>
      </CardContent>
    </Card>
  );
};

export default UserScreen;
