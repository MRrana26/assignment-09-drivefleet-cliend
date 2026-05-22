import { auth } from '@/lib/auth';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

const MyBookingCar = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`)
    const bookings = await res.json()
    console.log(bookings)

    return (<div className="max-w-4xl mx-auto p-4 space-y-4">
        {
            bookings?.map(booking => (
                <div
                    key={booking._id}
                    className="flex flex-col sm:flex-row items-center gap-6 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800/80 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                   
                    <div className="w-full sm:w-48 h-32 relative rounded-xl overflow-hidden bg-gray-50 dark:bg-slate-800">
                        <Image
                            src={booking.imageUrl} 
                            alt={booking.carName}
                            width={500}
                            height={500}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="flex-1 w-full space-y-2 text-center sm:text-left">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                            {booking.carName}
                        </h2>

                        <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1 text-sm text-gray-500 dark:text-slate-400">
                            <p className="flex items-center gap-1">
                                <span className="font-semibold text-gray-700 dark:text-slate-300">Seats:</span> {booking.seatCapacity}
                            </p>
                            <p className="flex items-center gap-1">
                                <span className="font-semibold text-gray-700 dark:text-slate-300">Location:</span> {booking.pickupLocation}
                            </p>
                        </div>

                        <p className="text-xs text-gray-400 dark:text-slate-500 pt-1">
                            Departure: {booking.departureDate ? new Date(booking.departureDate).toLocaleDateString() : 'N/A'}
                        </p>
                    </div>

                    
                    <div className="flex sm:flex-col gap-2 w-full sm:w-auto justify-end">
                        <Button
                            size="sm"
                            className="flex-1 sm:w-32 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-all"
                        >
                            View Details
                        </Button>
                        <Button
                            size="sm"
                            variant="bordered"
                            className="flex-1 sm:w-32 border-danger text-danger hover:bg-danger/10 font-medium rounded-xl transition-all"
                        >
                            Cancel Booking
                        </Button>
                    </div>
                </div>
            ))
        }
    </div>
    );
};

export default MyBookingCar;