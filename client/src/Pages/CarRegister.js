import React from "react";
import BackgroundLayout from "../Components/BackgroundLayout";

const CarRegister = () => {
    return(
        <BackgroundLayout title="Rent your vehicle" buttonText="Add">
            <div className="flex flex-row space-between">
                <input className="bg-gray-100 bg-opacity-50 w-1/2 text-black font-bold placeholder-gray-700 p-4 rounded-lg mx-10 my-3" type="text" placeholder="Vehicle Number" />
                <input className="bg-gray-100 bg-opacity-50 w-1/2 text-black font-bold placeholder-gray-700 p-4 rounded-lg mx-10 my-3" type="text" placeholder="Brand" />
            </div>
            <div className="flex flex-row space-between">  
                <input className="bg-gray-100 bg-opacity-50 w-1/2 text-black font-bold placeholder-gray-700 p-4 rounded-lg mx-10 my-3" type="text" placeholder="Model" />
                <input className="bg-gray-100 bg-opacity-50 w-1/2 text-black font-bold placeholder-gray-700 p-4 rounded-lg mx-10 my-3" type="number" placeholder="Mileage" />
            </div>
            <div className="flex flex-row space-between">
                <input className="bg-gray-100 bg-opacity-50 w-1/2 text-black font-bold placeholder-gray-700 p-4 rounded-lg mx-10 my-3" type="number" placeholder="Fuel Con.(km/L)" />
                <input className="bg-gray-100 bg-opacity-50 w-1/2 text-black font-bold placeholder-gray-700 p-4 rounded-lg mx-10 my-3" type="number" placeholder="Passenger Count" />
            </div>
            <div className="flex flex-col">
                <label className="text-white font-bold mx-10 my-6">Rent till</label>
                <input className="bg-gray-100 bg-opacity-50  text-black font-bold placeholder-gray-700 p-4 rounded-lg mx-10 mb-2" type="date"/>
            </div>
        </BackgroundLayout>
    );
};

export default CarRegister;