"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoInstagram } from 'react-icons/io';

const Footer = () => {

    return (
        <footer className="bg-gray-900 text-white pt-12 pb-6 mt-auto">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

                    <div>
                        <div className='flex items-center mb-4'>
                            <Image
                                src={'/logo.png'}
                                width={40}
                                height={40}
                                alt='Car Logo'
                            />
                            <span className='text-2xl text-blue-800 font-bold ml-2'>Drive</span>
                            <span className='text-2xl text-red-600 font-bold'>Fleet</span>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed">
                            Your trusted car rental platform. Quality cars, transparent pricing, and zero paperwork.
                            Your next adventure starts here.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-blue-200">Useful Links</h3>
                        <ul className="space-y-2">

                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-400 hover:text-blue-400 transition duration-300">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href={'/explore-cars'}
                                    className="text-gray-400 hover:text-blue-400 transition duration-300">
                                    Explore Cars
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href={'/about'}
                                    className="text-gray-400 hover:text-blue-400 transition duration-300">
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href={'/contact'}
                                    className="text-gray-400 hover:text-blue-400 transition duration-300">
                                    Contact
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/terms"
                                    className="text-gray-400 hover:text-blue-400 transition duration-300">
                                    Terms & Conditions
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/privacy"
                                    className="text-gray-400 hover:text-blue-400 transition duration-300">
                                    Privacy Policy
                                </Link>
                            </li>

                        </ul>

                    </div>


                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-blue-200">Contact Information</h3>
                        <ul className="space-y-3">

                            <li className="flex items-start gap-3">
                                <span className="text-gray-400 text-sm">Block # A, Road # 3, House # 8, Dhaka Uddan, Mohammadpur, Dhaka - 1207</span>
                            </li>

                            <li className="flex items-center gap-3">
                                <span className="text-gray-400 text-sm">hafezmasudranamn@gmail.com</span>
                            </li>

                            <li className="flex items-center gap-3">
                                <span className="text-gray-400 text-sm">+880 1946 22 80 26</span>
                            </li>

                            <li className="flex items-center gap-3">
                                <span className="text-gray-400 text-sm">24/7 Customer Support</span>
                            </li>

                        </ul>

                    </div>

                    
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-blue-200">Social Icons</h3>
                        <div className="flex space-x-4 mb-6">
                            <a
                                href="https://www.facebook.com/MrRana26"
                                target="_blank"
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition duration-300"
                            >
                                <FaFacebook />
                            </a>

                            <a
                                href="https://x.com/MASUDURRAH73320"
                                target="_blank"
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-black transition duration-300"
                            >
                               <FaXTwitter />
                            </a>

                            <a
                                href="https://www.instagram.com/mrrana6526"
                                target="_blank"
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition duration-300"
                            >
                                <IoLogoInstagram />
                            </a>


                            <a
                                href="https://www.linkedin.com/in/dev-masudur-rahman"
                                target="_blank"
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition duration-300"
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href="https://www.youtube.com/@mr.masud26"
                                target="_blank"
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition duration-300"
                            >
                                <FaYoutube />

                            </a>
                        </div>

                        
                        <div>
                            <h4 className="text-sm font-semibold mb-2">Subscribe to Newsletter</h4>
                        </div>

                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 mt-6 text-center">
                    <p className="text-gray-400 text-sm">
                        @ copy 2026 DriveFleet Car Rental Platform. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;