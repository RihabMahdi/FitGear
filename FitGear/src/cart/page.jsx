import React from 'react';
import useCart from '../context'; // Import the custom hook

const CartPage = () => {
    const { state, dispatch } = useCart();

    const handleRemoveFromCart = (id) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    };

    const handleUpdateQuantity = (id, quantity) => {
        dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    };

    return (
        <div className="container mx-auto py-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Your Cart</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {state.cartItems.length === 0 ? (
                    <p className="text-center text-gray-400">Your cart is empty.</p>
                ) : (
                    state.cartItems.map((item) => (
                        <div key={item.id} className="bg-gray-600 rounded-lg shadow-lg overflow-hidden">
                            <div className="relative">
                                <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover" />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
                                <p className="text-sm text-gray-300 mb-4">{item.description}</p>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-white font-bold text-lg">${item.price.toFixed(2)}</span>
                                    <input
                                        type="number"
                                        min="1"
                                        value={item.quantity}
                                        onChange={(e) =>
                                            handleUpdateQuantity(item.id, parseInt(e.target.value))
                                        }
                                        className="w-16 text-center border-2 border-gray-300 rounded-md"
                                    />
                                </div>
                                <button
                                    onClick={() => handleRemoveFromCart(item.id)}
                                    className="w-full bg-red-700 text-white py-2 rounded-md font-medium hover:bg-red-600 transition"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
            {state.cartItems.length > 0 && (
                <div className="mt-8 text-center">
                    <h3 className="text-lg font-bold text-white">
                        Total: ${state.totalPrice.toFixed(2)}
                    </h3>
                </div>
            )}
        </div>
    );
};

export default CartPage;
