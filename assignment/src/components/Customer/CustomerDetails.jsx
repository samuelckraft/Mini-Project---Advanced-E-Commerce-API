import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerDetails = ({ match }) => {
    const [customer, setCustomer] = useState(null);
  
    useEffect(() => {
      const fetchCustomer = async () => {
        try {
          const response = await axios.get(`/api/customers/${match.params.id}`);
          setCustomer(response.data);
        } catch (error) {
          console.error('Error fetching customer details:', error);
        }
      };
  
      fetchCustomer();
    }, [match.params.id]);
  
    const handleDelete = async () => {
      try {
        await axios.delete(`/api/customers/${match.params.id}`);
        alert('Customer deleted successfully!');
      } catch (error) {
        console.error('Error deleting customer:', error);
      }
    };
  
    if (!customer) return <div>Loading...</div>;
  
    return (
      <div>
        <h1>{customer.name}</h1>
        <p>Email: {customer.email}</p>
        <p>Phone: {customer.phone}</p>
        <button onClick={handleDelete}>Delete Customer</button>
      </div>
    );
  };

export default CustomerDetails;