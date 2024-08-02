import React from 'react';
import './pr.css';
// import { Link } from "react-router-dom";

import {motion} from 'framer-motion'
import pro1 from './img-p/p3.jpg';
import card1img from './img-p/p4.webp';
import card4img from './img-p/p5.webp';
import card2img from './img-p/rider.jpg';
import card3img from './img-p/p7.jpg';

export const Pro = () => {
        return (
        <>
      
        <div className='header1'>
        <motion.div 
    initial={{x:-400,opacity:0}}
    whileInView={{x:0,opacity:1}}
    transition={{type:'spring',stiffness:100}}>
            <h1 className='text-light fw-bold'>Product</h1>
            <p className='text-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Earum ad quas assumenda maxime debitis incidunt perspiciatis esse delectus atque sit!
                 Ratione cupiditate soluta eius velit quas magni, nulla ut! In?</p>
                 <img src={pro1} alt='' />
                 </motion.div>
            </div>
           
            <div className='containerrr'>
                <div className='card-1'>
                <div className='con-1img1'>
                    <img src={card1img} alt='' />
                 </div>
                 <div className='cont-1'>
                   <h6>steal panniers</h6>
                    <a className='carts'  href="/shop">Shop Now</a>
                 </div>
                </div>
                
                <div className='card-1'>
                <div className='con-1img2'>
                    <img src={card2img} alt='' />
                 </div>
                 <div className='cont2-1'>
                 <h6>Riding Gears</h6>
                    <a className='carts'  href="/shop">Shop Now</a>
                 </div>
                
                </div>
              

                <div className='card-1'>
                <div className='con-1img3'>
                    <img src={card3img} alt='' />
                 </div>
                 <div className='cont3-1'>
                 <h6>Bike Accosseries</h6>
                    <a className='carts'  href="/shop">Shop Now</a>
                 </div>
                </div>
                <div className='card-1'>
                <div className='con-1img1'>
                    <img src={card4img} alt='' />
                 </div>
                 <div className='cont-1'>
                 <h6>Saddle Bags</h6>
                    <a className='carts' href="/shop" >Shop Now</a>
                 </div>
                </div>               
            </div>
            <p id='p-body'>We are selling the most importent riding gears and bike accessories and then we have a garage to made customers custom bikes.
    and then we servicing the all catogery bikes and all catogery accessories all orginal jenuin spare parts have to shelling</p>
        </>
        
    );
};


