import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import downloads from "../../assets/downloads.png"
import rating from "../../assets/ratings.png"
import { getStoredApp, removeFromStoredDB } from "../../utility/addToDB";
import { toast } from "react-toastify";

const Installation = () =>{
    const [appList, setAppList] = useState([])
    const [sort, setSort] = useState("");
    const data = useLoaderData();
    useEffect (() => {
        const storedAppData = getStoredApp();
        const ConvertedStoredApps = storedAppData.map(id => parseInt(id))
        const myAppList = data.filter(app => ConvertedStoredApps.includes(app.id));
        setAppList(myAppList)
    },[])
    const handleUnistall = (id) => {
        const filteredList = appList.filter(app => app.id !== id);
        setAppList(filteredList);
        removeFromStoredDB(id);
        toast.error("App Uninstalled!", {
        position: "top-right",
    });
    };

    const handleSort = (type) => {
        setSort(type)
        if (type === "size") {
            const sortedBySize = [...appList].sort((a,b) => a.size -b.size);
            setAppList(sortedBySize)
        }
        
    }
    return(
        <div className="mb-20 p-5">
           <div className="">
                <div className="text-center">
             <h1 className="font-bold text-4xl mb-2 md:mt-15">Your Installed Apps</h1>
            <p>Explore All Trending Apps on the Market developed by us</p>
           </div>
           <div className="flex justify-between items-center">
                <p className="font-bold"><span>{appList.length}</span> Apps Found</p>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 w-[200px] font-bold">Sort By : {sort?sort:""}</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm font-bold">
                            <li><a onClick={() => handleSort("size")}>size</a></li>
                            
                    </ul>
                    </div>
           </div>

           {/* App list */}

           {
            appList.map((applist) => (
                
                <div key={applist.id} className="flex justify-between items-center p-2 bg-white shadow-sm mt-2">
                <div className="flex items-center">
                <div className="mr-5">
                    <img className=" w-20 h-20 rounded-4xl" src={applist.image}></img>
                </div>
                <div>
                    <h1 className="font-bold md:text-xl">Forest: Focus for Productivity</h1>
                    <div className="flex items-center">
                        <p className="text-green-500 font-bold flex items-center"><span className="mr-1"><img className="h-4" src={downloads}></img></span>{applist.downloads}</p>
                        <p className="ml-4 text-red-500 font-bold flex items-center"><span className="mr-1"><img className="h-4" src={rating}></img></span>{applist.ratingAvg}</p>
                        <p className="ml-4 text-gray-500">{applist.size} MB</p>
                    </div>
                </div>
           </div>
           
            <div>
                <button onClick={() => handleUnistall(applist.id)} className="btn bg-green-700 text-white md:text-xl rounded-lg">Uninstall</button>
           </div>
           </div>
            ))
           }
            
           
           </div>
        </div>
    );
};
export default Installation;