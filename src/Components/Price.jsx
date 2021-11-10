import React from "react";
import "./Price.css";
import SwitchPrice from "./SwitchPrice";

const Price = () => {
  return (
    <div className="mt-8 mb-10">
      <h1 className="font-medium">Price</h1>
      <div className="price mt-5">
        <div className="flex border-b border-black">
          <input
            type="text"
            placeholder="0.054"
            className="flex-1 outline-none pb-3"
          />
          <h1>NFT</h1>
        </div>
        <div className="mt-4">
          <h1 className="font-medium text-gray-400">
            Service free <span className="text-blue-500">2.5%</span>
          </h1>
          <h1 className="text-gray-400 font-bold">
            You will receive <span className="text-black">0.053 ETH</span>{" "}
            <span className="text-blue-500">$106.58</span>
          </h1>
        </div>
        <div className="flex justify-between mt-10">
          <div className="">
            <h1 className="text-blue-500 font-medium text-2xl">
              Unlock once purchaged
            </h1>
            <h1 className="font-medium mt-3 text-gray-400">
              Content will be unlocked after succesfull transaction
            </h1>
          </div>
          <SwitchPrice />
        </div>
        <div className="">
          <div className="flex border-b border-black mt-10">
            <input
              type="text"
              placeholder="Digital key, code to redeem or link to a file"
              className="flex-1 outline-none pb-3"
            />
          </div>
          <div className="mt-4">
            <h1 className="text-gray-500 font-medium">MarkDown is supported</h1>
            <h1 className="text-gray-500 font-medium">Unicode symbol are not supported</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
