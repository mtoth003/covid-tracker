import { Card, CardContent, Typography } from '@mui/material'
import "./InfoBox.css"
import React from 'react'

function InfoBox({active, title, cases, total, isRed, ...props}) {
  return (
    <Card className={`infoBox ${active && 'infoBox--selected'} ${isRed && 'infoBox--red'}`} onClick={props.onClick}>
      <CardContent>
        <Typography className='infoBox__title' color="textSecondary">
          {title}
        </Typography>
        <h2 className={`infoBox__cases ${!isRed && 'infoBox__cases--green'}`}>{cases}</h2>
        <Typography className='infoBox__total' color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  )
}

export default InfoBox