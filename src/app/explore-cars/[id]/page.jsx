// app/explore-cars/[id]/page.jsx
import { auth } from '@/lib/auth';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaMapPin } from 'react-icons/fa';
import { IoArrowBackCircle } from 'react-icons/io5';
import { MdEventSeat } from 'react-icons/md';

const CarDetailsPage = async ({ params }) => {
    const { id } = await params;
    const { token } = await auth.api.getToken({
        headers: await headers()
    });


    let car = null;

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/available-cars/${id}`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        });

        if (!res.ok) {
            throw new Error("Failed to fetch car details");
        }

        car = await res.json();
    } catch (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-red-500 font-medium text-lg">Failed to load car details.</p>
                    <Link href="/explore-cars">
                        <Button className="mt-4">
                            <IoArrowBackCircle /> Back to Explore
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    const {
        carName, carType, description, imageUrl,
        pickupLocation, price, seatCapacity, availabilityStatus
    } = car;

    return (
        <div className="bg-gray-50 dark:bg-slate-950 min-h-screen py-10">
            <div className="container mx-auto px-4 max-w-6xl">

                <Link href={'/explore-cars'}>
                    <Button className={"mb-3"}>
                        <IoArrowBackCircle /> Back to Explore
                    </Button>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    <div className="lg:col-span-2 space-y-6">
                        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden bg-gray-100 dark:bg-slate-900 shadow-sm">
                            <Image
                                src={imageUrl || "https://images.unsplash.com/photo-1503376780353-7e6692767b70"}
                                alt={carName}
                                fill
                                sizes="(max-width: 1024px) 100vw, 750px"
                                priority
                                className="object-cover"
                            />
                        </div>

                        <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800/60 p-6 rounded-2xl shadow-sm">
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div>
                                    <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 rounded-full">
                                        {carType}
                                    </span>
                                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 tracking-tight">
                                        {carName}
                                    </h1>
                                </div>

                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${availabilityStatus === "Available"
                                        ? "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600"
                                        : "bg-rose-50 dark:bg-rose-950/30 text-rose-600"
                                    }`}>
                                     {availabilityStatus}
                                </span>
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-100 dark:border-slate-800/60">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                    About This Vehicle
                                </h3>
                                <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">
                                    {description}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800/60 p-6 rounded-2xl shadow-sm sticky top-6">

                            <div className="mb-6">
                                <p className="text-gray-400 dark:text-gray-500 text-xs uppercase font-semibold tracking-wider">
                                    Rental Price
                                </p>
                                <div className="flex items-baseline gap-1 mt-1">
                                    <span className="text-3xl font-black text-gray-950 dark:text-white">
                                        ${price}
                                    </span>
                                    <span className="text-gray-500 dark:text-slate-400 text-sm">/ day</span>
                                </div>
                            </div>

                            <div className="space-y-4 my-6 pt-4 border-t border-gray-100 dark:border-slate-800/60">
                                
                                <div className="flex justify-between text-sm">
                                    <span className="flex items-center gap-1.5 text-gray-500 dark:text-slate-400">
                                        <MdEventSeat /> Seating Capacity
                                    </span>
                                    <span className="font-bold text-gray-900 dark:text-white">
                                        {seatCapacity} Seats
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="flex items-center gap-1.5 text-gray-500 dark:text-slate-400">
                                        <FaMapPin /> Pickup Location
                                    </span>
                                    <span className="font-bold text-gray-900 dark:text-white">
                                        {pickupLocation}
                                    </span>
                                </div>
                            </div>

                           
                            {availabilityStatus === "Available" ? (
                                <Link href={`/bookings/${id}`}>
                                    <button className="w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 shadow-sm bg-indigo-600 hover:bg-indigo-700 text-white active:scale-[0.99]">
                                        Book This Car Now
                                    </button>
                                </Link>
                            ) : (
                                <button
                                    disabled
                                    className="w-full py-3 px-4 rounded-xl text-sm font-semibold bg-gray-200 dark:bg-slate-800 text-gray-400 dark:text-slate-600 cursor-not-allowed"
                                >
                                    Currently Unavailable
                                </button>
                            )}

                            <p className="text-center text-[11px] text-gray-400 dark:text-slate-500 mt-3">
                                Free cancellation up to 24 hours before pickup.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CarDetailsPage;