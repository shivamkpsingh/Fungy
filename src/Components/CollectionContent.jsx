import React from "react";

const CollectionContent = () => {
  return (
    <div>
      <h1 className="text-blue-500 font-medium text-xl">Collection</h1>
      <div className="flex mt-7">
        <div className=" ">
          <input type="text" className="w-32 h-32 bg-gray-400 rounded-full" />
        </div>
        <div className="ml-5">
          <p className=" text-gray-400 font-medium text-sm">We recommended an image of at least 400*400 . Gifs works too.</p>
          <div className="mt-6">
            <label
              htmlFor="upload"
              className="upload font-bold tracking-widest text-white px-6 py-3 rounded-full shadow-lg"
            >
              Choose File
            </label>
            <input type="file" name="upload" id="upload" className="hidden" />
          </div>
        </div>
      </div>
      <div className="mt-5">
          <h1 className="font-medium">
            Display name
            <span className="text-gray-400">(required)</span>
          </h1>
          <div className="flex border-b border-black mt-5">
            <input
              type="text"
              placeholder="Enter token name"
              className="flex-1 outline-none pb-3"
            />
          </div>
          <p className="text-gray-500 mt-1">
            Token name cannot be change in future
          </p>
        </div>
      <div className="mt-5">
          <h1 className="font-medium">
            Symbol 
            <span className="text-gray-400">(required)</span>
          </h1>
          <div className="flex border-b border-black mt-5">
            <input
              type="text"
              placeholder="Enter token symbol"
              className="flex-1 outline-none pb-3"
            />
          </div>
        </div>
      <div className="mt-5">
          <h1 className="font-medium">
            Description 
            <span className="text-gray-400">(optional)</span>
          </h1>
          <div className="flex border-b border-black mt-5">
            <input
              type="text"
              placeholder="Spread some words about your token collection"
              className="flex-1 outline-none pb-3"
            />
          </div>
        </div>
      <div className="mt-5">
          <h1 className="font-medium">
            Short Url 
            <span className="text-gray-400">(optional)</span>
          </h1>
          <div className="flex border-b border-black mt-5">
            <input
              type="text"
              placeholder="fungy.com/Enter short url"
              className="flex-1 outline-none pb-3"
            />
          </div>
          <p className="text-gray-500 mt-1">
           will be used as public url
          </p>
        </div>
        <button className="mt-5 mx-auto flex items-center upload px-6 text-white font-bold text-sm py-3 rounded-full ">CREATE COLLECTION</button>
    </div>
  );
};

export default CollectionContent;
