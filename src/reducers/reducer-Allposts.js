import React from 'react'
import {BUTTON_CLICK} from '../actions/types'
export default function (state=null,action) {

  //meken check kranne mna action ekada sidu kri
  switch(action.type){
      case BUTTON_CLICK:
          return action.payload;
          break;
  }
  return state;
}
