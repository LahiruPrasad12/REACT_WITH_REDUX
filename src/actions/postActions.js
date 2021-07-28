import React from 'react'
import {BUTTON_CLICK} from './types'
import {SELECT_POST} from './types'
import axios from 'axios'

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
} from './types';

const url = 'http://localhost:5000/Travel_Agency/Retrieve';


export const fetchPosts=()=>{
    let isLoading = true;
    return (dispatch)=>{
        dispatch(fetchPostLoading(isLoading));
             axios.get(url).then((res)=>{
                isLoading = false;

                dispatch(fetchPostLoading(isLoading));
                dispatch(fetchPostSuccess(res.data));
                
            // const data = normalizeResponse(res.data)
        }).catch((err)=>{
            console.log(err);
            isLoading=false;
            dispatch(fetchPostLoading(isLoading));
        })
    }
}


//these data will reaturn to reducers


//this function run when application's data is loading
export const fetchPostLoading = (data)=>{
    return {
        type:FETCH_BOOK_LOADING,
        payload:data,
    };
}

//this function run when application's data is loaded
export const fetchPostSuccess = (data)=>{
    return {
        type:FETCH_BOOK_SUCCESS,
        payload:data,
    };
}



//select one data
export const selectPost=(post)=>{
    return{
        type:SELECT_POST,
        payload:post
    }
}






// const normalizeResponse = (data) =>{
//     const arr = data.map(item=>{
//         const keys = Object.keys(item)

//         keys.forEach(k=>{
//             item[k.toLocaleUpperCase()] = item[k];
//             delete item[keys]
//         });
//         return item;
//     });
//     return arr;
// }











// export const fetchPosts=()=> {
//     return {
//         type:BUTTON_CLICK,
//         payload :[
//             {
//                 userId:1,
//                 name:'lahiru',
//                 title:'software engineer'
//             },
//             {
//                 userId:2,
//                 name:'sadun',
//                 title:'network engineer'
//             },
//             {
//                 userId:3,
//                 name:'hashen',
//                 title:'cyber security engineer'
//             },
//             {
//                 userId:4,
//                 name:'dilshan',
//                 title:'software engineer'
//             },
//             {
//                 userId:5,
//                 name:'rameesh',
//                 title:'software engineer'
//             },
//             {
//                 userId:6,
//                 name:'vishud',
//                 title:'software engineer'
//             },
//             {
//                 userId:7,
//                 name:'lahiru',
//                 title:'software engineer'
//             }
//         ]
//     }
       
// }
