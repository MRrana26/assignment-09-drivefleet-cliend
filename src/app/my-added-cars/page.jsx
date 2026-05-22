"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';
import { MdDeleteForever } from 'react-icons/md';
import { Button } from '@heroui/react';
import EditCarsDetails from '@/Components/EditCarsDetails';

const MyAddedCars = () => {

    const {
        data: session,
        isPending
    } = authClient.useSession();

    const [allCars, setAllCars] = useState([]);

    const [loadingCars, setLoadingCars] = useState(true);

    const currentUserEmail = session?.user?.email;


    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/available-cars`, {
            cache: "no-store",
        })
            .then((res) => res.json())
            .then((data) => {
                setAllCars(data);
                setLoadingCars(false);
            })
            .catch((err) => {
                console.error("Error fetching cars:", err);
                setLoadingCars(false);
            });
    }, []);


    if (isPending || loadingCars) {
        return <p className="text-center py-10">Loading...</p>;
    }

    if (!currentUserEmail) {
        return <p className="text-center py-10">Please log in to see your added cars.</p>;
    }

    const myCars = allCars.filter(car => car.userEmail === currentUserEmail);

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-800 dark:text-white">
                My Added Cars ({myCars.length})
            </h1>

            {myCars.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 bg-gray-50 dark:bg-slate-800 rounded-2xl border-2 border-dashed border-gray-200 dark:border-slate-700">
                    <p className="text-center text-gray-500 dark:text-gray-400 text-lg font-medium">
                        You have not added any cars yet.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {myCars.map(car => (
                        <div
                            key={car._id}
                            className="border border-gray-100 dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 bg-white dark:bg-slate-900 flex flex-col justify-between"
                        >
                            <div>

                                <div className="w-full h-48 relative rounded-xl overflow-hidden mb-5 bg-gray-100 dark:bg-slate-800">
                                    <Image
                                        src={car.imageUrl}
                                        alt={car.carName}
                                        width={500}
                                        height={500}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>


                                <div className="space-y-3">
                                    <div className="flex justify-between items-start gap-2">
                                        <h2 className="text-xl font-bold text-gray-800 dark:text-white line-clamp-1">
                                            {car.carName}
                                        </h2>
                                        <span className="text-xs font-semibold px-2.5 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-full whitespace-nowrap">
                                            {car.availabilityStatus}
                                        </span>
                                    </div>

                                    <p className="text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500">
                                        Type: {car.carType} • Seats: {car.seatCapacity}
                                    </p>

                                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 min-h-10">
                                        {car.description}
                                    </p>

                                    <div className="pt-3 border-t border-gray-100 dark:border-slate-800 flex justify-between items-center text-sm">
                                        <span className="text-lg font-black text-indigo-600 dark:text-indigo-400">
                                            ${car.price}<span className="text-xs font-normal text-gray-400">/day</span>
                                        </span>
                                        <span className="text-gray-500 dark:text-gray-400 text-xs font-medium max-w-[60%] truncate">
                                            📍 {car.pickupLocation}
                                        </span>
                                    </div>
                                </div>
                            </div>


                            <div className="flex items-center justify-between gap-4 mt-5 pt-3 border-t border-gray-50 dark:border-slate-800">
                                <EditCarsDetails car={car} />
                                <Button variant="danger" className="flex items-center justify-center gap-2 w-full py-2 rounded-xl text-sm font-semibold">
                                    <MdDeleteForever className="text-lg" />
                                    Delete
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyAddedCars;