import React from 'react';
import PropTypes from 'prop-types';
import { ShoppingCart } from 'lucide-react';
import formatPrice from '../utils/formatPrice';

export default function ProductCard({ product, onAddToCart }) {
  const { id, name, price, image, inStock } = product;

  return (
    <div className=" shadow-md shadow-sky-200 hover:shadow-lg transition-shadow duration-200 flex flex-col
      max-w-sm">
      <div className="overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={name}
          className="object-cover h-32 lg:h-48 w-full"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{name}</h3>
        <p className="text-teal-600">{formatPrice(price)}</p>
        <button
          onClick={() => onAddToCart(product)}
          disabled={!inStock}
          className={` mt-3 inline-flex items-center justify-center px-4 py-2
            rounded-2xl font-medium focus:outline-none transition-colors duration-150
            ${inStock ? 'bg-teal-500 text-white hover:bg-teal-600 cursor-pointer  scale-[1] hover:scale-[1.02]' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
        >
          <ShoppingCart size={16} className="mr-2" />
          {inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    inStock: PropTypes.bool,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};
