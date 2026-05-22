"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';

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
            <h1 className="text-2xl font-bold mb-6 text-center">My Added Cars ({myCars.length})</h1>

            {myCars.length === 0 ? (
                <p className="text-center text-gray-500 py-10">You have not added any cars yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {myCars.map(car => (
                        <div key={car._id} className="border rounded-2xl p-4 shadow-sm bg-white dark:bg-slate-900">

                            <div className="w-full h-48 relative rounded-xl overflow-hidden mb-4">
                                <Image
                                    src={car.imageUrl}
                                    alt={car.carName}
                                    width={500} 
                                    height={500}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-xl font-bold">{car.carName}</h2>
                                    <span className="text-xs font-semibold px-2 py-1 bg-green-100 text-green-800 rounded-full">
                                        {car.availabilityStatus}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500">Type: {car.carType} | Seats: {car.seatCapacity}</p>
                                <p className="text-sm text-gray-600 line-clamp-2">{car.description}</p>
                                <div className="pt-2 border-t flex justify-between items-center text-sm">
                                    <span className="font-bold text-indigo-600">${car.price}/day</span>
                                    <span className="text-gray-400">Location: {car.pickupLocation}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyAddedCars;