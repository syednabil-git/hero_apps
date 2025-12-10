import React from "react";
import errorImg from "../../assets/error.png"
import { Link } from "react-router";
 const ErrorPage = () => {
    return (
        <div className="flex justify-center text-center bg-gray-50 max-w-6xl mx-auto p-10">
            <div className="mx-auto">
                <img className="mt-15" src={errorImg}></img>
                <h1 className="text-4xl font-bold mt-10">Oops, page not found!</h1>
                <p className="mt-3 mb-5">The page you are looking for is not available.</p>
                <Link to="/">
                <button className="btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] w-40">GO Back!</button>
                </Link>            
            </div>
        </div>
    );
 };
 export default ErrorPage;