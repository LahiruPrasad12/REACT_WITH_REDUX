import React from 'react'
import {BUTTON_CLICK} from './types'

export const fetchPosts=()=> {
    return {
        type:BUTTON_CLICK,
        payload :[
            {
                userId:1,
                name:'lahiru',
                title:'software engineer'
            },
            {
                userId:2,
                name:'sadun',
                title:'software engineer'
            },
            {
                userId:3,
                name:'hashen',
                title:'software engineer'
            },
            {
                userId:4,
                name:'dilshan',
                title:'software engineer'
            },
            {
                userId:5,
                name:'rameesh',
                title:'software engineer'
            },
            {
                userId:6,
                name:'vishud',
                title:'software engineer'
            },
            {
                userId:1,
                name:'lahiru',
                title:'software engineer'
            }
        ]
    }
       
}
