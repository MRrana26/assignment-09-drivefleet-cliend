import Link from "next/link";
import { ShieldCheck, Zap, Sliders, DollarSign } from "lucide-react";

const AboutSection = () => {
    return (
        <div className="container mx-auto p-6">
            <div className="">

                {/* Features Grid */}
                <div className="pt-4">
                    <h2 className="text-xl text-center font-bold text-slate-900 dark:text-white mb-6">Why Choose <span className="text-blue-600">Drive</span><span className="text-red-600">Fleet</span>?</h2>
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
                        href="/about"
                        className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3 text-sm font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-sm transition-colors duration-200"
                    >
                        Details
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default AboutSection;