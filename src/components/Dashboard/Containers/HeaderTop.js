import React from 'react'
import { Card } from '@material-ui/core'

export default function HeaderTop({children,...rest}) {
  return (
    <Card className="headerTop" {...rest} >
      {children}
    </Card>
  )
}
