import React from 'react';
import {fetchPosts} from '../actions/postActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'

function index() {
    return (
        <div>
           <button onClick={()=>{
               this.props.fetchPosts()
           }}>Click Me</button>
        </div>
    )
}

function matctDispatchToProps(dispatch){
    return bindActionCreators({fetchPosts: fetchPosts},dispatch)
}

export default connect(null,matctDispatchToProps)(index)