import React from 'react'
import {Link, NavLink} from "react-router-dom"
import Logo from "../../assets/Company-Logo.svg"

const Navbar = () => {
  return (
    <div>
        <nav className="bg-white border-gray-200 border-4">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={Logo} className="h-15 text-white" alt="Company-Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-Black">Company-Name</span>
                </Link>    
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                  <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row        md:space-x-8           rtl:space-x-reverse md:mt-0 md:border-0 bg-white">
                    <li><NavLink to="/" className={({isActive}) =>`block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#1D4ED8]" :"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0      hover:text-[#1D4ED8] lg:p-0`}>Home</NavLink></li>

                     <li><NavLink to="/Dashboard" className={({isActive}) =>`block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#1D4ED8]" :          "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0      hover:text-[#1D4ED8]     lg:p-0`}>Dashboard</NavLink></li>

                     <li><NavLink to="/Attendance" className={({isActive}) =>`block py-2 pr-4 pl-3 duration-200 ${isActive ?            "text-[#1D4ED8]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent      lg:border-0     hover:text-[#1D4ED8] lg:p-0`}>Attendance</NavLink></li>

                     <li><NavLink to="/Employees" className={({isActive}) =>`block py-2 pr-4 pl-3 duration-200 ${isActive ?         "text-[#1D4ED8]"   : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0        hover:text-[#1D4ED8]    lg:p-0`}>Employees</NavLink></li>

                     <li><NavLink to="/Report" className={({isActive}) =>`block py-2 pr-4 pl-3 duration-200 ${isActive ?        "text-[#1D4ED8]" :    "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent   lg:border-0 hover:text-[#1D4ED8]   lg:p-0`}>Report</NavLink></li>

                     <li><NavLink to="/Settings" className={({isActive}) =>`block py-2 pr-4 pl-3 duration-200 ${isActive ?      "text-[#1D4ED8]"    : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent       lg:border-0 hover:text-[#1D4ED8]     lg:p-0`}>Settings</NavLink></li>        
                  </ul>
                </div>
                <div>
                    <NavLink to="/Login"><button type="button" className="text-white bg-[#1D4ED8] hover:bg-blue-500 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">Login</button></NavLink>
                    <NavLink to="/Admin_Login"><button type="button" className="text-white bg-[#1D4ED8] hover:bg-blue-500 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none" onClick={()=>{alert("Two failed attempts will block your IP for 2 hours")}}>Admin Login</button></NavLink>
                </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar
