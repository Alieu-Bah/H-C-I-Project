import React, { useContext } from 'react';
import ProductCard from '../components/ProductCard';
import { CartContext } from '../context/CartContext';

export default function Products() {
  const { products, addToCart } = useContext(CartContext);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}