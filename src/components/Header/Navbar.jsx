import React from "react";
import { Link } from "react-router";
import { NavLink } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import logo from "../../assets/logo.png"

const Navbar = () => {
       return (
           <div className="navbar bg-base-100 shadow-sm h-[70px] p-5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <NavLink 
          to="/"
          className={({ isActive }) =>
          isActive ? "bg-linear-to-r from-[#5F02F0] to-[#632EE3] text-white underline" 
           : "" }
           > Home
           </NavLink>
        </li>
        <li>
          <NavLink 
          to="/apps"
          className={({ isActive }) =>
          isActive ? "bg-linear-to-r from-[#5F02F0] to-[#632EE3] text-white underline" 
           : "" }
           > Apps
           </NavLink>
           </li>
        <li>
          <NavLink 
          to="/installation"
          className={({ isActive }) =>
          isActive ? "bg-linear-to-r from-[#5F02F0] to-[#632EE3] text-white underline" 
           : "" }
           > Installation
           </NavLink>
        </li>
      </ul>
    </div>
    <a className="btn btn-ghost md:text-xl"><span><img className="w-[30px] md:w-[50px]" src={logo}></img></span>HERO.IO</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-xl font-semibold">
        <li>
          <NavLink 
          to="/"
          className={({ isActive }) =>
          isActive ? "bg-linear-to-r from-[#5F02F0] to-[#632EE3] text-white underline" 
           : "" }
           > Home
           </NavLink>
        </li>
        <li>
          <NavLink 
          to="/apps"
          className={({ isActive }) =>
          isActive ? "bg-linear-to-r from-[#5F02F0] to-[#632EE3] text-white underline" 
           : "" }
           > Apps
           </NavLink>
           </li>
        <li>
          <NavLink 
          to="/installation"
          className={({ isActive }) =>
          isActive ? "bg-linear-to-r from-[#5F02F0] to-[#632EE3] text-white underline" 
           : "" }
           > Installation
           </NavLink>
        </li>
    </ul>
  </div>
  <div className="navbar-end">
    <a 
      href="https://github.com/syednabil-git/hero_apps" 
    target="_blank" 
    rel="noopener noreferrer"
     className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white md:text-xl font-semibold rounded-2xl md:h-[60px]"><FontAwesomeIcon icon={faGithub} size="" /> Contribute</a>
  </div>
</div>
       );
};  
 export default Navbar;