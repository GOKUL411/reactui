import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './GetCustomer.css';

export default function GetCustomer() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Fetch customer data from the server when the component mounts
    axios.get('http://localhost:8080/customer/getApplianceid ')
      .then(response => {
        setCustomers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className='main'>
      <h1>Customer Information</h1>
      {/* Display customer information */}
      <table className='table-data'>
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Appliance ID</th>
            <th>Appliance Type</th>
            <th>Purchase Date</th>
            <th>Warranty in Years</th>
            <th>Problem Description</th>
            <th>Mobile No</th>
            {/* Add more table headers for other customer fields if needed */}
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.CustomerId}>
              <td>{customer.CustomerId}</td>
              <td>{customer.customerName}</td>
              <td>{customer.applianceId}</td>
              <td>{customer.applianceType}</td>
              <td>{customer.purchaseDate}</td>
              <td>{customer.warrantyinyears}</td>
              <td>{customer.problemDescription}</td>
              <td>{customer.mobileNo}</td>
              {/* Add more table cells for other customer fields if needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
