import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import './home.css';
// import Navigaion from './Navigaion';
import './navigation.css';

const Home = (props) => {
    // console.log('props',props)
    const [altaf,setAltaf]=useState([]);
    const getApi =async()=>{
        const product=await axios.get('https://fakestoreapi.com/products')
        setAltaf(product.data);
    }
    useEffect(()=>{
        getApi()
    },[])
    return (
        <div>
             <div className='altafbhai'>
            <div className='altaf'>
            <ul>
                <li><img src="" alt="" /></li>
                <li><a href="">Home</a></li>
                <li> <input type="text" />
            <button className='butn'>search</button></li>
                <li><a href="">Cart</a>
                <div className='abc'><p>{props.data.length}</p></div></li>
            </ul>
           
        </div>
        </div>
            {altaf.map((item)=>{
                return(
                    <div className='card-parent'>
                    <div className='card'>
                    <img className='photo' src={item.image} alt="" />
                    <h3>{item.price}</h3>
                    <h2>{item.title.substr(0,10)+"..."}</h2>
                   <center><button className='butt' onClick={()=>props.addTocartHandler(item)}> ADD TO CART</button></center>
                    <center><button className='butt' onClick={()=>props.removeTocartHandler()}>REMOVE </button></center>
                 </div>
                </div>
                )
            })}
        </div>
    );
};

export default Home;