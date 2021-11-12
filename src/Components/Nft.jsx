import React from "react";
// import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { SvgIcon } from "@mui/material";
import './Nft.css'

const Nft = ({title,icon,styleProp,IconStyle,Ptitle}) => {
  return (
    <div className="">
      <div className="mt-7">
        <div className={`${styleProp} w-44 nft border  rounded-3xl flex flex-col items-center justify-center shadow-md`}>
          <SvgIcon component={icon} className={IconStyle} />
          <h1 className="mt-3 font-medium">{title}</h1>
          <p className=" text-gray-400">{Ptitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Nft;
