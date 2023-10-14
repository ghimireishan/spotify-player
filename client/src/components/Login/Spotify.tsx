import React from "react";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Body from "../Body";

export default function Spotify() {
  return (
    <main className="flex flex-col w-screen max-h-screen px-2 pr-2 overflow-hidden text-white bg-black">
        <div className="basis-[90vh] flex">
            <div className="basis-[25%]">
                <Sidebar />
            </div>
            <div className="w-full bg-red-300 bg-gradient-to-b from-teal-900 to-black bg-">
                <Navbar />
                <Body />
            </div>  
        </div>
        <div className="basis-[10vh]">
            <Footer />
        </div>
    </main>
  );
}

