import React from 'react'
import {BUTTON_CLICK} from './types'
import {SELECT_POST} from './types'
import axios from 'axios'


export const fetchPosts=()=>(dispatch)=>{
        axios.get("http://localhost:5000/Travel_Agency/Retrieve").then((res)=>{
            dispatch({
                type : BUTTON_CLICK,
                payload: res.data
            })
        })
    
}

export const selectPost=(post)=>{
    return{
        type:SELECT_POST,
        payload:post
    }
}











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
