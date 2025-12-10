import React from "react";
import logo from "../../assets/downloads.png";
import Rating from "../../assets/ratings.png";
import { Link } from "react-router";
const App = ({singleApp}) =>{
    const {image,title,ratingAvg,downloads,id} = singleApp;
    return(
        <Link to={`/appDetails/${id}`}>
                <div>
            <div className="md:w-[270px] md:h-[280px] rounded-xl shadow-2xl p-2 hover:scale-105 transition-transform duration-200">
                <div className="items-center flex justify-center">
                    <img className="h-[200px] w-full rounded-xl" src={image}></img>
                </div>
                <div>
                    <p className="md:text-[20px] font-semibold">{title}</p>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex justify-center items-center">
                       <img className="w-[18px] md:h-[20px] mr-1" src={logo}></img>
                        <p className="md:text-xl font-semibold">{downloads}</p>
                    </div>
                    <div className="flex justify-center items-center">
                       <img className="w-[18px] md:h-[20px] mr-1" src={Rating}></img>
                        <p className="md:text-xl font-semibold">{ratingAvg}</p>
                    </div>
                    
                </div>
            </div>
        </div>
        </Link>
    );
};
export default App;