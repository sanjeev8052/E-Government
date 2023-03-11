import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import spiner from '../Images/run.gif'
import spiner2 from '../Images/running-man.gif'
import { makeStyles, Typography } from '@material-ui/core';

 const useStyle =  makeStyles({
    box:{
      // height:"100vh",
      // width:"100vw",
      display:"grid",
      placeItems:"center",
      backgroundColor:'white'
    }
 })

const  Loader=()=> {

  const styles = useStyle();
  return (
    <Box className={styles.box}>
      <img src={spiner2} alt="" />
    </Box>
  );
}

export default Loader