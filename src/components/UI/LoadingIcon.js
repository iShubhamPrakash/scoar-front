import React from 'react'
import { CircularProgress } from '@material-ui/core'

export default function LoadingIcon() {
  return (
    <div className="loading-icon-container">
      <CircularProgress/>
    </div>
  )
}
