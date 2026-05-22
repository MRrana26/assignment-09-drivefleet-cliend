// Components/CarGrid.jsx  — Client Component
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdCategory, MdEventSeat } from "react-icons/md";
import { FaMapPin } from "react-icons/fa";

const CarGrid = ({ availableCars }) => {

  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  const carTypes = ["all", ...new Set(availableCars.map((c) => c.carType))];

  const filteredCars = availableCars.filter((car) => {
    const matchesSearch = car.carName
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesType =
      selectedType === "all" || car.carType === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by car name..."
          className="w-full sm:max-w-xs p-2.5 text-sm dark:bg-accent bg-white"
        />
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="bg-white dark:bg-accent"
        >
          {carTypes.map((type) => (
            <option key={type} value={type} className="bg-white dark:bg-slate-900 capitalize">
              {type === "all" ? "All Vehicle Types" : type}
            </option>
          ))}
        </select>
      </div>

      
      {filteredCars.length === 0 && (
        <div className="text-center py-16 text-slate-400 dark:text-slate-500">
          <p className="text-lg font-medium">No cars found</p>
          <p className="text-sm mt-1">Try a different search or filter</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCars.map((availableCar) => {
          const {
            _id, carName, price, carType, imageUrl,
            seatCapacity, pickupLocation, availabilityStatus, description,
          } = availableCar;

          return (
            <div
              key={_id}
              className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                  <Image
                    src={imageUrl}
                    alt={carName}
                    width={500}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                 
                  <span
                    className={`absolute top-3 right-3 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm backdrop-blur-sm ${
                      availabilityStatus === "Available"
                        ? "bg-emerald-600"
                        : "bg-rose-500"
                    }`}
                  >
                    {availabilityStatus}
                  </span>
                </div>

                <div className="mt-4">
                  <h3 className="text-base font-bold text-slate-950 dark:text-white">
                    {carName}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-1.5 leading-relaxed">
                    {description}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 dark:border-gray-800">
                  <div className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400">
                    <MdEventSeat className="text-lg text-gray-400 dark:text-gray-500" />
                    <span>{seatCapacity} Seats</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400">
                    <MdCategory className="text-lg text-gray-400 dark:text-gray-500" />
                    <span className="capitalize">{carType}</span>
                  </div>
                </div>

                
                <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
                  <FaMapPin className="text-xs" />
                  <span>{pickupLocation}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                    $ {price}
                  </span>
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
        })}
      </div>
    </>
  );
};

export default CarGrid;