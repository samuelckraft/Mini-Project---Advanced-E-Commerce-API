import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductForm = ({ productId }) => {
    const [product, setProduct] = useState({ name: '', price: '' });
  
    useEffect(() => {
      if (productId) {
        const fetchProduct = async () => {
          try {
            const response = await axios.get(`http://127.0.0.1:5000/products/${productId}`);
            setProduct(response.data);
          } catch (error) {
            console.error('Error fetching product details:', error);
          }
        };
        fetchProduct();
      }
    }, [productId]);
  
    const handleChange = (e) => {
      setProduct({ ...product, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        if (productId) {
          await axios.put(`http://127.0.0.1:5000/products/${productId}`, product);
          alert('Product updated successfully!');
        } else {
          await axios.post('http://127.0.0.1:5000/products', product);
          alert('Product added successfully!');
        }
      } catch (error) {
        console.error('Error submitting product data:', error);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input name="name" value={product.name} onChange={handleChange} placeholder="Product Name" required />
        <input name="price" value={product.price} onChange={handleChange} placeholder="Price" required />
        <input name="order_id" value={product.order_id} onChange={handleChange} placeholder="Order ID" required />
        <button type="submit">{productId ? 'Update Product' : 'Add Product'}</button>
      </form>
    );
  };

export default ProductForm;