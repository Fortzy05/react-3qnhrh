import React, { useState } from 'react';

const ContactForm = () => {
  const [contactinfo, setContactInfo] = useState({
    username: '',
    email: '',
    phoneNumber: '',
  });
  const handleFormSubmit = (event) => {
    console.log(contactinfo)
  };

  const handleInputChange = (event) => {
    setContactInfo({ ...contactinfo, [event.target.name]: event.target.value });
  };
  return (
    <form onSubmit={handleFormSubmit} className="form-style">
      <label>
        Username:
        <input
          value={contactinfo.username}
          onChange={handleInputChange}
          type="text"
          name="username"
        />
      </label>
      <label>
        Email:
        <input
          value={contactinfo.email}
          onChange={handleInputChange}
          type="email"
          name="email"
        />
      </label>
      <label>
        Phone Number:
        <input
          value={contactinfo.phoneNumber}
          onChange={handleInputChange}
          type="number"
          name="phoneNumber"
        />
      </label>
      <button className="btn">Submit</button>
    </form>
  );
};
export default ContactForm;
