// src/hooks/useProducts.js
import { useContext, useCallback } from 'react';
import { CartContext } from '../context/CartContext';

/**
 * Custom hook to access products list and lookup by id.
 * Ensures hook is used within a CartProvider.
 */
export default function useProducts() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useProducts must be used within a CartProvider');
  }

  const { products } = context;

  /**
   * Retrieve a single product by its ID.
   * @param {string|number} id - The id of the product to find.
   * @returns {object|undefined} The matching product or undefined.
   */
  const getProductById = useCallback(
    id => products.find(p => String(p.id) === String(id)),
    [products]
  );

  return { products, getProductById };
}
