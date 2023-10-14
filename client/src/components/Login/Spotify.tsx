import React from "react";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Body from "../Body";

export default function Spotify() {
  return (
    <main className="flex flex-col">
        <div className="basis-[85vh]">
            <div>
                <Sidebar />
            </div>
            <div>
                <Navbar />
                <Body />
            </div>  
        </div>
        <div className="basis-[15vh]">
            <Footer />
        </div>
    </main>
  );
}
