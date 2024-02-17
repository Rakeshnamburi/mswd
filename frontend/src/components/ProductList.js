import React, { useState } from 'react';

const Product = ({ name, price, onAddToCart }) => (
  <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
    <p>Name: {name}</p>
    <p>Price: ${price.toFixed(2)}</p>
    <button onClick={onAddToCart}>Add to Cart</button>
  </div>
);

const ProductList = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Apple 15 1', price: 19.99 },
    { id: 2, name: 'wax 2', price: 29.99 },
    { id: 3, name: 'splender 550 3', price: 39.99 },
    { id: 4, name: 'asus 4', price: 49.99 },
    { id: 5, name: 'thar 5', price: 59.99 },
  ];

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          price={product.price}
          onAddToCart={() => handleAddToCart(product)}
        />
      ))}
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - ${item.price.toFixed(2)}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;