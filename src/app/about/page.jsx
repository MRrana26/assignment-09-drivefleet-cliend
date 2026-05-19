import Link from "next/link";
import { ShieldCheck, Zap, Sliders, DollarSign } from "lucide-react";

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-200 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm p-6 md:p-10 space-y-8">
                
                {/* Header Section */}
                <div className="border-b border-slate-200 dark:border-slate-700 pb-6 text-center sm:text-left">
                    <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                        About <span className="text-blue-600">Drive</span><span className="text-red-600">Fleet</span>
                    </h1>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm mt-2">
                        Your Trusted Partner for Modern Car Rentals
                    </p>
                </div>

                {/* Content Section */}
                <div className="space-y-6 text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                    <p>
                        Welcome to <strong className="text-slate-900 dark:text-white font-semibold"><span className="text-blue-600">Drive</span><span className="text-red-600">Fleet</span></strong>, a premium full-stack car rental platform engineered to deliver seamless travel experiences. Whether you need a spacious SUV for a family getaway, a sleek Sedan for executive business trips, or an economical Hatchback for city exploration, our platform connects you with the perfect vehicle instantly.
                    </p>

                    <p>
                        Our mission is to simplify vehicle booking through modern digital solutions. By implementing secure user authentication, interactive dashboard panels, and direct owner listing controls, we ensure complete transparency and safety for both vehicle owners and renters.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="pt-4">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Why Choose <span className="text-blue-600">Drive</span><span className="text-red-600">Fleet</span>?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        
                        <div className="p-5 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200/60 dark:border-slate-700 flex gap-4">
                            <ShieldCheck className="w-6 h-6 text-indigo-600 dark:text-indigo-400 " />
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm md:text-base">Verified Security</h3>
                                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-1">Protected with secure JWT access tokens and private route configurations.</p>
                            </div>
                        </div>

                        <div className="p-5 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200/60 dark:border-slate-700 flex gap-4">
                            <Zap className="w-6 h-6 text-indigo-600 dark:text-indigo-400 " />
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm md:text-base">Real-Time Tracking</h3>
                                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-1">Instant availability status adjustments via automated server logic counters.</p>
                            </div>
                        </div>

                        <div className="p-5 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200/60 dark:border-slate-700 flex gap-4">
                            <Sliders className="w-6 h-6 text-indigo-600 dark:text-indigo-400 " />
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm md:text-base">Full Operator Control</h3>
                                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-1">Easily list, modify details, or clear your vehicle offerings at any moment.</p>
                            </div>
                        </div>

                        <div className="p-5 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200/60 dark:border-slate-700 flex gap-4">
                            <DollarSign className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm md:text-base">Zero Hidden Fees</h3>
                                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-1">Transparent daily rent pricing with explicit optional driver support fields.</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Footer Action Section */}
                <div className="pt-6 border-t border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-slate-500 dark:text-slate-400 text-center sm:text-left">
                        Ready to start your journey? Explore our available fleets now.
                    </p>
                    <Link
                        href="/explore-cars"
                        className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3 text-sm font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-sm transition-colors duration-200"
                    >
                        Explore Cars
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default AboutPage;