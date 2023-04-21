import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax';
//const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
ReactDOM.createRoot(document.getElementById('root')).render(
  <ParallaxProvider>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </ParallaxProvider>
  
)
