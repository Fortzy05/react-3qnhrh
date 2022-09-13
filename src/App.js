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

const MyButton = ({count, onClick}) =>{
  return(<>
    <button className="btn" onClick={onClick}>you clicked me: {count} </button>
    </>
  )
}

const App = () => {
  const[count, setCount] = useState(0)
  const handleClick = () =>{
    setCount(count => count - 1)
  }
  
  return (<>
  <MyButton count={count} onClick={handleClick}/>
  <MyButton count={count} onClick={handleClick}/>
  </>)
};

export default App;
