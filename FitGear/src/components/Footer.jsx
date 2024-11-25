import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            {/* Footer Links */}
            <div className="bg-gray-800 py-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8">
                    {/* Subscribe Section */}
                    <div>
                        <h3 className="font-bold text-white">Subscribe to our Newsletter</h3>
                        <div className="mt-4 flex items-center border-b border-gray-500">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-transparent outline-none px-2 py-1 text-white"
                            />
                            <button className="text-pink-600 font-bold ml-2">➜</button>
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h3 className="font-bold text-white">Quick Links</h3>
                        <ul className="mt-4 space-y-2 text-gray-400">
                            <li><Link to="/blogs" className="hover:underline">Blogs</Link></li>
                            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
                            <li><Link to="/bundles" className="hover:underline">Bundles</Link></li>
                            <li><Link to="/about" className="hover:underline">About Us</Link></li>
                        </ul>
                    </div>

                    {/* Popular Collections */}
                    <div>
                        <h3 className="font-bold text-white">Popular Categories</h3>
                        <ul className="mt-4 space-y-2 text-gray-400">
                            <li><Link to="/supplements" className="hover:underline">Supplements</Link></li>
                            <li><Link to="/equipment" className="hover:underline">Equipment</Link></li>
                            <li><Link to="/accessories" className="hover:underline">Accessories</Link></li>
                            <li><Link to="/all-products" className="hover:underline">All Products</Link></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="font-bold text-white">Contact</h3>
                        <address className="mt-4 space-y-2 text-gray-400 not-italic">
                            <p>123 Fitness Road</p>
                            <p>Agadir, Morocco</p>
                            <p>+212 6 1234 5678</p>
                            <p>
                                <a
                                    href="mailto:support@mygymstore.ma"
                                    className="text-pink-600 hover:underline"
                                >
                                    support@mygymstore.ma
                                </a>
                            </p>
                        </address>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="bg-gray-700 py-4 text-center">
                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} My Gym Store. All rights reserved.
                </p>
                <div className="flex justify-center gap-4 mt-2">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <Facebook className="text-gray-400 hover:text-white" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <Instagram className="text-gray-400 hover:text-white" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <Twitter className="text-gray-400 hover:text-white" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
