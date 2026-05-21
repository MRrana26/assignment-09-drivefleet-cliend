import Image from "next/image";
import Link from "next/link";


const ExploreCarsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/available-cars`)
  const availableCars = await res.json()

  return (
    <div className="container mx-auto p-6">

      <div className="my-8 text-center">
        <h1 className="text-2xl font-bold text-slate-950 dark:text-white">Explore Our Premium Fleet</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Choose from our highly maintained vehicles for your next journey.</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by car name..."
          className="w-full sm:max-w-xs p-2.5 text-sm bg-white dark:bg-slate-900 text-slate-950 dark:text-white rounded-lg border border-slate-200 dark:border-slate-800 outline-none focus:border-indigo-500 dark:focus:border-indigo-500"
        />
        <select className="w-full sm:max-w-xs p-2.5 text-sm bg-white dark:bg-slate-900 text-slate-950 dark:text-white rounded-lg border border-slate-200 dark:border-slate-800 outline-none focus:border-indigo-500 dark:focus:border-indigo-500">
          <option value="all" className="bg-white dark:bg-slate-900">All Vehicle Types</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {
          availableCars.map(availableCar => {
            const { _id, carName, price, carType, imageUrl, seatCapacity, pickupLocation, availabilityStatus, description } = availableCar;
            return (
              <div key={_id} className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 flex flex-col justify-between">

                <div>
                  <div className="relative h-48 w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                    
                    <Image
                      src={imageUrl}
                      alt={carName}
                      width={500}
                      height={600}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <span className="absolute top-3 right-3 bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm backdrop-blur-sm">
                      {availabilityStatus}
                    </span>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-base font-bold text-slate-950 dark:text-white">{carName}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-1.5 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">$ {price}</span>
                    <span className="text-xs text-slate-400 dark:text-slate-500"> / day</span>
                  </div>
                  <Link
                    href={`/explore-cars/${_id}`}
                    className="text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 px-4 py-2 rounded-lg transition-colors"
                  >
                    View Details
                  </Link>
                </div>

              </div>
            );
          })
        }

      </div>
    </div>
  );
};

export default ExploreCarsPage;