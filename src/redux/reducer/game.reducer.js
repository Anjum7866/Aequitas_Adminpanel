import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  gamesList: {
    games: [],
    loading: false,
  },
  singleGameData: {
    game: [],
    loading: false,
  },
}
const gameStateSlice = createSlice({
  name: 'gameList',
  initialState,
  reducers: {
    loadingGameList: (state) => {
      state.gamesList.loading = true
    },
    setGameList: (state, action) => {
      state.gamesList.games = action.payload
      state.gamesList.loading = false
    },
    loadingError: (state) => {
      state.gamesList.loading = false
    },
    loadingSingleGameData: (state) => {
      state.singleGameData.loading = true
    },
    setSingleGameData: (state, action) => {
      state.singleGameData.game = action.payload
      state.singleGameData.loading = false
    },
    lodingSingleGameDataError: (state) => {
      state.singleGameData.loading = false
    },
  },
})

export const {
  setGameList,
  loadingGameList,
  loadingError,
  loadingSingleGameData,
  setSingleGameData,
  lodingSingleGameDataError,
} = gameStateSlice.actions

export default gameStateSlice.reducer
