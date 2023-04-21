import React from "react";
import { useParallax, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import SpaceBackground from '../assets/space1.jpg';
import cave from '../assets/cave2png.png';
import MyPhoto from '../assets/myPhoto.png'
import Portfolio from "./Portfolio";
import Contact from "./Contact";

export default function Home() {
 // const { parallaxController } = useParallax({speed:10});   
 
  return (
    <div>
      <ParallaxBanner id="Home" style={{ aspectRatio: '2 / 1' }}>
        <ParallaxBannerLayer image={SpaceBackground} speed={50} />
        <ParallaxBannerLayer speed={-30} >
            <div className= "flex flex-col justify-center scale-[30%] sm:scale-100 translate-y-[15vh] sm:translate-y-[500px]">
              <div className="flex justify-center"><img className="h-[100px] mr-3 rounded-full"  src={MyPhoto}></img>
              
              </div>
              <div className="flex flex-col text-center"><h1>A fullstack developer </h1>
              <h1>specialized in react</h1>
              <h1> and net core</h1>
              </div>
              </div>
        </ParallaxBannerLayer>
        <ParallaxBannerLayer speed={15}>
           <div className="flex translate-y-[100px] sm:translate-y-[0px]  justify-end"><img  src="https://gardenestudio.com.br/img/parallax-garden/2-arvore-dir.png"/></div>
            </ParallaxBannerLayer>
        <ParallaxBannerLayer speed={10}>
            <img className="fixed translate-y-[120px] sm:translate-y-[0px]  " src="https://gardenestudio.com.br/img/parallax-garden/1-arvore-esq.png"/>
            </ParallaxBannerLayer>
            
      </ParallaxBanner>
      <div id="projects"><Portfolio /></div>
      <div id="contactme">
        
        <ParallaxBanner className=" aspect-[1/1] sm:aspect-[2/1]">
            <ParallaxBannerLayer  image={SpaceBackground} speed={50} />
             
              <ParallaxBannerLayer>
                <img src={cave}/>
              </ParallaxBannerLayer>
              <ParallaxBannerLayer >
                <div className=" scale-[0.7] mt-[5%] sm:scale-100 sm:mt-[15%]">
                  <Contact />
                  </div>
              </ParallaxBannerLayer>
        </ParallaxBanner>
      
      </div>

    </div>
  );
}