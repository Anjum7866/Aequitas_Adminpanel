import {
    Box,
    Button,
    Card,
    CardContent,
    Divider,
    Grid,
    IconButton,
    TextField,
    Typography,
  } from "@mui/material";
  import React, { useEffect } from "react";
  import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
  import CircularLoader from "../../../components/loader/CircularLoader";
  
  const GameForm = ({
    onClickBack,
    onSubmit,
    onUpdate,
    onChangeMin,
    onChangeSec,
    onChangeValue,
    onOpenEditGame,
    min,
    sec,
    value,
    editGame,
    loading
  }) => {
    useEffect(() => {
      if (editGame.isEditing) {
        onOpenEditGame(editGame.editItem);
      }
    }, [editGame?.isEditing,editGame.editItem,onOpenEditGame]);
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
              {editGame.isEditing ? "Edit Game" : "Add Game"}
            </Typography>
          </Box>
          <Divider />
          <CardContent p={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  label="Minutes"
                  name="minutes"
                  autoComplete="name"
                  autoFocus
                  value={min}
                  onChange={onChangeMin}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  label="Seconds"
                  name="second"
                  autoComplete="seconds"
                  autoFocus
                  value={sec}
                  onChange={onChangeSec}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  //margin="normal"
                  required
                  fullWidth
                  label="Value"
                  name="value"
                  autoComplete="value"
                  autoFocus
                  value={value}
                  onChange={onChangeValue}
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
              onClick={editGame.isEditing ? onUpdate : onSubmit}
            >
              Submit
            </Button>
          </Box>
          <Divider />
        </Card>
      </Box>
    );
  };
  
  export default GameForm;
  