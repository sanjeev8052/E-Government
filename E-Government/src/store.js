import {configureStore} from '@reduxjs/toolkit'
import { AdminReducer } from './Reducer/AdminLogin'
import { userReducer } from './Reducer/User'


const store = configureStore({
    reducer:{ 
        user: userReducer,
        admin:AdminReducer
    }
})

export default store 