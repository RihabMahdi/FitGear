import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, FlaskRound, Watch, ChevronRight, ShoppingCart, Leaf } from 'lucide-react';
import Protein from './assets/Protein.jpg';
import Accessories from './assets/Accessories.jpg';
import { Package, Globe2, Wrench, Award } from 'lucide-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import pro from './assets/pro.jpg';
import yoga from './assets/yoga.jpg';
import Dumbbel from './assets/Dumbbell.jpg';
import bands from './assets/bands.jpg';
import Weight from './assets/Weights.jpg';
import Apparel from './assets/Apparel.jpg';
import Cardio from './assets/Cardio.jpg';
import Nutrition from './assets/Nutrition.jpg';
import Recovery from './assets/Recovery.jpg';
import DumbbellSet from './assets/DumbbellSet.jpg';
import AdjustableBench from './assets/AdjustableBench.jpg';
import BandsPack from './assets/BandsPack.jpg';
import Kettlebell from './assets/Kettlebell.jpg';
import BCAA from './assets/BCAA.jpg';
import ProteinPowder from './assets/ProteinPowder.jpg';
import Multivitamin from './assets/Multivitamin.jpg';
import PreWorkout from './assets/Pre-Workout.jpg';
import SmartF from './assets/SmartF.jpg';
import Gloves from './assets/Gloves.jpg';
import GymBag from './assets/GymBag..jpg';
import FoamRoller from './assets/FoamRoller.jpg';
import gift1 from './assets/gift1.jpg';
import gift2 from './assets/gift2.jpg';
import gift3 from './assets/gift3.jpg';
import gift4 from './assets/gift4.jpg';
import FlashSaleSection from './components/ProductFlash';
import CategorySection from './components/Products';









const benefits = [
    {
        icon: Package,
        title: "Free shipping over $200",
        description: "Enjoy the freedom of free shipping on orders over $200."
    },
    {
        icon: Globe2,
        title: "We ship worldwide",
        description: "Experience global reach with our worldwide shipping service."
    },
    {
        icon: Wrench,
        title: "Free repairs for life",
        description: "Rest easy knowing your purchase includes free repairs for life."
    },
    {
        icon: Award,
        title: "Satisfaction guaranteed",
        description: "Your satisfaction is our unwavering promise - guaranteed."
    }
];
const categories = [
    {
        name: "Exercise Equipment",
        icon: Dumbbell,
        products: [
            { id: 1, name: "Premium Dumbbell Set", description: "Versatile weights for strength training", price: 129.99, imageUrl: DumbbellSet },
            { id: 2, name: "Adjustable Bench", description: "Multi-position workout bench", price: 199.99, imageUrl: AdjustableBench },
            { id: 3, name: "Resistance Bands Pack", description: "Full-body workout accessories", price: 24.99, imageUrl: BandsPack },
            { id: 4, name: "Kettlebell Set", description: "Cast iron kettlebells for functional training", price: 89.99, imageUrl: Kettlebell },
        ]
    },
    {
        name: "Protein & Supplements",
        icon: FlaskRound,
        products: [
            { id: 5, name: "Whey Protein Powder", description: "High-quality protein supplement", price: 59.99, imageUrl: ProteinPowder },
            { id: 6, name: "Pre-Workout Energy Blend", description: "Boost your workout performance", price: 39.99, imageUrl: PreWorkout },
            { id: 7, name: "BCAA Capsules", description: "Support muscle recovery and growth", price: 29.99, imageUrl: BCAA },
            { id: 8, name: "Multivitamin Complex", description: "Essential nutrients for overall health", price: 19.99, imageUrl: Multivitamin },
        ]
    },
    {
        name: "Fitness Accessories",
        icon: Watch,
        products: [
            { id: 9, name: "Smart Fitness Tracker", description: "Monitor your workouts and health", price: 99.99, imageUrl: SmartF },
            { id: 10, name: "Foam Roller", description: "Relieve muscle tension and improve ", price: 34.99, imageUrl: FoamRoller },
            { id: 11, name: "Gym Bag", description: "Spacious bag for all your fitness gear", price: 49.99, imageUrl: GymBag },
            { id: 12, name: "Workout Gloves", description: "Protect your hands during weightlifting", price: 19.99, imageUrl: Gloves },
        ]
    }
];
const giftCards = [
    {
        id: 1,
        image: gift1,
        background: "bg-slate-200",
    },
    {
        id: 2,
        image: gift2,
        background: "bg-slate-200",
    },
    {
        id: 3,
        image: gift3,
        background: "bg-slate-200",
    },
    {
        id: 4,
        image: gift4,
        background: "bg-slate-200",
    },
];

const testimonials = [
    {
        id: 1,
        name: "Sophia C.",
        rating: 5,
        text: "This store is a game-changer! The quality of the gym equipment here is outstanding. I finally created my dream home gym thanks to their top-notch products!"
    },
    {
        id: 2,
        name: "Ethan J.",
        text: "The variety in this store is incredible. From weights to yoga mats, they have everything you need. I'm already planning my next visit for more fitness gear.",
        rating: 5
    },
    {
        id: 3,
        name: "Ava L.",
        text: "Their customer support is amazing! They helped me choose the perfect treadmill for my needs. This is my go-to store for all my fitness equipment. Highly recommend!",
        rating: 5
    }
];


export default function Home() {
    const marqueeRef = useRef(null);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);


    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const previousTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };


    useEffect(() => {
        const marquee = marqueeRef.current;
        let position = 0;
        const speed = 1;

        function step() {
            position -= speed;
            if (position <= -marquee.offsetWidth / 2) {
                position = 0;
            }
            marquee.style.transform = `translateX(${position}px)`;
            window.requestAnimationFrame(step);
        }

        window.requestAnimationFrame(step);
    }, []);


    return (
        <div className='py-3'>

            <div className="rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 py-8">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div className="relative rounded-lg overflow-hidden shadow-xl transform transition-all hover:scale-105">
                        <img
                            src={pro}
                            alt="Premium Fitness Equipment"
                            className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                        />
                        {/* Navigation Controls */}
                        <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-6 transform -translate-y-1/2">
                            <button
                                className="p-3 bg-white bg-opacity-60 hover:bg-opacity-100 rounded-full shadow-md transition-all"
                                aria-label="Previous image"
                            >
                                <ArrowLeft className="w-6 h-6 text-gray-800" />
                            </button>
                            <div className="flex gap-2">
                                <div className="w-12 h-1 bg-gray-900 rounded-full transition-all"></div>
                                <div className="w-12 h-1 bg-gray-300 rounded-full transition-all"></div>
                            </div>
                            <button
                                className="p-3 bg-white bg-opacity-60 hover:bg-opacity-100 rounded-full shadow-md transition-all"
                                aria-label="Next image"
                            >
                                <ArrowRight className="w-6 h-6 text-gray-800" />
                            </button>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-6 text-center md:text-left">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-400">Unmatched Quality</h3>
                            <h2 className="text-4xl font-extrabold text-white mt-4">Our Commitment to Excellence</h2>
                        </div>

                        <p className="text-lg text-gray-300 leading-relaxed">
                            Experience premium fitness equipment with FitGear. Our products meet the highest quality standards, and we guarantee your satisfaction. For trusted fitness equipment and supplements, choose FitGear.
                        </p>

                        <button className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-8 py-4 rounded-lg hover:from-gray-800 hover:to-gray-600 transition-all flex items-center justify-center gap-3">
                            Explore FitGear
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>





            {/* Categories Section */}
            <section className="py-8 px-4 md:px-6 text-center mt-10">
                <h2 className="text-3xl font-bold mb-6 text-[#F2C1D1]">Shop our top collections</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <Link to="/equipment" className="group">
                        <div className="border rounded-lg p-4 text-center space-y-2 hover:shadow-md transition-shadow">
                            <Dumbbell className="w-8 h-8 mx-auto" />
                            <h3 className="font-semibold">Exercise Equipment</h3>
                            <p className="text-sm text-gray-600">Professional gear for your home gym</p>
                        </div>
                    </Link>
                    <Link to="/supplements" className="group">
                        <div className="border rounded-lg p-4 text-center space-y-2 hover:shadow-md transition-shadow">
                            <Leaf className="w-8 h-8 mx-auto" />
                            <h3 className="font-semibold">Protein & Supplements</h3>
                            <p className="text-sm text-gray-600">Fuel your performance</p>
                        </div>
                    </Link>
                    <Link to="/accessories" className="group">
                        <div className="border rounded-lg p-4 text-center space-y-2 hover:shadow-md transition-shadow">
                            <Watch className="w-8 h-8 mx-auto" />
                            <h3 className="font-semibold">Fitness Accessories</h3>
                            <p className="text-sm text-gray-600">Essential workout tools</p>
                        </div>
                    </Link>
                </div>
            </section>



            {/* Shop by Category */}
            <section className="py-8 px-4 md:px-6 text-center">
                <h2 className="text-3xl text-[#F2C1D1] font-bold mb-10">Shop by Category</h2>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                    {[
                        { name: "Weights", image: Weight },
                        { name: "Cardio", image: Cardio },
                        { name: "Recovery", image: Recovery },
                        { name: "Nutrition", image: Nutrition },
                        { name: "Accessories", image: Accessories },
                        { name: "Apparel", image: Apparel },
                    ].map((category, index) => (
                        <Link key={index} to={`/category/${category.name.toLowerCase()}`}>
                            <div className="text-center space-y-2">
                                <div className="w-24 h-24 mx-auto rounded-full bg-gray-600 flex items-center justify-center">
                                    <img
                                        src={category.image}
                                        alt={`Shop ${category.name}`}
                                        width={100}
                                        height={100}
                                        className="rounded-full"
                                    />
                                </div>
                                <p className="font-medium text-sm">{category.name}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>


            {/* Marquee */}
            <div className="overflow-hidden py-4 bg-violet-400 ">
                <div ref={marqueeRef} className="whitespace-nowrap text-black">
                    <span className="inline-block px-4">🏋️‍♂️ Get fit with FitGear!</span>
                    <span className="inline-block px-4">💪 Best equipment for your home gym</span>
                    <span className="inline-block px-4">🥇 Top-quality supplements</span>
                    <span className="inline-block px-4">🎉 New arrivals every week</span>
                    <span className="inline-block px-4">🏋️‍♂️ Get fit with FitGear!</span>
                    <span className="inline-block px-4">💪 Best equipment for your home gym</span>
                    <span className="inline-block px-4">🥇 Top-quality supplements</span>
                    <span className="inline-block px-4">🎉 New arrivals every week</span>
                </div>
            </div>



            {/* Flash Sale Section */}
            <FlashSaleSection categories={categories} />


            {/* Featured Products Grid */}
            <section className="py-8 px-4 md:px-6">
                <h2 className="text-3xl font-bold mb-10 text-[#F2C1D1] text-center ">Featured Products</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        {
                            name: "Premium Dumbbells",
                            image: Dumbbel,
                        },
                        {
                            name: "Whey Protein",
                            image: Protein,
                        },
                        {
                            name: "Resistance Bands",
                            image: bands,
                        },
                        {
                            name: "Yoga Mat",
                            image: yoga,
                        },
                    ].map((product, index) => (
                        <Link key={index} to={`/product/${index}`}>
                            <div className="border  rounded-lg overflow-hidden group cursor-pointer hover:shadow-md transition-all">
                                <div className="aspect-square relative">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        width={800}
                                        height={200}
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold group-hover:text-slate-300">{product.name}</h3>
                                    <p className="text-sm text-gray-300">Starting from $29.99</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>





            <div>
                <CategorySection categories={categories} />



                {/* Gift Cards Section */}
                <section className='py-9'>
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold mb-2 text-[#F2C1D1]">Gift Cards</h2>
                        <p className="text-gray-300">Send gift cards to your loved ones anywhere in the world.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
                        {giftCards.map((card) => (
                            <div
                                key={card.id}
                                className={`rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow ${card.background}`}
                            >
                                <div className="aspect-square relative group">
                                    <img
                                        src={card.image}
                                        alt={`Gift Card ${card.id}`}
                                        className="w-full h-full object-cover group-hover:brightness-90 transition-all"
                                    />
                                </div>

                                <button
                                    className="mt-4 w-full py-3 px-4 flex items-center justify-center gap-2 text-black font-bold hover:bg-black/5 transition-colors"
                                >
                                    <ShoppingCart className="w-4 h-4 my-auto" />
                                    <span className="my-auto">Buy gift card</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="relative py-4">
                    <h2 className="text-3xl font-bold mb-8 text-[#F2C1D1] text-center">Customer Reviews</h2>

                    <div className="bg-gray-300 w-1/2 mx-auto rounded-lg p-8">
                        <div className="max-w-xl mx-auto">
                            <div className="mb-4">
                                <p className="text-gray-700 text-lg italic mb-4">
                                    "{testimonials[currentTestimonial].text}"
                                </p>
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold">{testimonials[currentTestimonial].name}</span>
                                    <div className="flex">
                                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                                            <span key={i} className="text-yellow-400">★</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div className="flex justify-center gap-4 mt-6">
                        <button
                            onClick={previousTestimonial}
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                            aria-label="Next testimonial"
                        >
                            <ArrowRight className="w-6 h-6" />
                        </button>
                    </div>


                </section>
            </div>

            <div className="py-12 px-4 border-t border-b border-gray-200 ">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                <benefit.icon className="w-8 h-8 mb-4 text-gray-200" strokeWidth={1.5} />
                                <h3 className="text-sm font-semibold mb-2">{benefit.title}</h3>
                                <p className="text-sm text-gray-300 leading-relaxed">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-slate-300 py-12 mt-10 mx-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-lg font-semibold text-black">
                        We're here to assist you!
                    </h2>
                    <h1 className="text-3xl font-bold text-black mt-2">
                        Get in Touch with Us
                    </h1>
                    <p className="text-black mt-4">
                        Have questions, concerns, or just want to say hello? We'd love to hear from you. Reach out to our dedicated support team using the options below.
                    </p>
                    <div className="mt-6 flex justify-center gap-4">
                        <button className="flex items-center px-6 py-3 text-white bg-red-600 rounded-md hover:bg-pink-700 transition">
                            <span className="mr-2">➜</span> Help Resources
                        </button>
                        <button className="flex items-center px-6 py-3 text-white bg-green-600 rounded-md hover:bg-pink-700 transition">
                            <span className="mr-2">➜</span> Contact Support
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
}

