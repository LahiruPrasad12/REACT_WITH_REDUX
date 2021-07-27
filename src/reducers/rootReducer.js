import { combineReducers } from 'redux';
import AllPostReducer from './reducer-Allposts';
import selctedPost from './reducer-Selectedposts'

const rootReducer = combineReducers({
    //mema "allposts" namin thama aray eka hadanne
    allPosts: AllPostReducer,
    selctedPost: selctedPost
})

export default rootReducer;