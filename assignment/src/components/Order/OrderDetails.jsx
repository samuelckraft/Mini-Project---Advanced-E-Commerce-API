import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';



const OrderDetails = ({ match }) => {
    const [order, setOrder] = useState(null);
    const {id} = useParams();


    useEffect(() => {
      const fetchOrder = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:5000/orders/${id}`);
          setOrder(response.data);
        } catch (error) {
          console.error('Error fetching order details:', error);
        }
      };
  
      fetchOrder();
    }, []);
  
    if (!order) return <div>Loading...</div>;
  
    return (
      <div>
        <h1>Order Details</h1>
        <p>Order Date: {order.date}</p>
        <p>Customer: {order.customer_id}</p>
      </div>
    );
  };
  
  export default OrderDetails;