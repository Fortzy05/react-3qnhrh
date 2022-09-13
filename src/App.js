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
  title: 'cabbage', isFruit: false, id: 1
},
{

    title: 'Garlic',isFruit: false, id: 2
  },
  {
    title: 'Apple',isFruit: true, id: 3
  } ];


  const listItem = products.map(product => <li style={{color: product.isFruit ? 'magenta' :'darkgreen'}} key={product.id}>{product.title}</li>)



const App = () =>{
  return <ol>{listItem}</ol>
}



export default App;