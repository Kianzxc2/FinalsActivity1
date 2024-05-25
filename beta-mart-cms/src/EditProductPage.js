import React from 'react';
import ProductForm from '../components/ProductForm';

function EditProductPage() {
  return (
    <div>
      <h1>Edit Product</h1>
      <ProductForm isEdit={true} />
    </div>
  );
}

export default EditProductPage;
