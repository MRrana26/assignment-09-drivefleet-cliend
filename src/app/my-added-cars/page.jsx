import Image from 'next/image';
import React from 'react';

const MyAddedCars = async () => {
    const res = await fetch('http://localhost:8000/user-add-cars');
    const userCars = await res.json();

    return (
        <div className="container mx-auto px-4 py-8 max-w-5xl">
           
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-950 dark:text-white">My Added Cars</h1>
                <p className="text-gray-500 text-sm mt-1">Manage and track your vehicle listings on the platform.</p>
            </div>

            
            <div className="space-y-5">
                {
                    userCars.map(userCar => {
                        const { 
                            _id, carName, dailyPrice, carType, imageUrl, 
                            seatCapacity, pickupLocation, availabilityStatus, description
                        } = userCar;

                        return (
                            <div 
                                key={_id} 
                                className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col md:flex-row gap-6 items-start"
                            >
                                
                                <div className="w-full md:w-56 h-36 relative bg-gray-50 dark:bg-slate-800 rounded-xl overflow-hidden">
                                    <Image
                                        src={imageUrl}
                                        alt={carName}
                                        fill
                                        sizes="(max-w-768px) 100vw, 224px"
                                        className="object-cover"
                                    />
                                </div>

                
                                <div className="flex-1 w-full">
                                    <div className="flex flex-wrap justify-between items-start gap-2">
                                        <div>
                                            <h2 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">{carName}</h2>
                                            <span className="inline-flex mt-1 items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300">
                                                {carType}
                                            </span>
                                        </div>
                                        
                                        <div className="text-right">
                                            <p className="text-xl font-extrabold text-blue-600 dark:text-blue-400">${dailyPrice}</p>
                                            <p className="text-xs text-gray-400 dark:text-gray-500">per day</p>
                                        </div>
                                    </div>

                                    <p className="text-gray-500 dark:text-slate-400 text-sm mt-3 line-clamp-2 leading-relaxed">
                                        {description}
                                    </p>

                            
                                    <div className="mt-4 pt-4 border-t border-gray-50 dark:border-slate-800/60 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-gray-500 dark:text-slate-400">
                                        <p>Seats: <span className="text-gray-800 dark:text-slate-200">{seatCapacity}</span></p>
                                        <p>Location: <span className="text-gray-800 dark:text-slate-200">{pickupLocation}</span></p>
                                        <p>
                                            Status: {' '}
                                            <span className={availabilityStatus === "Available" ? "text-emerald-600 font-semibold" : "text-rose-600 font-semibold"}>
                                                {availabilityStatus}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default MyAddedCars;