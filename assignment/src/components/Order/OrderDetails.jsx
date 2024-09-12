import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';



const OrderDetails = ({ match }) => {
    const [order, setOrder] = useState(null);
    const {id} = useParams();

    console.log(match)

    useEffect(() => {
      const fetchOrder = async () => {
        try {
          console.log(match)
          const response = await axios.get(`http://127.0.0.1:5000/orders/${id}`);
          setOrder(response.data);
        } catch (error) {
          console.error('Error fetching order details:', error);
        }
      };
  
      fetchOrder();
    }, [id]);
  
    if (!order) return <div>Loading...</div>;
  
    return (
      <div>
        <h1>Order Details</h1>
        <p>Order Date: {order.date}</p>
        <p>Customer: {order.customer_id}</p>
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