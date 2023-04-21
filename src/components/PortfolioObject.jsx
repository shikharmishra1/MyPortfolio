import React, {useState} from "react";
import Draggable from "./Draggable";

export default function PortfolioObject(props) 
{
    return <div className="">
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-slate-300">
            <div className="bg-slate-500 border-[8px] border-slate-300" ><img className="w-full rounded" src={props.image} alt={props.description}/></div>
            <div class="px-6 py-4">
                <div class="font-bold text-xl  mb-2 hover:cursor-pointer"><a className="text-black" href={props.link}>{props.title}</a></div>
                <p class="text-gray-700 text-base"></p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.skill1}</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.skill2}</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.skill3}</span>
            </div>
            <p className="px-6 py-4 text-blue-950 font-semibold opacity-80">
                {props.description}
            </p>
            </div>
    </div>
    
   
}