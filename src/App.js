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

import React,{useState} from 'react';

const MyButton = ({myCount}) =>{
  const[count, setCount] = useState(0)
  const handleClick = () =>{
    setCount(count => count + 1)
  }
  return(<>
  <button className="btn" onClick={handleClick}>you clicked me: {count} </button>
  </>
  )
}

const App = () => {
  return (<>
  <MyButton/>
  <MyButton/>
  </>)
};

export default App;
