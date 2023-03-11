import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField'
import {Button} from '@material-ui/core'
import axios from 'axios';

export default function BasicSelect() {
  const [image, setImage] = React.useState('');

  const handleImage = (e)=>{
    const file = e.target.files[0];
   const Reader = new FileReader();

   Reader.onload=()=>{
    if(Reader.readyState === 2)
    setImage(Reader.result)
   }
 
   Reader.readAsDataURL(file)
   
  }

  const handleSubmit = (e)=>{
   
    axios.post("http://localhost:5000/api/upload",image)
  }

  return (
   <React.Fragment style={{display:"flex"}}>
      <div style={{display:"grid",marginTop:"10rem", placeItems:"center"}}>
        <form  onSubmit={handleSubmit}>
        <TextField
          id=""
          label=""
         type="file"
         onChange={handleImage}
         
        />
        <Button variant="text" type='submit'  color="default">
          Upload
        </Button>

        </form>
      </div>
        {image && <img src={image}  style={{width:"30rem"}}/> }
   </React.Fragment>
  );
}