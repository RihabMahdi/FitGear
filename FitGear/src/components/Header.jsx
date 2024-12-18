import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { ShoppingCart, User } from 'lucide-react';
import useCart from '../context'; // Import the useCart hook
import logo1 from '../assets/logo1.png';

const Header = () => {
    const { state } = useCart(); // Access the cart state using the custom hook

    return (
        <header className="bg-gray-900 text-white sticky top-0 z-20 shadow-lg">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center">
                    {/* Logo Section */}
                    <Link to="/" className="relative flex items-center">
                        <div className="relative">
                            <img 
                                src={logo1} 
                                alt="Logo" 
                                className="w-20 h-20 rounded-full"
                            />
                    
                        </div>
                    </Link>
                    <div className="flex items-center space-x-6">
                        {/* Shopping Cart Icon */}
                        <Link to="/cart" className="relative flex items-center text-gray-300 hover:text-teal-400 transition-all duration-200">
                            <ShoppingCart size={32} />
                            {state.totalQuantity > 0 && ( // Use state.totalQuantity to access the cart count
                                <span className="absolute -top-2 -right-2 bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                                    {state.totalQuantity}
                                </span>
                            )}
                        </Link>
                        {/* User Account Icon */}
                        <Link to="/account" className="text-gray-300 hover:text-teal-400 transition-all duration-200">
                            <User size={32} />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
