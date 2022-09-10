import React, {useState} from 'react';
import './style.css';
import ContactForm from "./components/ContactForm.jsx"



export default function App() {
  const[contacts, updateContacts] = useState([])

  const addContact = (contactInfo) =>{
    updateContacts([...contacts, contactInfo])
  }
  return <ContactForm addContact={addContact} />;
}