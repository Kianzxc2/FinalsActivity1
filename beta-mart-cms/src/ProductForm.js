import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

function ProductForm({ isEdit }) {
  const [product, setProduct] = useState({ name: '', price: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (isEdit) {import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

function ProductForm({ isEdit }) {
  const [product, setProduct] = useState({ name: '', price: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      if (isEdit) {
        setLoading(true);
        try {
          const response = await axios.get(`/api/products/${id}`);
          setProduct(response.data);
          setLoading(false);
        } catch (error) {
          console.error('There was an error fetching the product!', error);
          setError('There was an error fetching the product.');
          setLoading(false);
        }
      }
    };

    fetchProduct();
  }, [isEdit, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (product.name.trim() === '' || product.price.trim() === '') {
      setError('Name and price are required.');
      return;
    }

    setLoading(true);

    try {
      if (isEdit) {
        await axios.put(`/api/products/${id}`, product);
      } else {
        await axios.post('/api/products', product);
      }
      setLoading(false);
      history.push('/');
    } catch (error) {
      console.error(`There was an error ${isEdit ? 'updating' : 'creating'} the product!`, error);
      setError(`There was an error ${isEdit ? 'updating' : 'creating'} the product.`);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={product.name}
          onChange={handleChange}
          aria-label="Product Name"
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          name="price"
          value={product.price}
          onChange={handleChange}
          aria-label="Product Price"
        />
      </div>
      <button type="submit" disabled={loading}>
        {isEdit ? 'Update' : 'Create'}
      </button>
    </form>
  );
}

export default ProductForm;

      setLoading(true);
      axios.get(/api/products/${id})
        .then(response => {
          setProduct(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('There was an error fetching the product!', error);
          setError('There was an error fetching the product.');
          setLoading(false);
        });
    }
  }, [isEdit, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.name.trim() === '' || product.price.trim() === '') {
      setError('Name and price are required.');
      return;
    }
    setLoading(true);
    if (isEdit) {
      axios.put(/api/products/${id}, product)
        .then(() => {
          setLoading(false);
          history.push('/');
        })
        .catch(error => {
          console.error('There was an error updating the product!', error);
          setError('There was an error updating the product.');
          setLoading(false);
        });
    } else {
      axios.post('/api/products', product)
        .then(() => {
          setLoading(false);
          history.push('/');
        })
        .catch(error => {
          console.error('There was an error creating the product!', error);
          setError('There was an error creating the product.');
          setLoading(false);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={product.name}
          onChange={handleChange}
          aria-label="Product Name"
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          name="price"
          value={product.price}
          onChange={handleChange}
          aria-label="Product Price"
        />
      </div>
      <button type="submit" disabled={loading}>
        {isEdit ? 'Update' : 'Create'}
      </button>
    </form>
  );
}

export default ProductForm;