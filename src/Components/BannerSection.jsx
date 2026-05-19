"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const BannerSection = () => {
    return (
        <section className="py-12 sm:py-14 md:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12 lg:gap-16">

                    <div className="flex-1 flex justify-center w-full">
                        <div className="w-full max-w-90 sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">

                            <Swiper
                                modules={[Navigation, Autoplay]}
                                navigation={true}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                className="rounded-xl overflow-hidden"
                            >
                                <SwiperSlide>
                                    <Image
                                        src="/banner-car-1.png"
                                        width={600}
                                        height={400}
                                        alt="Luxury car"
                                        className="w-full h-auto object-cover"
                                        priority
                                    />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <Image
                                        src="/banner-car-2.png"
                                        width={600}
                                        height={400}
                                        alt="Luxury car"
                                        className="w-full h-auto object-cover"
                                    />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <Image
                                        src="/banner-car-3.png"
                                        width={600}
                                        height={400}
                                        alt="Luxury car"
                                        className="w-full h-auto object-cover"
                                    />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <Image
                                        src="/banner-car-4.png"
                                        width={600}
                                        height={400}
                                        alt="Luxury car"
                                        className="w-full h-auto object-cover"
                                    />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <Image
                                        src="/banner-car-5.png"
                                        width={600}
                                        height={400}
                                        alt="Luxury car"
                                        className="w-full h-auto object-cover"
                                    />
                                </SwiperSlide>

                            </Swiper>

                        </div>
                    </div>

                    <div className="flex-1 text-center md:text-left w-full">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 leading-tight">
                            <span className="text-blue-800">Drive</span>
                            <span className="text-red-600">Fleet</span>
                        </h1>

                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 mb-4 md:mb-5 leading-snug">
                            Your Journey, Our Wheels
                        </h2>

                        <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                            Find the perfect car for any occasion - from daily commutes to weekend getaways.
                            Affordable rates, flexible bookings, and a wide range of vehicles just a click away.
                        </p>

                        <Link href="/explore-cars">
                            <Button className="bg-blue-600 text-white px-5 sm:px-6 md:px-8 py-3 md:py-4 text-sm sm:text-base md:text-lg rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 w-full sm:w-auto">
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