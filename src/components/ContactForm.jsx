import React, { useState } from 'react';

 const ContactForm = ({ addContact }) => {
  const [contactInfo, setContactInfo] = useState({
    username: '',
    email: '',
    phoneNumber: '',
  });
  const handleFormSubmit = (event) => {
    event.preventDefault();
    addContact(contactInfo);
    setContactInfo({ username: '', email: '', phoneNumber: '' });
  };

  const handleInputChange = (event) => {
    setContactInfo({...contactInfo, [event.target.name]: event.target.value });
  };
  return (
    <section>
    <form onSubmit={handleFormSubmit} className="form-style">
      <label>
        Username:
        <input
          value={contactInfo.username}
          onChange={handleInputChange}
          type="text"
          name="username"
        />
      </label>
      <label>
        Email:
        <input
          value={contactInfo.email}
          onChange={handleInputChange}
          type="email"
          name="email"
        />
      </label>
      <label>
        Phone Number:
        <input
          value={contactInfo.phoneNumber}
          onChange={handleInputChange}
          type="number"
          name="phoneNumber"
        />
      </label>
      <button className="btn">Submit</button>
    </form>
    </section>
  );
};
export default ContactForm;
