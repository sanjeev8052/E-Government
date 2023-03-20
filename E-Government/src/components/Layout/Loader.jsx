import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import spiner from '../Images/run.gif'
import spiner2 from '../Images/running-man.gif'
import { makeStyles, Typography } from '@material-ui/core';

 const useStyle =  makeStyles({
    box:{
      height:"100vh",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
     
    },
    
    img:{
    }
 })

const  Loader=()=> {

  const styles = useStyle();
  return (
    <Box className={styles.box}>
      <CircularProgress className={styles.box} />
    </Box>
  );
}

export default Loader