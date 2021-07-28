import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {selectPost} from '../actions/postActions'
import './all.css'

//meken view list eka function base kara ata
function PostListFunction(props) {

    function createList(){
        if(props.isLoading){
            return <h1>Loading.....</h1>
        }else{
            return(
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Mail address</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
    
                    <tbody>
                        {props.allPosts.map(post=>{
                            return <tr>
                                <td>{post.name}</td>
                                <td>{post.mail_Address}</td>
                                <td>{post.mobile}</td>
                                <td><button className="btn btn-default" onClick={()=>props.selectPost(post)}>View</button><button className="btn btn-danger">Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            )

        }

       
    }

    if(!props.allPosts){
        return(<h1></h1>)
    }

    return (
        <ul>
            {createList()}
        </ul>
    )
}

//this coming from reducer
function mapStateToProps(state){
    return {
        allPosts : state.allPosts.posts,
        isLoading : state.allPosts.isLoading,
    }
}

//meka use krnne eka post ekak details retrivev kara ganimataya
function matctDispatchToProps(dispatch){
    return bindActionCreators({selectPost: selectPost},dispatch)
}

export default connect(mapStateToProps,matctDispatchToProps)(PostListFunction)
