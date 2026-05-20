

const AddCarPage = () => {
    return (
        <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-md border border-gray-100 dark:border-slate-800 p-6 md:p-8">
                
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-950 dark:text-white">Add a New Car Listing</h1>
                    <p className="text-gray-500 dark:text-slate-400 text-sm mt-1">Please fill in the fields below to list your vehicle on the platform.</p>
                </div>

                <form className="space-y-5">
                    <div className="form-control">
                        <label className="label font-semibold text-gray-700 dark:text-slate-300 text-sm">Car Name</label>
                        <input 
                            type="text" 
                            placeholder="e.g., Tesla Model S, Toyota RAV4" 
                            className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-gray-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-sm"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label font-semibold text-gray-700 dark:text-slate-300 text-sm">Daily Rent Price ($)</label>
                            <input 
                                type="number" 
                                placeholder="e.g., 85" 
                                className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-gray-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-sm"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label font-semibold text-gray-700 dark:text-slate-300 text-sm">Car Type</label>
                            <select className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 text-sm">
                                <option value="SUV" className="bg-white dark:bg-slate-900 text-gray-800 dark:text-white">SUV</option>
                                <option value="Sedan" className="bg-white dark:bg-slate-900 text-gray-800 dark:text-white">Sedan</option>
                                <option value="Hatchback" className="bg-white dark:bg-slate-900 text-gray-800 dark:text-white">Hatchback</option>
                                <option value="Luxury" className="bg-white dark:bg-slate-900 text-gray-800 dark:text-white">Luxury</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label font-semibold text-gray-700 dark:text-slate-300 text-sm">Image URL</label>
                        <input 
                            type="url" 
                            placeholder="https://imgbb.com/your-image-link" 
                            className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-gray-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-sm"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label font-semibold text-gray-700 dark:text-slate-300 text-sm">Seat Capacity</label>
                            <input 
                                type="number" 
                                placeholder="e.g., 5" 
                                className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-gray-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-sm"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label font-semibold text-gray-700 dark:text-slate-300 text-sm">Pickup Location</label>
                            <input 
                                type="text" 
                                placeholder="e.g., Banani, Dhaka" 
                                className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-gray-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-sm"
                            />
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label font-semibold text-gray-700 dark:text-slate-300 text-sm">Availability Status</label>
                        <select className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 text-sm">
                            <option value="Available" className="bg-white dark:bg-slate-900 text-gray-800 dark:text-white">Available</option>
                            <option value="Unavailable" className="bg-white dark:bg-slate-900 text-gray-800 dark:text-white">Unavailable</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label font-semibold text-gray-700 dark:text-slate-300 text-sm">Description</label>
                        <textarea 
                            rows="4" 
                            placeholder="Write comprehensive details about vehicle condition, features, performance..." 
                            className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-gray-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-sm h-28 resize-none"
                        ></textarea>
                    </div>

                    <div className="pt-2">
                        <button 
                            type="button" 
                            className="w-full sm:w-auto px-8 py-2.5 bg-indigo-600 dark:bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 dark:hover:bg-indigo-500 transition duration-200 text-sm"
                        >
                            Submit
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddCarPage;