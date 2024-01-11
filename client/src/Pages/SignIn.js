import React from "react";
import BackgroundLayout from "../Components/BackgroundLayout";

const SignIn = () => {
    return(
        <BackgroundLayout title="Sign In to ZONE RENTALS" buttonText="Sign In">
            <input className="bg-gray-100 bg-opacity-50 w-1/2 text-black font-bold placeholder-gray-800 p-4 rounded-lg mx-10 my-4" type="text" placeholder="Username" />
            <input className="bg-gray-100 bg-opacity-50 w-1/2 text-black-800 font-bold placeholder-gray-800 p-4 rounded-lg mx-10" type="text" placeholder="Password" />
        </BackgroundLayout>
    );

};

export default SignIn;