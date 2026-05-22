import CarGrid from "@/Components/CarGrid";


const ExploreCarsPage = async () => {
  let availableCars = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/available-cars`, {
      cache: "no-store",
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || `Error: ${res.status} ${res.statusText}`);
    }

    availableCars = await res.json();

  } catch (error) {
    return (
      <div className="container mx-auto p-6 text-center py-20">
        <p className="text-red-500 font-medium">Failed to load cars. Please try again later.</p>
      </div>
    );
  }

 
  return (
    <div className="container mx-auto p-6">
      <div className="my-8 text-center">
        <h1 className="text-2xl font-bold text-slate-950 dark:text-white">
          Explore Our Premium Fleet
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
          Choose from our highly maintained vehicles for your next journey.
        </p>
      </div>
      <CarGrid availableCars={availableCars} />
    </div>
  );
};

export default ExploreCarsPage;