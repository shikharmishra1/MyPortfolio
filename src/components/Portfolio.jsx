import React from "react";
import { ParallaxBannerLayer, ParallaxBanner } from "react-scroll-parallax";
import PortfolioObject from "./PortfolioObject";
import logo from '../assets/react.svg';



export default function Portfolio() {
  return (
    <div className=" bg-[#372d3b]" >
        
        <div className="bg-[#372d3b] flex justify-center pt-2 mb-4"><div className="text-5xl font-serif ">Portfolio</div></div>
        
        <div className="flex ml-[5%] sm:ml-0 flex-col gap-4 sm:gap-0 sm:flex-row wrap sm:justify-around ">
            <div className=""><PortfolioObject link="https://github.com/shikharmishra1/reactwithnet" title="AI doctor Online" skill1=".NET core" description="An project which detects diseases using images and text as data" skill2="react" skill3="ML.NET" image="https://mir-s3-cdn-cf.behance.net/project_modules/disp/6e2221155840697.635beb71e7057.jpg"/></div>
            <div className=""><PortfolioObject title="Test Project 2" skill1=".NET core" description="Since I haven't done much projects so this is just a placeholder" skill2="react" skill3="ML.NET" image={logo}/></div>
            <div className=""><PortfolioObject title="Test Project 3" skill1=".NET core" description="Since I haven't done much projects so this is just a placeholder" skill2="react" skill3="ML.NET" image={logo}/></div>
            
           
        </div> 
        <br/>
        <div className="flex ml-[5%] sm:ml-0 flex-col gap-4 sm:gap-0 sm:flex-row wrap sm:justify-around ">
        <div className=""><PortfolioObject title="Test Project 4" skill1=".NET core" description="Since I haven't done much projects so this is just a placeholder" skill2="react" skill3="ML.NET" image={logo}/></div>
        <div className=""><PortfolioObject title="Test Project 5" skill1=".NET core" description="Since I haven't done much projects so this is just a placeholder" skill2="react" skill3="ML.NET" image={logo}/></div>
            
            
           
        </div>    
    </div>
  );
}