import React from "react";
import Image from "next/image";

const ShowcaseItem = () => {
  return (
    <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
      <div className="flex justify-center">
        <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20">
          <div className="p-4 lg:p-0 mt-6 lg:mt-16">
            <Image src="" width={145} height={165} alt="Free Plan" />
          </div>
          <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">Free Plan</p>
          <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
            <li className="relative check custom-list my-2">Unlimited Bandwitch</li>
            <li className="relative check custom-list my-2">Encrypted Connection</li>
            <li className="relative check custom-list my-2">No Traffic Logs</li>
            <li className="relative check custom-list my-2">Works on All Devices</li>
          </ul>
          <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
            <p className="text-2xl text-black-600 text-center mb-4 ">Free</p>
            <button>Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseItem;
