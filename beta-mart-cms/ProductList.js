import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('There was an error fetching the products!', error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/api/products/${id}`)  // Corrected line
      .then(() => {
        setProducts(products.filter(product => product.id !== id));
      })
      .catch(error => console.error('There was an error deleting the product!', error));
  };

  return (
    <div>
      <h1>Product List</h1>
      <Link to="/add-product">Add Product</Link>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name}
            <Link to={`/edit-product/${product.id}`}>Edit</Link>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
