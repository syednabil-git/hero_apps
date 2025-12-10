import React from "react";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router";
import ErrorPage from "../ErrorPage/ErrorPage";
import { ToastContainer } from 'react-toastify';



const Root = () => {
    return (
        <div className="max-w-6xl mx-auto bg-gray-50">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ToastContainer />
            <Footer></Footer>
        </div>
           );
 };
 export default Root;