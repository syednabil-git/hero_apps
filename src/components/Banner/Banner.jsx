import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay,faAppStoreIos } from '@fortawesome/free-brands-svg-icons';
import hero from "../../assets/hero.png"
const Banner = () => {
       return (
        
        <div className="text-center mt-10 h-auto">
           <h1 className="font-bold text-[30px] md:text-[72px] ">We Build <br></br><span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Productive</span> Apps</h1>
           <p className="md:text-xl text-gray-500">
            At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br></br> Our goal is to turn your ideas into digital experiences that truly make an impact.
           </p>
           <div className="flex justify-center items-center my-15">
            <button className="btn md:text-xl font-bold">
                    <FontAwesomeIcon icon={faGooglePlay} /> Google Play</button>
            <button  className="btn md:text-xl font-bold ml-5"><FontAwesomeIcon icon={faAppStoreIos} /> App Store</button>
           </div>
           <div>
            <img className="items-center align-middle mx-auto md:w-[700px]" src={hero}></img>
           </div>
           <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white border border-t-black">
                <h1 className="text-xl md:text-4xl font-bold text-center mt-10">
                    Trusted by Millions, Built for You    
                </h1>
                <div className="flex justify-between items-center mb-15 md:mx-50 mt-10">
                        <div>
                                <h1 className="md:text-[16px]">Total Downloads</h1>
                                <p className="text-[30px] md:text-[64px] font-bold">29.6M</p>
                                <p className="md:text-[16px]">21% more than last month</p>
                        </div>
                        <div>
                                <h1 className="md:text-[16px]">Total Reviews</h1>
                                <p className="text-[30px] md:text-[64px] font-bold">906K</p>
                                <p className="md:text-[16px]">46% more than last month</p>
                        </div>
                        <div>
                                <h1 className="md:text-[16px]">Active Apps</h1>
                                <p className="text-[30px] md:text-[64px] font-bold">132+</p>
                                <p className="md:text-[16px]">31 more will Launch</p>
                        </div>
                </div>
           </div>
        </div>

       );
};  
 export default Banner;