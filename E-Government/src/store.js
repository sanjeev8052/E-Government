import {configureStore} from '@reduxjs/toolkit'
import { AdminReducer } from './Reducer/AdminLogin'
import { Employee } from './Reducer/Employee'
import { userServicesReducer } from './Reducer/Services'
import { userReducer } from './Reducer/User'


const store = configureStore({
    reducer:{ 
        user: userReducer,
        admin:AdminReducer,
        services: userServicesReducer,
        employee: Employee
    }
})

export default store 