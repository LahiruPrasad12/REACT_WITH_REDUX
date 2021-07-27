import React from 'react'
import {connect} from 'react-redux'


//meken view list eka function base kara ata
function PostListFunction(props) {

    function createList(){
        return props.allPosts.map((post)=>{
            return <li key={post.id}>{post.name} <br></br>{post.title}</li>
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

export default connect(mapStateToProps)(PostListFunction)
