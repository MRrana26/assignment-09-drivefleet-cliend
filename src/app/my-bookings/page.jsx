

const MyBookingsPage = () => {
    return (
        <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8">
                
        
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-950">My Bookings</h1>
                    <p className="text-gray-500 text-sm mt-1">Review and manage your current vehicle rental reservations.</p>
                </div>

             
                <div className="overflow-x-auto border border-gray-100 rounded-xl">
                    <table className="w-full text-left border-collapse bg-white text-sm">
                        
                        
                        <thead className="bg-slate-50 text-gray-700 font-semibold border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-4">Car Name</th>
                                <th className="px-6 py-4">Booking Date</th>
                                <th className="px-6 py-4">Driver Service</th>
                                <th className="px-6 py-4">Total Price</th>
                                <th className="px-6 py-4 text-right">Status</th>
                            </tr>
                        </thead>

                        
                        <tbody className="divide-y divide-gray-100 text-gray-600">
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="px-6 py-4 font-semibold text-gray-900">
                                    Tesla Model S Premium
                                </td>
                                <td className="px-6 py-4">
                                    19/05/2026
                                </td>
                                <td className="px-6 py-4">
                                    No (Self-Drive)
                                </td>
                                <td className="px-6 py-4 font-bold text-indigo-600">
                                    $85
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
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