import React from "react";
import Navbar from "./Navbar";
export default function Layout(props) 
{
    return(
        <div>
            <Navbar/>
            <div className="bg-slate-200">
                {props.children}
            </div>
        </div>
    );
}