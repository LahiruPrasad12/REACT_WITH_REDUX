import React from 'react'
import {connect} from 'react-redux'

function selctedPost(props) {

    if(!props.selctedPost){
        return(<h3></h3>)
    }
    return (
        <div>
            <td>Contract Id : {props.selctedPost.contract_id}</td><br></br>
            <td>Name : {props.selctedPost.name}</td><br></br>
            <td>Mail Address : {props.selctedPost.mail_Address}</td><br></br>
            <td>Contact Number : {props.selctedPost.mobile}</td><br></br>
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