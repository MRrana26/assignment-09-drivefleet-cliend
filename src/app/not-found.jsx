"use client";

import Link from 'next/link';
import { Button } from '@heroui/react';
import { FaHome } from 'react-icons/fa';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-200 px-4">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                    Oops! Page Not Found
                </h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Sorry, the page you are looking for does not exist or has been moved.
                </p>


                <Link href={'/'}>
                    <Button
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                        <FaHome /> Back to Home
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;