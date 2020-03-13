import {combineReducers} from  'redux';
import {counterReducer,asyncReducer} from './userReducer';
import authreducer from './auth';
import employeeList from './employeeList'

const rootReducer = combineReducers({
      counter:counterReducer,
      user : asyncReducer,
      auth:authreducer,
      employee:employeeList
})

export default rootReducer


