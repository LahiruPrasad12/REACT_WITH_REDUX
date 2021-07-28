import React from 'react'
import {BUTTON_CLICK} from '../actions/types'
import{
  ADD_BOOK_ERROR,
  ADD_BOOK_LOADING,
  ADD_BOOK_SUCCESS,
  EDIT_BOOK_ERROR,
  EDIT_BOOK_LOADING,
  EDIT_BOOK_SUCCESS,
  DELETE_BOOK_ERROR,
  DELETE_BOOK_LOADING,
  DELETE_BOOK_SUCCESS,
  FETCH_BOOK_ERROR,
  FETCH_BOOK_LOADING,
  FETCH_BOOK_SUCCESS
} from '../actions/types';

const defaultState = {
  posts:[],
  error:null,
  isLoading:false
}

export default function (state=defaultState,action) {

  //meken check kranne mna action ekada sidu kri
  switch(action.type){

      
      case FETCH_BOOK_SUCCESS:
          return{ ...state, posts:action.payload};

      case FETCH_BOOK_LOADING:
          return{...state, isLoading: action.payload}

       default:
          return state

  }
  // return state;
}
