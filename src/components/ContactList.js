import React from 'react';
import ContactCard from './ContactCard';
const { v4: uuidv4 } = require('uuid');


const ContactList=(props)=>{
    const deleteContactHandler=(id)=>{
        props.getContactId(id);
    }
    console.log(props);

    const renderContactList=props.contacts.map((contact)=>{
        return (
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={uuidv4() }></ContactCard>
        );
    });
    return(
        <div className='ui celled list'>
            {renderContactList}
        </div>
    );
 }

export default ContactList;