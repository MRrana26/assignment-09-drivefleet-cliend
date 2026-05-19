import Link from "next/link";

const ExploreCarsPage = () => {
  return (
    <div className="min-h-screen p-6 bg-slate-50 text-slate-800">
      
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-950">Explore Our Premium Fleet</h1>
        <p className="text-slate-500 text-sm mt-1">Choose from our highly maintained vehicles for your next journey.</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input 
          type="text" 
          placeholder="Search by car name..." 
          className="w-full sm:max-w-xs p-2.5 text-sm bg-white rounded-lg border border-slate-200 outline-none focus:border-indigo-500"
        />
        <select className="w-full sm:max-w-xs p-2.5 text-sm bg-white rounded-lg border border-slate-200 outline-none focus:border-indigo-500">
          <option value="all">All Vehicle Types</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div className="bg-white rounded-xl border border-slate-200 p-4 flex flex-col justify-between">
          
          <div>
            <div className="h-44 bg-slate-100 rounded-lg relative flex items-center justify-center text-slate-400 text-sm">
              Vehicle Image
              <span className="absolute top-3 right-3 bg-emerald-600 text-white text-xs font-semibold px-2 py-0.5 rounded">
                Available
              </span>
            </div>

            <div className="mt-4">
              <h3 className="text-base font-bold text-slate-950">Tesla Model S Premium</h3>
              <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                Experience ultimate electric luxury with autopilot features, maximum safety parameters, and premium high-fidelity sound systems.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
            <div>
              <span className="text-lg font-bold text-indigo-600">$85</span>
              <span className="text-xs text-slate-400"> / day</span>
            </div>
            <Link 
              href={`explore-cars/:id`} 
              className="text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition-colors"
            >
              View Details
            </Link>
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default ExploreCarsPage;