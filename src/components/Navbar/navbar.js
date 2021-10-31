import React from 'react'
import { AppBar, Tab, Tabs, Typography, Toolbar } from '@mui/material'

const Navbar = () => {
  return (
    <>
    <AppBar>
      <ToolBar>
        <Typography> Jasmine </Typography>

        <Tabs>
          <Tab label='Home' />
        </Tabs>
        
      </ToolBar>
    </AppBar>
    </>
  )
}

export default Navbar