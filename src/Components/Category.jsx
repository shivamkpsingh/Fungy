import React from "react";
import "./Category.css";
import { SvgIcon } from "@mui/material";
import data from "../json/categoryData";

const Category = () => {
  return (
    <div className="mt-10">
      <h1 className="text-2xl font-medium">Item Category</h1>
      <div className="category">
        <div className="flex flex-wrap">
          {data.map((props) => {
            return (
              <div className="flex items-center mr-6 mt-5 " id={props.id}>
                <SvgIcon component={props.icon} className="text-gray-600" />
                <h1 className="ml-2 text-gray-400">{props.title}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
