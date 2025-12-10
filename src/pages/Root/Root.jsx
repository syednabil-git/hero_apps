import React from "react";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router";
import ErrorPage from "../ErrorPage/ErrorPage";



const Root = () => {
    return (
        <div className="max-w-6xl mx-auto bg-gray-50">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
           );
 };
 export default Root;