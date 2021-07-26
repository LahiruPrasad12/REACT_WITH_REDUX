import { combineReducers } from "redux";
import AllPostReducer from './reducer-Allposts';

const rootReducer = combineReducers({
    allPosts : AllPostReducer
})

export default rootReducer;