

const HowItWorks = () => {
    return (
        <section className="container mx-auto p-6">
            <div className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-900 shadow-sm p-6 md:p-10 space-y-8 transition-colors">

                {/* Section Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-950 dark:text-white">How It Works</h2>
                    <p className="text-gray-500 dark:text-slate-400 text-sm mt-2 max-w-md mx-auto">
                        Rent your dream car in three simple steps without any complex paperwork or long queues.
                    </p>
                </div>

                {/* Steps Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

                    {/* Step 1 */}
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 relative transition-colors">
                        <span className="absolute -top-4 left-6 bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shadow-md">
                            1
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-slate-100 mb-2 mt-2">Select Your Vehicle</h3>
                        <p className="text-gray-500 dark:text-slate-400 text-xs leading-relaxed">
                            Browse through our extensive fleet of available sedans, luxury models, or spacious SUVs to find your perfect match.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 relative transition-colors">
                        <span className="absolute -top-4 left-6 bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shadow-md">
                            2
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-slate-100 mb-2 mt-2">Pick Dates & Options</h3>
                        <p className="text-gray-500 dark:text-slate-400 text-xs leading-relaxed">
                            Choose your preferred pickup location, specify reservation duration, and select if a professional driver is needed.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 relative transition-colors">
                        <span className="absolute -top-4 left-6 bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shadow-md">
                            3
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-slate-100 mb-2 mt-2">Confirm & Drive</h3>
                        <p className="text-gray-500 dark:text-slate-400 text-xs leading-relaxed">
                            Complete your booking safely, review the reservation details under your dashboard, and enjoy your premium ride.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HowItWorks;