import React from "react";
import Nft from "./Nft";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PollIcon from "@mui/icons-material/Poll";
import CollectionModal from "./CollectionModal";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Collection = () => {
  return (
    <div className="mb-16">
      <h1 className="text-2xl font-medium">Choose Collection</h1>
      <div className="">
        <div className="flex">
          <Nft
            title="Create"
            icon={AddCircleIcon}
            styleProp=" border-black"
            Ptitle="ERC-721"
          />
          <Nft
            title="Fungy"
            icon={PollIcon}
            styleProp="border-blue-500 ml-5"
            IconStyle="text-blue-500 transform rotate-45"
            Ptitle="Fungy"
          />
        </div>
      </div>
      <div className="price">
        <div className="mt-10">
          <h1>Title</h1>
          <div className="flex border-b border-black mt-5">
            <input
              type="text"
              placeholder="e.g, 'Redeemable T-Shirt with logo'"
              className="flex-1 outline-none pb-3"
            />
          </div>
        </div>
        <div className="mt-10">
          <h1>
            Descrption <span className="text-gray-400">(Optional)</span>
          </h1>
          <div className="flex border-b border-black mt-5">
            <input
              type="text"
              placeholder="e.g, 'After Purchaging you'll be able to get the real T-Shirt'"
              className="flex-1 outline-none pb-3"
            />
          </div>
          <p className="text-gray-500 mt-1">with preserve line break</p>
        </div>
        <div className="mt-10">
          <h1>Royalties</h1>
          <div className="flex border-b border-black mt-5">
            <input
              type="text"
              placeholder="e.g, 10%"
              className="flex-1 outline-none pb-3"
            />
          </div>
          <p className="text-gray-500 mt-1">suggested:0%,10%,20%,30%</p>
        </div>
        <button className="border-2 w-64  border-blue-500 mx-auto flex items-center justify-center mt-10 px-4 rounded-full py-2 text-blue-500 font-bold text-sm ">
          HIDE ADVANCE SETTING
        </button>
        <div className="mt-10">
          <h1>
            Descrption <span className="text-gray-400">(Optional)</span>
          </h1>
          <div className="flex  mt-5">
            <input
              type="text"
              placeholder="e.g. Size"
              className=" outline-none pb-3 border-b border-black"
            />
            <input
              type="text"
              placeholder="e.g. M"
              className="flex-1 outline-none pb-3 border-b border-black ml-5"
            />
          </div>
        </div>
        <div className="mt-10">
          <h1>
            Alternative text for NFT
            <span className="text-gray-400">(Optional)</span>
          </h1>
          <div className="flex border-b border-black mt-5">
            <input
              type="text"
              placeholder="Image description in details (do not start with word 'image')"
              className="flex-1 outline-none pb-3"
            />
          </div>
          <p className="text-gray-500 mt-1">
            Text that will be used in VoiceOver for people with disabilities
          </p>
        </div>
        <div className="mt-10 flex justify-between items-center">
            <CollectionModal title="CREATE ITEM"/>
            <div className="flex">
                <p className="font-medium mr-3 text-gray-500">Unsaved changes</p>
                 <HelpOutlineIcon/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
