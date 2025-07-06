import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import formatPrice from '../utils/formatPrice';

export default function ProductDetail() {
  const { id } = useParams();
  const { products, addToCart } = useContext(CartContext);
  const product = products.find(p => String(p.id) === id);

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-full max-w-md" />
      <p className="text-teal-600 …">{formatPrice(price)}</p>

      <button
        onClick={() => addToCart(product)}
        className="mt-4 bg-teal-500 text-white px-6 py-2 rounded-2xl"
      >
        Add to Cart
      </button>
      {/* TODO: Add detailed specs, description, reviews */}
    </div>
  );
}