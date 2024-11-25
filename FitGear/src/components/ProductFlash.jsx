import React from 'react';
import useCart from '../context'; // Import the custom hook to use the cart context

const FlashSaleSection = ({ categories }) => {
    const { dispatch } = useCart();  // Access the dispatch from the Cart context

    // Handle add to cart
    const handleAddToCart = (product) => {
        if (product) {
            dispatch({
                type: 'ADD_TO_CART',
                payload: { ...product, quantity: 1 }, // Add 1 by default
            });
        }
    };

    return (
        <section className="py-8 px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-6 text-center text-red-600">🔥 Flash Sale! 24 Hours Only 🔥</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {categories[0].products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-gray-600 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow "
                    >
                        <div className="relative">
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                                20% OFF
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-bold text-gray-100 mb-2 truncate">{product.name}</h3>
                            <p className="text-sm text-gray-300 mb-4 line-clamp-2">{product.description}</p>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-white font-extrabold text-lg">
                                    ${(product.price * 0.8).toFixed(2)}
                                </span>
                                <span className="text-gray-300 text-sm line-through">
                                    ${product.price.toFixed(2)}
                                </span>
                            </div>
                            <button
                                onClick={() => handleAddToCart(product)}
                                className="w-full bg-red-700 text-white py-2 rounded-md font-medium hover:bg-red-600 transition"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FlashSaleSection;
