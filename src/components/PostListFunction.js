import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {selectPost} from '../actions/postActions'

//meken view list eka function base kara ata
function PostListFunction(props) {

    function createList(){
        return props.allPosts.map((post)=>{
            return <li key={post.contract_id} onClick={()=>props.selectPost(post)}> {post.name} <br></br>{post.mail_Address}</li>
        })
    }

    if(!props.allPosts){
        return(<h3>First click button</h3>)
    }

    return (
        <ul>
            {createList()}
        </ul>
    )
}

function mapStateToProps(state){
    return {
        allPosts : state.allPosts
    }
}

//meka use krnne eka post ekak details retrivev kara ganimataya
function matctDispatchToProps(dispatch){
    return bindActionCreators({selectPost: selectPost},dispatch)
}

export default connect(mapStateToProps,matctDispatchToProps)(PostListFunction)
