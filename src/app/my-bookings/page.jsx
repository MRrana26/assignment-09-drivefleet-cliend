const MyBookingsPage = () => {
    return (
        <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-800 p-5 sm:p-6 md:p-8">
                
                <div className="mb-6 sm:mb-8">
                    <h1 className="text-xl sm:text-2xl font-bold text-gray-950 dark:text-white">My Bookings</h1>
                    <p className="text-gray-500 dark:text-slate-400 text-xs sm:text-sm mt-1">Review and manage your current vehicle rental reservations.</p>
                </div>

                <div className="overflow-x-auto bg-white rounded-xl border border-gray-200 dark:border-slate-800  dark:bg-slate-900">
                    <table className="min-w-125 w-full text-left border-collapse bg-white dark:bg-slate-900 text-xs sm:text-sm">
                        
                        <thead className="bg-slate-50 dark:bg-slate-950 text-gray-700 dark:text-slate-300 font-semibold border-b border-gray-200 dark:border-slate-800">
                            <tr>
                                <th className="px-4 py-3 sm:px-6 sm:py-4">Car Name</th>
                                <th className="px-4 py-3 sm:px-6 sm:py-4">Booking Date</th>
                                <th className="px-4 py-3 sm:px-6 sm:py-4">Driver Service</th>
                                <th className="px-4 py-3 sm:px-6 sm:py-4">Total Price</th>
                                <th className="px-4 py-3 sm:px-6 sm:py-4 text-right">Status</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-100 dark:divide-slate-800 bg-white dark:bg-slate-900 text-gray-600 dark:text-slate-400">
                            <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-950/80 transition-colors">
                                <td className="px-4 py-3 sm:px-6 sm:py-4 font-semibold text-gray-900 dark:text-white break-words">
                                    Tesla Model S Premium
                                </td>
                                <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap">
                                    19/05/2026
                                </td>
                                <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap">
                                    No (Self-Drive)
                                </td>
                                <td className="px-4 py-3 sm:px-6 sm:py-4 font-bold text-indigo-600 dark:text-indigo-400 whitespace-nowrap">
                                    $85
                                </td>
                                <td className="px-4 py-3 sm:px-6 sm:py-4 text-right">
                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-[11px] sm:text-xs font-medium bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-900/60 whitespace-nowrap">
                                        Confirmed
                                    </span>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>

            </div>
        </div>
    );
};

export default MyBookingsPage;