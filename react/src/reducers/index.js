import { combineReducers } from 'redux';
import userReducer from './userReducer';
import albumReducer from './albumReducer';
import photosReducer from './photosReducer';

export default combineReducers({
   user : userReducer,
   album : albumReducer,
   photos : photosReducer
})
