import useCart from '../hooks/useCart';

function SomeComponent() {
  const { products, cartItems, addToCart, removeFromCart } = useCart();
  // ...
}
