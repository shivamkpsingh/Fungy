import "./App.css";
import Category from "./Components/Category";
import Navbar from "./Components/Navbar";
import Nft from "./Components/Nft";
import Preview from "./Components/Preview";
import UploadCover from "./Components/UploadCover";
import UploadFile from "./Components/UploadFile";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import Price from "./Components/Price";
import Collection from "./Components/Collection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="px-4 lg:px-16 xl:px-48 ">
        <h1 className="mt-20 text-xl lg:text-4xl  font-bold">Create Your Collection</h1>
        <div className="flex flex-col lg:flex-row w-full">
          <div className="w-full md:flex md:justify-between lg:flex-col  lg:w-2/5">
          <div className="w-full md:w-1/2 lg:w-full">
            <UploadFile />
          </div>
          <div className="md:w-1/2 md:ml-4 lg:ml-0 lg:w-full">
            <UploadCover />
          </div>
          </div>
          <div className="w-full lg:w-1/2">
            <Preview />
          </div>
        </div>
        <div className="">
          <Category />
        </div>
        <div className="mt-10">
          <h1 className="font-medium">
            Enter Price to allow user instantly purchase your NFT
          </h1>
          <div className="flex">
          <Nft
              title="Fixed Price"
              IconStyle="text-blue-500"
              styleProp="border-blue-500"
              icon={LocalOfferIcon}
            />
          <Nft
              title="Timed Auction"
              IconStyle="text-black"
              styleProp="ml-5 border-black"
              icon={AccessTimeFilledIcon}
            />
           
            
          </div>
        </div>
        <div className="">
          <Price />
        </div>
        <div className="">
          <Collection />
        </div>
      </div>
    </div>
  );
}

export default App;
