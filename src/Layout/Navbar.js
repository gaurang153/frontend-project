import { AppBar, Toolbar, Stack, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Navbar(){

  const navigate = useNavigate();

  return(
    <>
    <AppBar position='relative' style={{zIndex : 1}}>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{flexGrow : 1}}>
          Website
        </Typography>
        
        <Stack direction='row' spacing={2} >
        <Button color='inherit' onClick={()=> navigate("/")}>Home</Button>
          <Button color='inherit' onClick={()=> navigate("/login/customer")}>Login</Button>
          <Button color='inherit'>About US</Button>
          <Button color='inherit'>Hire Service</Button>
        </Stack>

      </Toolbar>
    </AppBar>
    </>
  )
}

export default Navbar;