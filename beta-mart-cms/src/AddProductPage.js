import React from 'react';
import ProductForm from '../components/ProductForm';

function AddProductPage() {
  return (
    <div>
      <h1>Add Product</h1>
      <ProductForm isEdit={false} />
    </div>
  );
}

export default AddProductPage;
