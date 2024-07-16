import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderDetails = ({ match }) => {
    const [order, setOrder] = useState(null);
  
    useEffect(() => {
      const fetchOrder = async () => {
        try {
          const response = await axios.get(`/api/orders/${match.params.id}`);
          setOrder(response.data);
        } catch (error) {
          console.error('Error fetching order details:', error);
        }
      };
  
      fetchOrder();
    }, [match.params.id]);
  
    if (!order) return <div>Loading...</div>;
  
    return (
      <div>
        <h1>Order Details</h1>
        <p>Order Date: {order.orderDate}</p>
        <p>Customer: {order.customerId}</p>
        <ul>
          {order.products.map(product => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
        <p>Status: {order.status}</p>
      </div>
    );
  };
  
  export default OrderDetails;