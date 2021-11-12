import React,{useState} from "react";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


const MobileMenu = () => {
    const [state, setState] = useState(false);
  const toggleDrawer = (open) => (event) => {
    setState(open);
  };
  const list = () => (
    <List>
      <ListItem className="flex flex-col">
        <div className=" flex flex-col  ">
        <a href="/">Explore</a>
            <a href="/" className="mt-3">
              My Items
            </a>
            <a href="/" className="mt-3">
              Following
            </a>
            <a href="/" className="mt-3">
              Activity
            </a>
            <a href="/" className="mt-3">
              How it works
            </a>
            <div className="mt-3 mb-3">
              <a href="/">Community</a>
              <KeyboardArrowDownIcon />
            </div>
            <hr />
            <div className="search mt-5">
            <div className="border px-3 py-3 rounded-full bg-gray-200">
              <SearchIcon className="" />
              <input
                type="text"
                placeholder="Search items,collections,creators"
                className="outline-none bg-gray-200 ml-2"
              />
            </div>
          </div>
        </div>
      </ListItem>
    </List>
  );
  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon />
      </Button>
      <Drawer anchor={`left`} open={state} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
};

export default MobileMenu;
