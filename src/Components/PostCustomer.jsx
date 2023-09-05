
import axios from 'axios';
import React, { useState } from 'react';
import './PostCustomer.css';
export default function PostCustomer() {
  const [customerName, setCustomerName] = useState('');
  const [applianceId, setApplianceId] = useState('');
  const [applianceType, setApplianceType] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');
  const [warrantyinyears, setWarrantyinyears] = useState('');
  const [problemDescription, setProblemDescription] = useState('');
  const [mobileNo, setMobileNo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      customerName: customerName,
      applianceId: applianceId,
      applianceType: applianceType,
      purchaseDate: purchaseDate,
      warrantyinyears: warrantyinyears,
      problemDescription: problemDescription,
      mobileNo: mobileNo,
      // Include other fields here
    };

    axios.post('http://localhost:8080/customer/postAppliancid', data)
      .then(response => {
        console.log(response.data);
        alert('Customer information submitted successfully');
      })
      .catch(err => {
        console.error(err);
        alert('Customer information not submitted');
      });

  
    setCustomerName('');
    setApplianceId('');
    setApplianceType('');
    setPurchaseDate('');
    setWarrantyinyears('');
    setProblemDescription('');
    setMobileNo('');
   
  };

  return (
    <div className='auth-form'>
      <h1>Post Customer Information</h1>
      <form className='auth-data' onSubmit={handleSubmit}>
        Enter the  customer name
        <input type='text'placeholder='Customer Name'value={customerName}
          onChange={(e) => setCustomerName(e.target.value)} />
          Enter the Appliance id
        <input
          type='number'
          placeholder='Appliance ID'
          value={applianceId}
          onChange={(e) => setApplianceId(e.target.value)}
        />
        Enter the appliance type
        <input
          type='text'
          placeholder='Appliance Type'
          value={applianceType}
          onChange={(e) => setApplianceType(e.target.value)}
        />
        Enter the purchase date
        <input
          type='number'
          placeholder='Purchase Date'
          value={purchaseDate}
          onChange={(e) => setPurchaseDate(e.target.value)}
        />
        Enter the  warranty duration
        <input
          type='number'
          placeholder='Warranty in Years'
          value={warrantyinyears}
          onChange={(e) => setWarrantyinyears(e.target.value)}
        />
        Enter the  problem description 
        <input
          type='text'
          placeholder='Problem Description'
          value={problemDescription}
          onChange={(e) => setProblemDescription(e.target.value)}
        />
        Enter the  Mobile No
        <input
          type='number'
          placeholder='Mobile No'
          value={mobileNo}
          onChange={(e) => setMobileNo(e.target.value)}
        />
        {/* Add input fields for other customer data */}
        <button type='Submit' className='auth-btn green-bg white-txt'>
          Submit
        </button>
      </form>
    </div>
  );
}
