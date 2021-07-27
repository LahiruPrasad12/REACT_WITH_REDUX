import { combineReducers } from "redux";
import AllPostReducer from './reducer-Allposts';

const rootReducer = combineReducers({
    //mema "all-post" namin thama aray eka hadanne
    allPosts : AllPostReducer
})

export default rootReducer;