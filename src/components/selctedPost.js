import React from 'react'
import {connect} from 'react-redux'

function selctedPost(props) {

    if(!props.selctedPost){
        return(<h3>Select a post..</h3>)
    }
    return (
        <div>
            <h2>Contract Id : {props.selctedPost.contract_id}</h2>
            <h2>Name : {props.selctedPost.name}</h2>
            <h2>Mail Address : {props.selctedPost.mail_Address}</h2>
            <h2>Contact Number : {props.selctedPost.mobile}</h2>
        </div>
    )
}

//mehi mema state ekata store eka provider eka through connect kirima sidukarai
function mapStateToProps(state){
    return {
        selctedPost : state.selctedPost
    }
}

export default connect(mapStateToProps)(selctedPost)