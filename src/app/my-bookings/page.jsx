import BookingCancelAlert from '@/Components/BookingCancelAlert';
import { auth } from '@/lib/auth';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';
import { FaArrowRotateLeft } from 'react-icons/fa6';

const MyBookingCar = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`)
    const bookings = await res.json()
    console.log(bookings)

    return (
        <div className="max-w-4xl mx-auto p-4 space-y-4">
            <div className='text-center'>
                <h1 className="text-2xl font-bold">My Booking {bookings.length}</h1>
            </div>
            {
                bookings && bookings.length > 0 ? (
                    bookings.map(booking => (
                        <div
                            key={booking._id}
                            className="flex flex-col sm:flex-row items-center gap-6 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800/80 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 hover:border-b-blue-700 hover:border-2"
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

                                <div>
                                    <p className="flex items-center gap-1">
                                        <span className="font-semibold text-gray-700 dark:text-slate-300">Price: $</span> {booking.price}
                                    </p>

                                    <p className="text-xs text-gray-400 dark:text-slate-500 pt-1">
                                        Departure: {booking.departureDate ? new Date(booking.departureDate).toLocaleDateString() : 'N/A'}
                                    </p>
                                </div>
                            </div>

                            <div className="flex sm:flex-col gap-2 w-full sm:w-auto justify-end">
                                <BookingCancelAlert bookingId={booking._id} />
                            </div>
                        </div>
                    ))
                ) : (
                    <h1 className="text-center text-xl font-semibold text-gray-500 dark:text-slate-400 py-10 flex gap-2 items-center">
                        <FaArrowRotateLeft /> No data found
                    </h1>
                )
            }
        </div>
    );
};

export default MyBookingCar;