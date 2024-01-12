import React from 'react';

const BackgroundLayout = ({ title, children, buttonText }) => {
  return (
    <div>
      <div className="bg-cover h-screen" style={{ backgroundImage: "url('/images/carwh.jpg')" }}>
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed grid place-items-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="bg-gray-100 bg-opacity-35 w-1/3 p-4 rounded-lg fixed">
            <h1 className="text-4xl font-bold text-white p-10 pb-0 mb-6">{title}</h1>
            <div className="divcontent">{children}</div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-lg m-10 cursor-pointer">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundLayout;
