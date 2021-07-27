import React, { Component } from 'react';
import {fetchPosts} from '../actions/postActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'


// class ButtonComponent extends Component {
//     render(){
//         return (
//             <div>
//                <button onClick={()=>{
//                    this.props.fetchPosts()
//                }}>Click Me</button>
//             </div>
//         )
//     }
   
// }

// function matctDispatchToProps(dispatch){
//     return bindActionCreators({fetchPosts: fetchPosts},dispatch)
// }

// export default connect(null,matctDispatchToProps)(ButtonComponent)


// import React from 'react'

function ButtonComponent(props) {
    return (
        <div>
             <button onClick={()=>{
                   props.fetchPosts();
               }}>Click Me</button>
            
        </div>
    )
}

function matctDispatchToProps(dispatch){
    return bindActionCreators({fetchPosts: fetchPosts},dispatch)
}

export default connect(null,matctDispatchToProps)(ButtonComponent)
