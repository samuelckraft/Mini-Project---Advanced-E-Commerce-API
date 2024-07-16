import React, { useState } from 'react';
import axios from 'axios';

const CustomerForm = ({ customerId }) => {
    const [customer, setCustomer] = useState({ name: '', email: '', phone: '' });
  
    useEffect(() => {
      if (customerId) {
        const fetchCustomer = async () => {
          try {
            const response = await axios.get(`/api/customers/${customerId}`);
            setCustomer(response.data);
          } catch (error) {
            console.error('Error fetching customer details:', error);
          }
        };
        fetchCustomer();
      }
    }, [customerId]);
  
    const handleChange = (e) => {
      setCustomer({ ...customer, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        if (customerId) {
          await axios.put(`/api/customers/${customerId}`, customer);
          alert('Customer updated successfully!');
        } else {
          await axios.post('/api/customers', customer);
          alert('Customer added successfully!');
        }
      } catch (error) {
        console.error('Error submitting customer data:', error);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input name="name" value={customer.name} onChange={handleChange} placeholder="Name" required />
        <input name="email" value={customer.email} onChange={handleChange} placeholder="Email" required />
        <input name="phone" value={customer.phone} onChange={handleChange} placeholder="Phone" required />
        <button type="submit">{customerId ? 'Update Customer' : 'Add Customer'}</button>
      </form>
    );
  };

export default CustomerForm;