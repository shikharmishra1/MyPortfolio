import { useState } from 'react';
import './App.css'
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="App">
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Layout>
  
    </div>
  )
  
}

export default App
