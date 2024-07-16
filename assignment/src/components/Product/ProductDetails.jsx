import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductDetails = ({ match }) => {
    const [product, setProduct] = useState(null);
  
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await axios.get(`/api/products/${match.params.id}`);
          setProduct(response.data);
        } catch (error) {
          console.error('Error fetching product details:', error);
        }
      };
  
      fetchProduct();
    }, [match.params.id]);
  
    const handleDelete = async () => {
      try {
        await axios.delete(`/api/products/${match.params.id}`);
        alert('Product deleted successfully!');
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    };
  
    if (!product) return <div>Loading...</div>;
  
    return (
      <div>
        <h1>{product.name}</h1>
        <p>Price: ${product.price}</p>
        <button onClick={handleDelete}>Delete Product</button>
      </div>
    );
  };

export default ProductDetails;