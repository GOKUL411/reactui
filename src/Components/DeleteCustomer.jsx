import React, { useState } from 'react';
import axios from 'axios';
import './DeleteCustomer.css'; // Import the CSS file

export default function DeleteCustomer() {
  const [customerId, setCustomerId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.delete(`http://localhost:8080/customer/deleteApplianceid/${customerId}`)
      .then(response => {
        console.log(response.data);
        alert('Customer information deleted successfully'); // Display a success alert
      })
      .catch(err => {
        console.error(err);
        alert('Failed to delete customer information'); // Display an error alert
      });

    // Reset state variable
    setCustomerId('');
  };

  return (
    <div className='auth-form'>
      <h1>Delete Customer Information</h1>
      <form className='auth-data' onSubmit={handleSubmit}>
        <label htmlFor='customerId'>Enter Customer ID:</label>
        <input
          type='number'
          id='customerId'
          placeholder='Customer ID'
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
        />
        <button type='Submit' className='auth-btn red-bg white-txt'>
          Delete
        </button>
      </form>
    </div>
  );
}
