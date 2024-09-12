import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CustomerDetails = ({ match }) => {
    const [customer, setCustomer] = useState(null);
    const {id} = useParams();

  
    useEffect(() => {
      const fetchCustomer = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:5000/customers/${id}`);
          setCustomer(response.data);
        } catch (error) {
          console.error('Error fetching customer details:', error);
        }
      };
  
      fetchCustomer();
    }, [id]);
  
    const handleDelete = async () => {
      try {
        await axios.delete(`http://127.0.0.1:5000/customers/${id}`);
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