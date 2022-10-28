import { CircularProgress } from '@mui/material'
import React from 'react'

const CircularLoader = () => {
  return (
    <CircularProgress style={{position:'absolute' ,top:'50%',left:'50%'}} />
  )
}

export default CircularLoader