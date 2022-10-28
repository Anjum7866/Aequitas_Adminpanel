import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import CircularLoader from "../../../components/loader/CircularLoader";

const UserForm = ({
  onClickBack,
  onSubmit,
  onUpdate,
  onDiscard,
  onChangeUserName,
  onChangeEmail,
  onChangeMobileNo,
  //onChangePassword={onChangePassword}
  onChangeRole,
  onOpenEditUser,
  userName,
  email,
  mobileNo,
  //password={password}
  role,
  editUser,
  loading
}) => {
  useEffect(() => {
    if (editUser.isEditing) {
      onOpenEditUser(editUser.editItem);
    }
  }, [editUser?.isEditing,editUser.editItem,onOpenEditUser]);
  return (
    <Box>
      {loading && <CircularLoader />}
      <Card variant="outlined">
        <Box
          display="flex"
          alignItems="center"
          sx={{ background: "#00001508" }}
        >
          <IconButton onClick={onClickBack} size="large">
            <KeyboardBackspaceIcon color="action" />
          </IconButton>
          <Typography ml={1} variant="h6">
            {editUser.isEditing ? "Edit User" : "Add User"}
          </Typography>
        </Box>
        <Divider />
        <CardContent p={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                //margin="normal"
                required
                fullWidth
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                value={userName}
                onChange={onChangeUserName}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                // margin="normal"
                required
                fullWidth
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={onChangeEmail}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                //margin="normal"
                required
                fullWidth
                label="Mobile No"
                name="mobileNo"
                autoComplete="mobileNo"
                autoFocus
                value={mobileNo}
                onChange={onChangeMobileNo}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Role"
                  value={role}
                  onChange={onChangeRole}
                >
                  <MenuItem value="user">User</MenuItem>
                  <MenuItem value="admin">Admin</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        {/* <Divider/> */}
        <Box
          p={2}
          display="flex"
          justifyContent="flex-end"
          // sx={{ background: "#00001508" }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={editUser.isEditing ? onUpdate : onSubmit}
          >
            Submit
          </Button>
        </Box>
        <Divider />
      </Card>
    </Box>
  );
};

export default UserForm;
