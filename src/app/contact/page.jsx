"use client"

import { Button } from "@heroui/react";
import { IoIosSend } from "react-icons/io";

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-200 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-10">
                
                <div className="border-b border-slate-200 dark:border-slate-700 pb-6 text-center sm:text-left">
                    <span className="text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
                        Support Center
                    </span>
                    <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1 sm:text-4xl">
                        Get in Touch With Us
                    </h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-xl">
                        Have questions about dynamic bookings, fleet listings, or active rentals? <br />Our support team is here to help 24/7.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    
                    <div className="lg:col-span-1 space-y-4">
                        
                        <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                            <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">Our Headquarters</h3>
                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                DriveFleet Tower,<br />
                                Dhaka Uddan, Mohammadpur, Dhaka - 1207
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                            <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">Direct Support</h3>
                            <p className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold">hafezmasudranamn@gmail.com</p>
                            <p className="text-slate-400 text-xs mt-0.5">Response within 12 business hours</p>
                        </div>

                        <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                            <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">Emergency Hotline</h3>
                            <p className="text-slate-700 dark:text-slate-300 text-sm font-semibold">+880 1946-228026</p>
                            <p className="text-slate-400 text-xs mt-0.5">Available for active en-route rentals</p>
                        </div>

                    </div>

                    <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm p-6 sm:p-8">
                        
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Send Us a Message</h2>

                        <form className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-slate-600 dark:text-slate-400">Your Full Name</label>
                                    <input 
                                        type="text" 
                                        placeholder="Enter your name..." 
                                        className="w-full bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-100 text-sm p-3 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-900 transition-colors" 
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-slate-600 dark:text-slate-400">Email Address</label>
                                    <input 
                                        type="email" 
                                        placeholder="hafezmasudranamn@gmail.com" 
                                        className="w-full bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-100 text-sm p-3 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-900 transition-colors" 
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-slate-600 dark:text-slate-400">Subject / Inquiry Type</label>
                                <input 
                                    type="text" 
                                    placeholder="e.g., Booking Modifications, Listing Inquiries" 
                                    className="w-full bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-100 text-sm p-3 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-900 transition-colors" 
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-slate-600 dark:text-slate-400">Detailed Description</label>
                                <textarea 
                                    rows={4}
                                    placeholder="Please provide explicit details regarding your inquiry..." 
                                    className="w-full bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-100 text-sm p-4 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-900 transition-colors resize-none"
                                ></textarea>
                            </div>

                            <div className="pt-2">
                                <Button 
                                    type="submit" 
                                    className="w-full sm:w-auto inline-flex justify-center items-center gap-3 px-8 py-3 border border-transparent text-sm font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-sm transition-colors duration-200"
                                >
                                 Send  <IoIosSend />
                                </Button>
                            </div>
                        </form>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactPage;