import React ,{useEffect} from 'react'
import Typography from '@mui/material/Typography'
import ViwePdf from './Global/ViwePdf'
import axios from 'axios'

const Temp = () => {
  const value1 = "hello"
  const value2 = "sanjeev"
  const formData = new FormData();
  formData.append('field1', value1);
  formData.append('field2', value2);

  const objectData = {
    field3: "value3",
    field4: "value4",
  };
useEffect(() => {
  formData.append('objectData', JSON.stringify(objectData)); 
  axios.post('/api/endpoint', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
   
}, []);

  return (
    <div>
      <Typography variant="h1"> temp </Typography>

    </div>
  )
}

export default Temp
