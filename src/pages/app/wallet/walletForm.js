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
  
  const WalletForm = ({
    onClickBack,
    onSubmit,
    onUpdate,
    onDiscard,
    onChangeWalletAmount,
    onChangeWalletDetails,
    editWallet,
    walletAmount,
    walletDetails,
   
    loading,
  }) => {
    // useEffect(() => {
    //   if (editUser.isEditing) {
    //     onOpenEditUser(editUser.editItem);
    //   }
    // }, [editUser?.isEditing,editUser.editItem,onOpenEditUser]);
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
              {editWallet.isEditing ? "Edit Wallet" : "Add Wallet"}
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
                  value={walletAmount}
                  onChange={onChangeWalletAmount}
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
                  value={walletDetails}
                  onChange={onChangeWalletDetails}
                />
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
              onClick={editWallet.isEditing ? onUpdate : onSubmit}
            >
              Submit
            </Button>
          </Box>
          <Divider />
        </Card>
      </Box>
    );
  };
  
  export default WalletForm;
  