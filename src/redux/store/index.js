import {configureStore} from '@reduxjs/toolkit'
import mainReducers from '../reducers'

const store = configureStore({
    reducer : mainReducers
})

export default store