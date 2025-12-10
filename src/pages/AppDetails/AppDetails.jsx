import React, { useState } from "react";
import download from "../../assets/downloads.png"
import rating from "../../assets/ratings.png"
import review from "../../assets/review.png"
import { useLoaderData, useParams } from "react-router";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { addToStoredDB } from "../../utility/addToDB";

const AppDetails = () =>{
const [installedApps, setInstalledApps] = useState([]);
const handleMarkeAsInstall = (id) => {
    setInstalledApps(prev => [...prev, id]);
    addToStoredDB(id);
};


    const { id } = useParams();
    const appId = parseInt(id);
    const data = useLoaderData();
    const singleApp = data.find(app => app.id === appId);
    if (!singleApp) {
        return <h2 className="text center mt-10 text-red-500 ">App not found!</h2>
    }
    const { image,title,companyName,downloads,ratingAvg,reviews,description,size } = singleApp;
    const ratingsData = singleApp.ratings;
    return(
        <div className="p-5">
            <div className="flex flex-col md:flex-row justify-center items-center mx-auto border-b-2 border-gray-300 md:mt-20">
            <div className="img md:mr-10">
                <img className="w-[150px] md:w-[350px] h-[150px] md:h-[270px] rounded-4xl mt-10 md:mt-0" src={image}></img>
            </div>
            <div className=" w-full">
                <div className="border-b-2 border-gray-300">
                    <h1 className="text-2xl md:text-3xl font-bold text-center md:text-start mt-5">
                       {title} 
                    </h1>
                    <p className="md:text-xl mb-5 mt-2 text-center md:text-start ">Developed by <span className="text-blue-700 ml-1 font-bold">{companyName}</span></p>
                </div>
                <div className="flex items-center mt-5 justify-center md:justify-start">
                    <div className="flex flex-col items-center mr-5 md:mr-0 ">
                        <img className="w-5 md:w-7 " src={download}></img>
                        <p>Downloads</p>
                        <p className="font-bold md:text-3xl">{downloads}</p>
                    </div>
                    <div className="flex flex-col items-center md:ml-20 mr-5 md:mr-0">
                        <img className=" w-5 md:w-7 " src={rating}></img>
                        <p>Average Ratings</p>
                        <p className="font-bold md:text-3xl">{ratingAvg}</p>
                    </div>
                    <div className="flex flex-col items-center md:ml-20 ">
                        <img className=" w-5 md:w-9" src={review}></img>
                        <p>Total Reviews</p>
                        <p className="font-bold md:text-3xl">{reviews}</p>
                    </div>
                </div>
                <div className="flex justify-center md:justify-start">
                    <button onClick={()=> handleMarkeAsInstall(id)} className="btn bg-green-500 text-white text-lg mb-5 mt-5 shadow-lg" 
                    disabled ={installedApps.includes(id)}
                    >
                    {installedApps.includes(id) ? "Installed" : `Install Now (${size} MB)`}
                    </button>
                </div>
            </div>
            </div>
            {/* Ratings */}
            <div className="w-full h-[350px] mt-10 border-b-2 border-gray-300 pb-10">
                <p className="text-xl font-bold">Ratings</p>
                <div className="w-full h-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart 
                        layout="vertical"
                        data={ratingsData}
                        margin={{top: 10, right: 30, left: 40, bottom: 10}}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                                <XAxis type="number" />
                                    <YAxis dataKey="name" type="category" />
                                    <Tooltip />
                                    <Bar dataKey="count" fill="#FFA500" />
                                    </BarChart>
                                    </ResponsiveContainer>
                                
                </div>
            </div>
            {/* Description */}
            <div className="mt-10 mb-15">
                <h1 className="text-xl font-bold">Description</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};
export default AppDetails;