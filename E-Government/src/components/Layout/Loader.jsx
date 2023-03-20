import * as React from 'react';
import Box from '@mui/material/Box';
import spiner2 from '../Images/running-man.gif'
import { makeStyles,  } from '@material-ui/core';

 const useStyle =  makeStyles({
    box:{
      // height:"100vh",
      // display:"grid",
      // placeItems:"center",
      // backgroundColor:'white'
      margin:"120px auto",
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
      <img className='styles.img' src={spiner2} alt="" />
    </Box>
  );
}

export default Loader