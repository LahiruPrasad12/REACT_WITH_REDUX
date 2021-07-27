
import {connect} from 'react-redux'

import React, { Component } from 'react'

class PostList extends Component {

    createList(){
        return this.props.allPosts.map((post)=>{
            return <li key={post.id}>{post.name}</li>
        })
    }


    render() {
        if(!this.props.allPosts){
            return(<h3>First click button</h3>)
        }
        return (
            <ul>
                {this.createList()}
            </ul>
        )
    }
}


function mapStateToProps(state){
    return {
        allPosts : state.allPosts
    }
}

export default connect(mapStateToProps)(PostList)

