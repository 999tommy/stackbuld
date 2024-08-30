"use client"

import Image from "next/image";
import { FC } from "react";
import Product from "./components/product";
import products from '../../public/products.json';
import { useState } from "react";

let HomePage: FC = () => {

  const [productsList, setProductsList] = useState(products);
    const [newProduct, setNewProduct] = useState({ id: 0, name: '', price: 0, description: '' });
    const [editing, setEditing] = useState(false);
    const [currentProduct, setCurrentProduct] = useState({ id: 0, name: '', price: 0, description: '' });
  
    const handleAddProduct = () => {
      const newProductList = [...productsList, newProduct];
      setProductsList(newProductList);
      setNewProduct({ id: 0, name: '', price: 0, description: '' });
    };
  
    const handleEditProduct = (product: any) => {
      setEditing(true);
      setCurrentProduct(product);
    };
  const handleUpdateProduct = () => {
    const updatedProductList = productsList.map((product) =>
      product.id === currentProduct.id ? currentProduct : product
    ); 
    setProductsList(updatedProductList);
    setEditing(false);
  };

  const handleDeleteProduct = (id: number) => {
    const updatedProductList = productsList.filter((product) => product.id !== id);
    setProductsList(updatedProductList);
  };

  return (
    <>
      <div className="bg-black text-white container mx-auto p-4">
      <h1 className=" text-center font-mono text-3xl font-bold mb-4">Product List</h1>
      <div className="flex-row justify-center items-center">
        {productsList.map((product) => (
          <Product
            key={product.id}
            product={product}
            onEdit={() => handleEditProduct(product)}
            onDelete={() => handleDeleteProduct(product.id)}
          />
        ))}
      </div>
      {editing ? (
        <div className="mt-4 ">
          <h2 className="text-lg font-bold">Edit Product</h2>
          <input
            type="text"
            value={currentProduct.name}
            onChange={(e) => setCurrentProduct({ ...currentProduct, name: e.target.value })}
            className="w-full p-2 mb-2 text-black"
          />
          <input
            type="number"
            value={currentProduct.price}
            onChange={(e) => setCurrentProduct({ ...currentProduct, price: e.target.valueAsNumber })}
            className="w-full p-2 mb-2 text-black"
          />
          <textarea
            value={currentProduct.description}
            onChange={(e) => setCurrentProduct({ ...currentProduct, description: e.target.value })}
            className="w-full p-2 mb-2 text-black"
          />
          <button onClick={handleUpdateProduct} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
            Update Product
          </button>
        </div>
      ) : (
        <div className="mt-4 text-black">
          <h2 className="text-lg font-bold text-white">Add Product</h2>
          <input
            type="text"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            className="w-full p-2 mb-2"
          />
          <input
            type="number"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.valueAsNumber })}
            className="w-full p-2 mb-2"
          />
          <textarea
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            className="w-full p-2 mb-2"
          />
          <button onClick={handleAddProduct} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Product
          </button>
        </div>
      )}
    </div>
    </>
  );
};
export default HomePage;

{/**
  mport { FC, useState } from 'react';
import Product from '../components/Product';
import products from '../public/products.json';

const HomePage: FC = () => {
  const [productsList, setProductsList] = useState(products);
  const [newProduct, setNewProduct] = useState({ name: '', price: 0, description: '' });
  const [editing, setEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({ id: 0, name: '', price: 0, description: '' });

  const handleAddProduct = () => {
    const newProductList = [...productsList, newProduct];
    setProductsList(newProductList);
    setNewProduct({ name: '', price: 0, description: '' });
  };

  const handleEditProduct = (product: any) => {
    setEditing(true);
    setCurrentProduct(product);
  };

  const handleUpdateProduct = () => {
    const updatedProductList = productsList.map((product) =>
      (link unavailable) === (link unavailable) ? currentProduct : product
    );
    setProductsList(updatedProductList);
    setEditing(false);
  };

  const handleDeleteProduct = (id: number) => {
    const updatedProductList = productsList.filter((product) => (link unavailable) !== id);
    setProductsList(updatedProductList);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Product List</h1>
      <div className="grid grid-cols-3 gap-4">
        {productsList.map((product) => (
          <Product
            key={(link unavailable)}
            product={product}
            onEdit={() => handleEditProduct(product)}
            onDelete={() => handleDeleteProduct((link unavailable))}
          />
        ))}
      </div>
      {editing ? (
        <div className="mt-4">
          <h2 className="text-lg font-bold">Edit Product</h2>
          <input
            type="text"
            value={currentProduct.name}
            onChange={(e) => setCurrentProduct({ ...currentProduct, name: e.target.value })}
            className="w-full p-2 mb-2"
          />
          <input
            type="number"
            value={currentProduct.price}
            onChange={(e) => setCurrentProduct({ ...currentProduct, price: e.target.valueAsNumber })}
            className="w-full p-2 mb-2"
          />
          <textarea
            value={currentProduct.description}
            onChange={(e) => setCurrentProduct({ ...currentProduct, description: e.target.value })}
            className="w-full p-2 mb-2"
          />
          <button onClick={handleUpdateProduct} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Update Product
          </button>
        </div>
      ) : (
        <div className="mt-4">
          <h2 className="text-lg font-bold">Add Product</h2>
          <input
            type="text"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            className="w-full p-2 mb-2"
          />
          <input
            type="number"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.valueAsNumber })}
            className="w-full p-2 mb-2"
          />
          <textarea
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            className="w-full p-2 mb-2"
          />
          <button onClick={handleAddProduct} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Product
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
```
.................................................................................................
*components/Product.tsx*
```
tsx
import { FC } from 'react';

interface ProductProps {
  product: {
    id: number;
    name: string;
    price: number;
    description: string;
  };
  onEdit: () => void;
  onDelete: () => void;
}

const Product: FC<ProductProps> = ({ product, onEdit, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-gray-600">${product.price}</p>
  */}
