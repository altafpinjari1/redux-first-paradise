import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Cartpage from './Cartpage';
import Home from './Home';

const IndexPage = () => {
    return (
        <div>
            <BrowserRouter>
           <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="/cart" element={<Cartpage/>}/>
           </Routes>
            </BrowserRouter>
        </div>
    );
};

export default IndexPage;