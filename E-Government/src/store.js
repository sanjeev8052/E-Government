import {configureStore} from '@reduxjs/toolkit'
import { AdminReducer } from './Reducer/AdminLogin'
import { userServicesReducer } from './Reducer/Services'
import { userReducer } from './Reducer/User'


const store = configureStore({
    reducer:{ 
        user: userReducer,
        admin:AdminReducer,
        services: userServicesReducer
    }
})

export default store 