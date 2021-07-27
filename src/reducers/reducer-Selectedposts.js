import {SELECT_POST} from '../actions/types'

export default function (state=null,action) {

    //meken check kranne mna action ekada sidu kri
    switch(action.type){
        case SELECT_POST:
            return action.payload;
            break;
    }
    return state;
  }