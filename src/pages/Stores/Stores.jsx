import React, { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import logo from "../../assets/downloads.png";
import Rating from "../../assets/ratings.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import apperror from "../../assets/apperror.png"

const Stores = () => {
 
  const stores = useLoaderData();
   const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("");
  const filteredStores = stores.filter(store => 
    store.title.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div className="p-5">
    
      <header className="text-center md:mt-20">
        <h1 className="text-4xl font-bold mb-5">Our All Applications</h1>
        <p className="text-xl">
          Explore all apps on the market developed by us. We code for millions!
        </p>
      </header>

      
      <div className="flex justify-between items-center mt-10">
        <p className="font-semibold md:text-xl">({filteredStores.length}) Apps Found</p>
        <div>
          <button className=" items-center justify-between border-2 p-3">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          
          <input
            type="text"
            placeholder="Search App"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-[150px] md:w-[250px] focus:outline-none px-2" 
          />
          </button> 
        </div>
      </div>
      {
  filteredStores.length === 0 ? (
    <div className="text-center items-center w-full mt-10 flex flex-col mb-20">
      <img className="w-[300px] h-[300px] mb-10" src={apperror} />

      <p className="text-4xl font-bold mb-3">OPPS!! APP NOT FOUND</p>
      <p>The App you are requesting is not found in our system. Please try another app.</p>

      <button 
        onClick={() => navigate(-1)}
        className="btn mt-5 w-[200px] bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"
      >
        Go Back!
      </button>
    </div>
  ) : (
    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 p-1">
      {filteredStores.map((store) => (
        <Link key={store.id} to={`/appDetails/${store.id}`}>
          <div className="md:w-auto h-[280px] rounded-xl shadow-2xl p-2 hover:scale-105 transition-transform duration-200">
            <div className="flex justify-center items-center mb-2">
              <img className="h-[150px] md:h-[200px] w-auto rounded-2xl md:object-cover" src={store.image} />
            </div>
            <p className="text-[20px] font-semibold mb-2 text-center">{store.title}</p>

            <div className="flex justify-between items-center px-2">
              <div className="flex items-center gap-1">
                <img className="w-[18px] h-[20px]" src={logo} />
                <span className="text-xl font-semibold">{store.downloads}</span>
              </div>
              <div className="flex items-center gap-1">
                <img className="w-[18px] h-[20px]" src={Rating} />
                <span className="text-xl font-semibold">{store.ratingAvg}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

    </div>
  );
};

export default Stores;
