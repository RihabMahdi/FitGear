import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react'; // Assuming you're using react-feather for the icon
import useCart from '../context'; // Importing your custom cart hook

const CategorySection = ({ categories }) => {
    const { dispatch } = useCart();  // Accessing the dispatch function from the Cart context

    // Handle add to cart
    const handleAddToCart = (product) => {
        if (product) {
            dispatch({
                type: 'ADD_TO_CART',
                payload: { ...product, quantity: 1 }, // Add 1 quantity by default
            });
        }
    };

    return (
        <div className="py-8 px-4 md:px-6">
            {categories.map((category, index) => (
                <section key={index} className="py-6">
                    {/* Header with Category Name and "View All" Link */}
                    <div className="flex items-end justify-end mb-6">
                        <Link
                            to={`/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-[#B87333] hover:text-blue-700 text-sm flex items-center font-bold"
                        >
                            View All
                            <ChevronRight className="ml-1" size={30} />
                        </Link>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {category.products.map((product) => (
                            <div
                                key={product.id}
                                className="bg-gray-600 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                            >
                                <div className="relative">
                                    <img
                                        src={product.imageUrl}
                                        alt={product.name}
                                        className="w-full h-48 object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-white truncate mb-2">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm text-gray-200 line-clamp-2 mb-4">
                                        {product.description}
                                    </p>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-white font-bold text-lg">
                                            ${product.price.toFixed(2)}
                                        </span>
                                    </div>
                                    <button
                                        className="bg-gradient-to-r from-gray-900 to-gray-700 text-white w-full py-2 font-bold rounded-lg hover:from-gray-800 hover:to-gray-600 transition-all flex items-center justify-center gap-3"
                                        onClick={() => handleAddToCart(product)} // Pass product to the function
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
};

export default CategorySection;
