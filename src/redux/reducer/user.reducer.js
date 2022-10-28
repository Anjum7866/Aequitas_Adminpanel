import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  usersList: {
    users: [],
    loading: false,
  },
  singleUserData: {
    user: [],
    loading: false,
  },
}
const userStateSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    loadingUserList: (state) => {
      state.usersList.loading = true
    },
    setUserList: (state, action) => {
      state.usersList.users = action.payload
      state.usersList.loading = false
    },
    loadingError: (state) => {
      state.usersList.loading = false
    },
    loadingSingleUserData: (state) => {
      state.singleUserData.loading = true
    },
    setSingleUserData: (state, action) => {
      state.singleUserData.user = action.payload
      state.singleUserData.loading = false
    },
    lodingSingleUserDataError: (state) => {
      state.singleUserData.loading = false
    },
  },
})

export const {
  setUserList,
  loadingUserList,
  loadingError,
  loadingSingleUserData,
  setSingleUserData,
  lodingSingleUserDataError,
} = userStateSlice.actions

export default userStateSlice.reducer
