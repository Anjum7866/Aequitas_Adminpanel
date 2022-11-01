import { configureStore } from '@reduxjs/toolkit'
import NotificationReducer from '../reducer/NotificationReducer'
import userReducer from '../reducer/user.reducer'
import gameReducer from '../reducer/game.reducer'

export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    user: userReducer,
    game: gameReducer,
    notifications: NotificationReducer,
  },
})
