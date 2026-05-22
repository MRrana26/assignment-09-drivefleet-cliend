"use client"
import { authClient } from '@/lib/auth-client';
import { Button, DateField, Label } from '@heroui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaMapPin } from 'react-icons/fa';
import { MdEventSeat } from 'react-icons/md';
import { toast } from 'sonner';

const BookingCard = ({ car }) => {

    const { data: session } = authClient.useSession()
    const user = session?.user;
    

    const [departureDate, setDepartureDate] = useState(null)
    const {
        carName, carType, description, imageUrl,
        pickupLocation, price, seatCapacity, availabilityStatus
    } = car;

    const handleBooking = async () => {
        const bookingData = {
            userId: user?.id,
            userImage: user?.image,
            userName: user?.name,
            carName,
            price,
            imageUrl,
            carType,
            pickupLocation,
            seatCapacity,
            departureDate: new Date(departureDate)

        }
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            }, 
            body: JSON.stringify(bookingData)
        })
        const data = await res.json()
        toast.success(`${carName} Car booking successful!`)
    }


    return (
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

                    <div>
                        <DateField onChange={setDepartureDate} className="w-full py-3 rounded-xl" name="date">
                            <Label>Departure Date</Label>
                            <DateField.Group>
                                <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                            </DateField.Group>
                        </DateField>

                        <Button onClick={handleBooking} className="w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 shadow-sm bg-indigo-600 hover:bg-indigo-700 text-white active:scale-[0.99]">
                            Book This Car Now
                        </Button>
                    </div>
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
    );
};

export default BookingCard;