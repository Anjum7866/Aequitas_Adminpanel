import { Alert, Snackbar } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../../api/api";
import { getAllUsers } from "../../../redux/actions/user.action";
import UserForm from "./UserForm";
import UserScreen from "./UserScreen";

const User = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentScreen, setCurrentScreen] = useState(0);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [loading, setLoading] = useState("");
  const [role, setRole] = useState("");
  const [editUser, setEditUser] = useState({
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

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(() => {
    dispatch(getAllUsers());
    //console.log('users', state.users)
  }, [dispatch]);

  const onClickAddNew = () => {
    setEditUser({ isEditing: false, editItem: null });
    onDiscard();
    setCurrentScreen(1);
    console.log("edit user from onclicknew", editUser);
  };
  const onClickBack = () => {
    onDiscard();
    setCurrentScreen(0);
  };
  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangeMobileNo = (e) => {
    setMobileNo(e.target.value);
  };
  // const onChangePassword = (e) => {
  //   setPassword(e.target.value)
  // }
  const onChangeRole = (e) => {
    console.log("role", e.target.value);
    setRole(e.target.value);
  };
  const onClickViewBtn = (editUserData) => {
    //console.log('data coming for editing', editUserData)
    setEditUser({ isEditing: false, editItem: editUserData });
    //setCurrentScreen(2)
    navigate(`/users/${editUserData.user_id}`);
  };
  const onClickEditBtn = (editUserData) => {
    //console.log('data coming for editing', editUserData)
    setEditUser({ isEditing: true, editItem: editUserData });
    setCurrentScreen(1);
  };
  const onClickDeleteBtn = (id) => {
    //console.log('data coming for editing', editUserData)
    // userData.splice(id, 1)
    // setSnackBar({
    //   open: true,
    //  severity: 'success',
    //   message: 'user deleted successfully',
    // })
  };
  const onOpenEditUser = useCallback((item) => {
    setUserName(item.user_name);
    setEmail(item.user_email);
    setMobileNo(item.user_number);
    //setPassword(editUser.editItem.password)
    setRole(item.role_name);
  }, []);

  // const onOpenEditUser = () => {

  // };
  const onDiscard = () => {
    setUserName("");
    setEmail("");
    setMobileNo("");
    // setPassword('')
    setRole("");
  };
  const onValidate = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (userName === "") {
      setSnackBar({
        open: true,
        severity: "error",
        message: "User name can not be empty",
      });
    } else if (email === "") {
      setSnackBar({
        open: true,
        severity: "error",
        message: "Email name can not be empty",
      });
    } else if (emailRegex.test(email) === false) {
      setSnackBar({
        open: true,
        severity: "error",
        message: "Invalid Email",
      });
    } else if (mobileNo === "") {
      setSnackBar({
        open: true,
        severity: "error",
        message: "mobile number can not be empty",
      });
    }
    //  else if (password === '') {
    //   setSnackBar({
    //     open: true,
    //    severity: 'error',
    //     message: 'Password can not be empty',
    //   })
    // }
    else if (role.length === 0) {
      setSnackBar({
        open: true,
        severity: "error",
        message: "Roles can not be empty",
      });
    } else {
      return true;
    }
  };
  const onSubmit = async () => {
    console.log("onSubmit called", onValidate());
    if (onValidate()) {
      const data = {
        user_id:
          userState.usersList.users[userState.usersList.users.length - 1]
            .user_id + 1, //for api call user_id is not required
        user_name: userName,
        user_number: mobileNo,
        user_email: email,
        // password: password,
        role_name: role,
      };
      console.log("add user data", data);
      //userData.push(data);
      try {
        setLoading(true);
        const res = await addUser(data);
        console.log("Add user res", res?.data);
        if (res?.data) {
          setLoading(false);
          setSnackBar({
            open: true,
            severity: "success",
            message: "User added successfully",
          });
          dispatch(getAllUsers());
          setTimeout(() => onClickBack(), 1000);
        }
      } catch (error) {
        console.log("error adding user", error);
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
      // const data = {
      //   user_id: id,
      //   user_name: userName,
      //   user_number: mobileNo,
      //   user_email: email,
      //   // password: password,
      //   role_name: role,
      // }; //this data will required for api-call
      // for (const obj of userData) {
      //   if (obj.id === id) {
      //     obj.user_id = id
      //     obj.user_name = userName
      //     obj.user_number = mobileNo
      //     obj.user_email = email
      //     obj.role_name = role
      //     break
      //   }
      // }
      // console.log('update user payload', id, data)
    }
  };
  return (
    <>
      {currentScreen === 0 && (
        <UserScreen
          page={page}
          rowsPerPage={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          onClickEditBtn={onClickEditBtn}
          onClickAddUserBtn={onClickAddNew}
          editUser={editUser}
          setEditUser={setEditUser}
          setCurrentScreen={setCurrentScreen}
          onClickViewBtn={onClickViewBtn}
          onClickDeleteBtn={onClickDeleteBtn}
          userState={userState}
        />
      )}
      {currentScreen === 1 && (
        <UserForm
          onClickBack={onClickBack}
          onSubmit={onSubmit}
          onUpdate={onUpdate}
          onDiscard={onDiscard}
          onChangeUserName={onChangeUserName}
          onChangeEmail={onChangeEmail}
          onChangeMobileNo={onChangeMobileNo}
          //onChangePassword={onChangePassword}
          onChangeRole={onChangeRole}
          onOpenEditUser={onOpenEditUser}
          userName={userName}
          email={email}
          mobileNo={mobileNo}
          //password={password}
          role={role}
          editUser={editUser}
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

export default User;
