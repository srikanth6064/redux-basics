import {combineReducers} from  'redux';
import {counterReducer,asyncReducer} from './userReducer'

const rootReducer = combineReducers({
      counter:counterReducer,
      user : asyncReducer
})

export default rootReducer


