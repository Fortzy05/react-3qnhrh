// import React, { useState } from 'react';
// import './style.css';
// import ContactForm from './components/ContactForm.jsx';

// export default function App() {
//   const [contacts, updateContacts] = useState([]);

//   const addContact = (contactInfo) => {
//     updateContacts([...contacts, contactInfo]);
//   };
//   console.log(contacts);
//   return <ContactForm addContact={addContact} />;
// }

import React from "react";

const products = [{
  title: 'cabbage', id: 1
},
{

    title: 'Garlic', id: 2
  },
  {
    title: 'Apple', id: 3
  } ];


  const listItem = products.map(product => <li key={product.id}>{product.title}</li>)



const App = () =>{
  return <ol>{listItem}</ol>
}



export default App;