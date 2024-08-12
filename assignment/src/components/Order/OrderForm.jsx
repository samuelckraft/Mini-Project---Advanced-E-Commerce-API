import React, { useState, useEffect } from 'react';
import axios from 'axios';


const OrderForm = () => {
  const [order, setOrder] = useState({ customerId: '', products: [], orderDate: '' });
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('/api/customers');
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchCustomers();
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleProductChange = (e) => {
    const selectedProducts = Array.from(e.target.selectedOptions, option => option.value);
    setOrder({ ...order, products: selectedProducts });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/orders', order);
      alert('Order placed successfully!');
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select name="customerId" value={order.customerId} onChange={handleChange} required>
        <option value="" disabled>Select Customer</option>
        {customers.map(customer => (
          <option key={customer.id} value={customer.id}>{customer.name}</option>
        ))}
      </select>
      <select multiple name="products" value={order.products} onChange={handleProductChange} required>
        {products.map(product => (
          <option key={product.id} value={product.id}>{product.name}</option>
        ))}
      </select>
      <input type="date" name="orderDate" value={order.orderDate} onChange={handleChange} required />
      <button type="submit">Place Order</button>
    </form>
  );
};

export default OrderForm;