import axios from 'axios';
import React, { useState } from 'react';
import './PutCustomer.css'; 

export default function PutCustomer() {
  const [customerId, setCustomerId] = useState('');
  const [updatedName, setUpdatedName] = useState('');
  const [updatedApplianceId, setUpdatedApplianceId] = useState('');
  const [updatedApplianceType, setUpdatedApplianceType] = useState('');
  const [updatedPurchaseDate, setUpdatedPurchaseDate] = useState('');
  const [updatedWarrantyinyears, setUpdatedWarrantyinyears] = useState('');
  const [updatedProblemDescription, setUpdatedProblemDescription] = useState('');
  const [updatedMobileNo, setUpdatedMobileNo] = useState('');
 

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      customerName: updatedName,
      applianceId: updatedApplianceId,
      applianceType: updatedApplianceType,
      purchaseDate: updatedPurchaseDate,
      warrantyinyears: updatedWarrantyinyears,
      problemDescription: updatedProblemDescription,
      mobileNo: updatedMobileNo,
     
    };

    axios.put(`http://localhost:8080/customer/updateApplianceid`, data)
      .then(response => {
        console.log(response.data);
        alert('Customer information updated successfully');
      })
      .catch(err => {
        console.error(err);
        alert('Customer information not updated');
      });

  
    setCustomerId('');
    setUpdatedName('');
    setUpdatedApplianceId('');
    setUpdatedApplianceType('');
    setUpdatedPurchaseDate('');
    setUpdatedWarrantyinyears('');
    setUpdatedProblemDescription('');
    setUpdatedMobileNo('');

  };

  return (
    <div className='auth-form'>
      <h1>Update Customer Information</h1>
      <form className='auth-data' onSubmit={handleSubmit}>
        <input
          type='number'
          placeholder='Customer ID'
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
        />
        <input
          type='text'
          placeholder='Updated Name'
          value={updatedName}
          onChange={(e) => setUpdatedName(e.target.value)}
        />
        <input
          type='number'
          placeholder='Updated Appliance ID'
          value={updatedApplianceId}
          onChange={(e) => setUpdatedApplianceId(e.target.value)}
        />
        <input
          type='text'
          placeholder='Updated Appliance Type'
          value={updatedApplianceType}
          onChange={(e) => setUpdatedApplianceType(e.target.value)}
        />
        <input
          type='number'
          placeholder='Updated Purchase Date'
          value={updatedPurchaseDate}
          onChange={(e) => setUpdatedPurchaseDate(e.target.value)}
        />
        <input
          type='number'
          placeholder='Updated Warranty in Years'
          value={updatedWarrantyinyears}
          onChange={(e) => setUpdatedWarrantyinyears(e.target.value)}
        />
        <input
          type='text'
          placeholder='Updated Problem Description'
          value={updatedProblemDescription}
          onChange={(e) => setUpdatedProblemDescription(e.target.value)}
        />
        <input
          type='number'
          placeholder='Updated Mobile No'
          value={updatedMobileNo}
          onChange={(e) => setUpdatedMobileNo(e.target.value)}
        />
        {/* Add input fields for other updated data */}
        <button type='Submit' className='auth-btn green-bg white-txt'>
          Update
        </button>
      </form>
    </div>
  );
}
