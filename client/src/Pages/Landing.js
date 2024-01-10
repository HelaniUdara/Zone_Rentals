import React from 'react'

const Landing = () => {
  return (
    <div>
       <div className="bg-cover h-screen" style={{ backgroundImage: "url('/images/car.png')" }}>
        <div className='bg-gray-900 bg-opacity-80 w-1/3 p-4 rounded-lg fixed bottom-10 right-20'>
          <h1 className="text-5xl font-bold text-white p-10 pb-0">ZONE RENTALS</h1>
          <p className="text-2xl font-bold text-white p-10 pb-0">Search thousands of used cars for rent across the Sri Lanka. We'll have the car that suits your needs and your budget.</p>
          <button className="bg-blue-500 hover:bg-blue-700 w-1/5 text-white font-bold p-4 rounded-lg m-10">SHOP</button>
        </div>
      </div>
     
    </div>
  )
}

export default Landing;
