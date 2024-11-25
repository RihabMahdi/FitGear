import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import { CartProvider } from './context/CartContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'FitGear - Your One-Stop Shop for Fitness',
    description: 'Quality gym equipment, fitness accessories, and supplements',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <CartProvider>
                    <div className="flex flex-col min-h-screen bg-gray-100">
                        <Header />
                        <main className="flex-grow">
                            {children}
                        </main>
                        <Footer />
                    </div>
                </CartProvider>
            </body>
        </html>
    )
}
