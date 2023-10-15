import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaSearch, FaSwatchbook } from "react-icons/fa";
import Playlists from "../Playlists";

export default function Sidebar() {
  return (
    <div className="pr-4 mt-4 h-[90vh]">
      <ul className="bg-[#121212] flex flex-col gap-y-6 p-6 rounded-xl mb-4">
        <li>
          <NavLink to="/" className="flex items-center justify-start text-gray-400 gap-x-2" >
              <FaHome className="text-2xl"/>
                <span className="text-xl">Home</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/" className="flex items-center justify-start text-gray-400 gap-x-2 w-fit" >
              <FaSearch className="text-2xl" />
              <span className="text-xl">Search</span>
          </NavLink>
        </li>
    
      </ul>
      
      <div className="bg-[#121212] p-6 rounded-xl mb-6">
          <div className="flex items-center justify-start mb-10 text-gray-300 gap-x-2 w-fit">
            <FaSwatchbook className="text-2xl"/>
            <span className="text-xl">Your Library</span>
          </div>
          <div>
            <Playlists />
          </div>
      </div>
    </div>
  );
}
