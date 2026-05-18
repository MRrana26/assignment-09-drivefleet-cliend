"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const BannerSection = () => {

    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row  items-center gap-8 md:gap-12">

                    <div className="flex-1 flex justify-center">
                        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
                             <Image src={'/banner-logo.png'} width={600} height={400} alt="Luxury car" />
                        </div>
                    </div>


                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            <span className="text-blue-800">Drive</span>
                            <span className="text-red-600">Fleet</span>
                        </h1>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                            Your Journey, Our Wheels
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg mb-8 max-w-2xl mx-auto md:mx-0">
                            Find the perfect car for any occasion - from daily commutes to weekend getaways.
                            Affordable rates, flexible bookings, and a wide range of vehicles just a click away.
                        </p>
                        <Link href="/explore-cars">
                            <Button className="bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
                                Explore Cars
                            </Button>
                        </Link>
                    </div>



                </div>
            </div>
        </section>
    );
};

export default BannerSection;