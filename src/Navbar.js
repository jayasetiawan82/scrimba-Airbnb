import React from "react";
import logo from "./assets/icon.png"



export default function Navbar() {
    return (
        <div className="header">
             <nav>
                <img src={logo} alt="logo" className="logo" />
            </nav>
        </div>
       
    )
}