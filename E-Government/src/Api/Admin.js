import axios from "axios";


export const getEmp = async()=>{
    try {
     return await axios.get(`/api/admin/getemp`)
    } catch (error) {
        console.log(error.error)
    }
} 