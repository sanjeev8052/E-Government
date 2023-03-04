import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const  Loader=()=> {
  return (
    <Box sx={{ display: 'flex', justifyContent:"center", }}>
      <CircularProgress sx={{alignContent:"center"}} />
    </Box>
  );
}

export default Loader