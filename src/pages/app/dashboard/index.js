import { Alert, Snackbar } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addGame } from "../../../api/api";
import { getAllGames } from "../../../redux/actions/game.action";
import GameForm from "./GameForm";
import GameScreen from "./GameScreen";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const gameState = useSelector((state) => state.game);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentScreen, setCurrentScreen] = useState(0);
  const [loading, setLoading] = useState("");
  const [min, setMin] = useState("");
  const [sec, setSec] = useState("");
  const [value, setValue] = useState("");
  const [editGame, setEditGame] = useState({
    isEditing: false,
    editItem: null,
  });
  const [snackBar, setSnackBar] = useState({
    open: false,
    severity: "success",
    message: "",
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const onChangeMin = (e) => {
    setMin(e.target.value);
  };
  const onChangeSec = (e) => {
    setSec(e.target.value);
  };
  const onChangeValue = (e) => {
    setValue(e.target.value);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(() => {
    dispatch(getAllGames());
    //console.log('games', state.games)
  }, [dispatch]);

  const onClickAddNew = () => {
    console.log("add button clicked ")
    setEditGame({ isEditing: false, editItem: null });
    onDiscard();
    setCurrentScreen(1);
    console.log("edit game from onclicknew", editGame);
  };
  const onClickBack = () => {
    onDiscard();
    setCurrentScreen(0);
  };
  const onClickViewBtn = (editGameData) => {
    setEditGame({ isEditing: false, editItem: editGameData });
    navigate(`/games/${editGameData.game_id}`);
  };
  const onClickEditBtn = (editGameData) => {
    setEditGame({ isEditing: true, editItem: editGameData });
    setCurrentScreen(1);
  };
  const onClickDeleteBtn = (id) => {
    
  };
  const onOpenEditGame = useCallback((item) => {
    setMin(item.game_name);
    setSec(item.game_email);
    setValue(item.game_number);
  }, []);

  const onDiscard = () => {
    setMin("");
    setSec("");
    setValue("");
  };
  const onValidate = () => {
    if (min === "") {
      setSnackBar({
        open: true,
        severity: "error",
        message: "Minutes field can not be empty",
      });
    } else if (sec === "") {
      setSnackBar({
        open: true,
        severity: "error",
        message: "Seconds field can not be empty",
      });
    } 
     else if (value === "") {
      setSnackBar({
        open: true,
        severity: "error",
        message: "value can not be empty",
      });
    }
     else {
      return true;
    }
  };
  const onSubmit = async () => {
    console.log("onSubmit called", onValidate());
    if (onValidate()) {
      const data = {
        min, sec, value
      };
      console.log("add game data", data);
      try {
        setLoading(true);
        const res = await addGame(data);
        console.log("Add game res", res?.data);
        if (res?.data) {
          setLoading(false);
          setSnackBar({
            open: true,
            severity: "success",
            message: "Game Data added successfully",
          });
          dispatch(getAllGames());
          setTimeout(() => onClickBack(), 1000);
        }
      } catch (error) {
        console.log("error adding game", error);
        setLoading(false);
        setSnackBar({
          open: true,
          severity: "error",
          message: error.message ? error.message : "Something went wrong",
        });
      }
    }
  };
  const onUpdate = async (id) => {
    if (onValidate()) {

       }
  };
  return (
    <>
      {currentScreen === 0 && (
        <GameScreen
          page={page}
          rowsPerPage={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          onClickEditBtn={onClickEditBtn}
          onClickAddGameBtn={onClickAddNew}
          editGame={editGame}
          setEditGame={setEditGame}
          setCurrentScreen={setCurrentScreen}
          onClickViewBtn={onClickViewBtn}
          onClickDeleteBtn={onClickDeleteBtn}
          gameState={gameState}
        />
      )}
      {currentScreen === 1 && (
        <GameForm
          onClickBack={onClickBack}
          onSubmit={onSubmit}
          onUpdate={onUpdate}
          onDiscard={onDiscard}
          onChangeMin={onChangeMin}
          onChangeSec={onChangeSec}
          onChangeValue={onChangeValue}
          onOpenEditGame={onOpenEditGame}
          min={min}
          sec={sec}
          value={value}
          editGame={editGame}
          loading={loading}
        />
      )}

      <Snackbar
        open={snackBar.open}
        autoHideDuration={10000}
        onClose={() => {
          setSnackBar({ ...snackBar, open: false });
        }}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
      >
        <Alert
          severity={snackBar.severity}
          onClose={() => {
            setSnackBar({ ...snackBar, open: false });
          }}
        >
          {snackBar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Dashboard;
