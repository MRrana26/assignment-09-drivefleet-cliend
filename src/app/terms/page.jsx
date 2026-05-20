import Link from "next/link";

const TermsPage = () => {
    return (
        <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-slate-800 dark:bg-slate-900">

                {/* Header Section */}
                <div className="bg-indigo-600 dark:bg-slate-500 px-6 py-8 md:p-10 text-center">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                        Terms & Conditions
                    </h1>
                    <p className="text-indigo-100 text-sm md:text-base">
                        Last Updated: May 2026 | Welcome to DriveFleet Car Rental Platform
                    </p>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-10 space-y-8 text-gray-700 leading-relaxed">

                    <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 border-b pb-2  border-slate-100">
                            1. Acceptance of Agreement
                        </h2>
                        <p className="text-sm dark:text-slate-400 md:text-base">
                            By accessing and creating an account on DriveFleet, you agree to comply with and be bound by these terms. If you do not agree with any part of these terms, you must not use our vehicle rental services.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 border-b pb-2 border-slate-100">
                            2. User Accounts & Security
                        </h2>
                        <p className="text-sm dark:text-slate-400 md:text-base mb-2">
                            To list or rent a car, you must complete our secure authentication process. You are entirely responsible for:
                        </p>
                        <ul className="list-disc dark:text-slate-400 pl-5 space-y-1 text-sm md:text-base">
                            <li>Maintaining the confidentiality of your credentials and JWT authentication tokens.</li>
                            <li>Providing genuine contact details, including full name, verified photo URL, and email.</li>
                            <li>Ensuring that all vehicle listings uploaded under your profile contain completely authentic specifications.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 border-b pb-2 border-slate-100">
                            3. Booking & Atomic Increment Policy
                        </h2>
                        <p className="text-sm md:text-base dark:text-slate-400">
                            Once a car reservation is confirmed via our system, the real-time booking counter is automatically incremented using database configurations. Any false booking requests or immediate unverified cancellations may lead to permanent account suspension.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 border-b pb-2 border-slate-100">
                            4. Listing & Dynamic Modification CRUD
                        </h2>
                        <p className="text-sm md:text-base dark:text-slate-400">
                            Car owners retain full rights to update pricing, description, availability, and pickup locations of their vehicles. However, modifying a vehicles specifications while a booking is actively pending or running is strictly prohibited.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 border-b pb-2 border-slate-100">
                            5. Limitation of Liability
                        </h2>
                        <p className="text-sm md:text-base dark:text-slate-400">
                            DriveFleet provides an open system for matching vehicle listings with potential renters. We are not liable for any mechanical failures, route delays, or unexpected accidents occurring during the physical rental timeframe.
                        </p>
                    </div>

                </div>

                {/* Footer Section */}
                <div className="bg-slate-50 px-6 py-6 md:px-10 flex flex-col sm:flex-row items-center justify-between border-t border-gray-100 gap-4 dark:bg-slate-900">
                    <span className="text-xs md:text-sm text-gray-500 text-center sm:text-left dark:text-slate-400">
                        Have questions about our terms? Please contact our 24/7 support fleet.
                    </span>
                    <Link
                        href="/"
                        className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 border border-transparent text-sm font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-sm transition-colors duration-200
                        "
                    >
                        Back to Home
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default TermsPage;