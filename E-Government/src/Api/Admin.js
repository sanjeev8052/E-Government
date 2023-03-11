import axios from "axios";


export const getEmp = async()=>{
    try {
     return await axios.get(`/api/admin/getemp`)
    } catch (error) {
        console.log(error.error)
    }
} 
export const getReqEmp = async()=>{
    try {
     return await axios.get(`/api/admin/gettempemp`)
    } catch (error) {
        console.log(error.error) 
    }
} 
export const confirmEmp = async(id)=>{
    try {
        return await axios.post(`/api/admin/employee/${id}`)
    } catch (error) {
        console.log(error.error) 
    }
} 