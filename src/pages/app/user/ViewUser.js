import { Box, Card, CardContent, Divider, IconButton, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getUserDataById } from '../../../redux/actions/user.action'
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { ListSkeletonLoader } from '../../../components/loader/ListSkeletonLoader'

const ViewUser = () => {
    const navigate = useNavigate()
  const dispatch = useDispatch()
  let { userId } = useParams()
  const state = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(getUserDataById(userId))
  }, [dispatch,userId])
  return (
    <Box>
         <Card variant="outlined">
         <Box
          display="flex"
          alignItems="center"
          sx={{ background: "#00001508" }}
        >
          <IconButton  onClick={() => navigate(`/users`)} size="large">
            <KeyboardBackspaceIcon color="action" />
          </IconButton>
          <Typography ml={1} variant="h6">
          User Details
          </Typography>
        </Box>
        <Divider />
        <CardContent>
        {state.singleUserData.loading ? (
          ListSkeletonLoader()
        ) : (
          <>
            <Typography>{state.singleUserData.user[0]?.user_name}</Typography>
            <Typography>{state.singleUserData.user[0]?.user_email}</Typography>
            <Typography>{state.singleUserData.user[0]?.user_number}</Typography>
            <Typography>{state.singleUserData.user[0]?.role_name}</Typography>
          </>
        )}
        </CardContent>
         </Card>
    </Box>
  )
}

export default ViewUser