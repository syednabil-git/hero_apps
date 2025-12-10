import React, { Suspense, useState } from "react"; 
import App from "../App/App";
import { Link } from "react-router";
const Apps = ({data}) => {
    const [allApps, setAllApps]=useState([]);
    return(
        <div className="">
           <div className="text-center">
             <h1 className="font-bold text-4xl mt-10">
                Trending Apps
            </h1>
            <p className="mt-5">
                Explore All Trending Apps on the Market developed by us
            </p>
           </div>
           <Suspense fallback={<span>Loading...</span>}>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 w-full ">
            {
                data.map((singleApp) => <App key={singleApp.id} singleApp={singleApp}></App>)
            } 
            
           </div> 
           <div className="flex justify-center">
            <Link to="/apps">
            <button className="w-[200px] rounded-lg bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-bold text-lg p-2 my-20 ">Show All

            </button>
            </Link>
           </div>
           </Suspense>
        </div>
    );
};
export default Apps;