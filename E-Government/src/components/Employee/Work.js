import React from 'react'
import { useEffect } from 'react'
import EmployeeTopbar from '../Global/EmployeeTopbar'

const Work = () => {
  useEffect(() => {
   getEmpDetails();
  }, [])

  const getEmpDetails = ()=>{
      
  }
  
  return (
    <>
    <EmployeeTopbar/>

    <div>Work</div>
    </>
  )
}

export default Work