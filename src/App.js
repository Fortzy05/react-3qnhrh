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

import React from 'react';
import FilterableProductTable from "./components/FilterableProductTable"


const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]


const App = () => {
  
  return <FilterableProductTable products={PRODUCTS} />;
  
};

export default App;
