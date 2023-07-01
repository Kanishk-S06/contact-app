import React,{useState,useEffect,} from "react";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactCard from "./ContactCard"; 
import ContactList from "./ContactList";
const { v4: uuidv4 } = require('uuid');


function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const [contacts,setContacts]=useState([]);
  const AddContactHandler = (contact)=>{
    console.log(contact)
    setContacts([...contacts,{id: uuidv4(), ...contact}])
  }
  const RemoveContactHandler= (id)=>{
    const newContactList=contacts.filter((contact)=>{
      return contact.id !== id;
     })
     setContacts(newContactList)
  }
  useEffect(()=>{
    const retrivecontacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    
      setContacts(retrivecontacts);
    
  },[]);
  useEffect(()=>{
    if(contacts.length > 0){
     {localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));}
    }
  },[contacts]);
  return (
    <div className="ui container">
      <Header></Header>
      <AddContact AddContactHandler={AddContactHandler}></AddContact>
      <ContactList contacts={contacts} getContactId={RemoveContactHandler}></ContactList>
    </div>
  );
}

export default App;
