import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import formatPrice from '../utils/formatPrice';

export default function Cart() {
  const { cartItems, removeFromCart, clearCart,
    incrementProductQuantity,
decrementProductQuantity
   } = useContext(CartContext);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className='w-full overflow-x-auto '>
          <table  className="w-fit max-w-full bg-white p-6 border border-gray-200 rounded-lg shadow-md">
            <thead className='p-4'>
              <tr>
                <th align='left' className='text-xs p-3'>Product</th>
                <th align='end' className='text-xs p-3'>quantity</th>
                <th align='left' className='text-xs p-3'>Unit Price</th>
                <th align='left' className='text-xs p-3'>Sub Total</th>
                <th align='left' className='text-xs p-3'>Actions</th>
                </tr> 
              </thead>
            <tbody className=''>
              {cartItems.map(item => (
                <tr key={item.id} className="border-b border-gray-200 p-3">
                  <td className=' p-2'>
                    <div className="flex items-center gap-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-8 h-8 object-cover rounded-lg"
                      />
                      <span className="text-gray-800">{item.name}</span>
                    </div>
                  </td>
                   <td className="text-gray-800 p-2">
                   {item.quantity}
                  </td>
                  <td className="text-sky-800 p-2">
                   {formatPrice(item.price)}
                  </td>
                   <td className="text-gray-800 p-2">
                   {formatPrice(item.price * item.quantity)}
                  </td>
                  <td className=' p-2'>  
                    <div className='flex flex-row gap-2 '>
                      <button 
                       onClick={() => decrementProductQuantity(item)}
                      className='cursor-pointer text-3xl text-rose-600 scale-100 hover:scale-125 duration-300'>-</button>
                      <button 
                       onClick={() => incrementProductQuantity(item)}
                      className='cursor-pointer text-3xl text-black scale-100 hover:scale-125 duration-300'>+</button>
                    </div>
                  </td>
                </tr>
                  ))}
                <tr>
                  <td align='left' colSpan="4" className="text-start font-bold p-3">
                    Total:
                  </td>
                  <td className="text-gray-800 p-3">
                    {formatPrice(
                      cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
                    )}
                  </td>
                </tr>
              </tbody>

              </table>
          </div>
      )}
    </div>
  );
}