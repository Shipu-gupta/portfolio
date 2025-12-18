import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductExplorer from "./pages/ProductExplorer";
import Resume from "./pages/Resume";
export default function App()
{return (<div className='site-root'><Navbar/><main><Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/projects' element={<Projects/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path="/product-explorer" element={<ProductExplorer />} />
     <Route path="/resume" element={<Resume />} />
    </Routes></main><Footer/></div>);
   

    }