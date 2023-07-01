import React from 'react';
import user from '../images/user.png';
// const { v4: uuidv4 } = require('uuid');
// const key=uuidv4()
// const deleteconta
const ContactCard=(props)=>{
    const {id,name,email}=props.contact
    return(
        <div className='item'>
        <img className='ui avatar image' src={user} alt='user'/>
        <div className='content'>
            {/* <div>{id}</div> */}
            <div className='header'>{name}</div>
            <div>{email}</div>
        </div>
        <i className='trash alternate outline icon' style={{color:"red",marginTop:"7px"}} onClick={()=>props.clickHandler(id)}></i>
    </div>
    ) 
}
export default ContactCard;