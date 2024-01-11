import React from "react";
import BackgroundLayout from "../Components/BackgroundLayout";

const Register = () => {
    return(
        <BackgroundLayout title="Register to ZONE RENTALS" buttonText="Register">
            <div className="flex flex-row space-between">
                <input className="bg-gray-100 bg-opacity-50 w-1/2 text-black font-bold placeholder-gray-700 p-4 rounded-lg mx-10 my-3" type="text" placeholder="First Name" />
                <input className="bg-gray-100 bg-opacity-50 w-1/2 text-black font-bold placeholder-gray-700 p-4 rounded-lg mx-10 my-3" type="text" placeholder="Last Name" />
            </div>
            <div className="flex flex-row space-between">
                <input className="bg-gray-100 bg-opacity-50 w-1/2 text-black font-bold placeholder-gray-700 p-4 rounded-lg mx-10 my-3" type="email" placeholder="Email" />
                <input className="bg-gray-100 bg-opacity-50 w-1/2 text-black font-bold placeholder-gray-700 p-4 rounded-lg mx-10 my-3" type="text" placeholder="Mobile Number" />
            </div>
            <div className="flex flex-row space-between">
                <input className="bg-gray-100 bg-opacity-50 w-full text-black font-bold placeholder-gray-700 p-4 rounded-lg mx-10 my-3" type="text" placeholder="Address" />
            </div>
            <div className="flex flex-row space-between">
                <input className="bg-gray-100 bg-opacity-50 w-1/2 text-black font-bold placeholder-gray-700 p-4 rounded-lg mx-10 my-3" type="text" placeholder="Password" />
                <input className="bg-gray-100 bg-opacity-50 w-1/2 text-black font-bold placeholder-gray-700 p-4 rounded-lg mx-10 my-3" type="text" placeholder="Confirm Password" />
            </div>
        </BackgroundLayout>
    );
};

export default Register;