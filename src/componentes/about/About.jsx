import React from 'react';
import './abt.css';
// import log1 from "./img/42042.jpg";
import log2 from './img/art1.png'
import log3 from './img/art2.png';
import {motion} from 'framer-motion';
;
export const About = () => {
    return (
        <>
<div className="aboutcont1 container-fluid">
<motion.div className="text"
    initial={{x:-100,opacity:0}}
    whileInView={{x:30,opacity:1}}
    transition={{type:'spring',stiffness:100,}}>
    <div className="row mb-5 gap-5 ">
    <img src={log2} className='img-fluid mt-5 col-lg-6 '  alt='' /> 
   
    <div className="col-lg-4 redmore1 ">
        <h2 className='text-light fs-1 fw-bold '>BIKERS GEAR</h2>
         <p className='text-light fs-4 mb-5 text-capitalize'>Looking for Quality Gear and best offers for motorcycle accessories. 
         Grab this Deals Now. Best Offers for Airfilters, Exhausts,
         Head Light, Tail Light, Mounts & Mobile Chargers.</p>
         <button id="read" className='btn btn-info'>Read more</button>
    </div>
    
    </div>
    </motion.div>
    </div>
    
    <div className="aboutcont2 container-fluid">
    <motion.div className="text"
    initial={{x:-100,opacity:0}}
    whileInView={{x:30,opacity:1}}
    transition={{type:'spring',stiffness:100,}}>
    <div className="row gap-5">
    
    <div className="col-lg-4 redmore2 mb-5 md-order-0 ms-5">
        <h2 className='text-light fs-1 fw-bold '>BIKERS GEAR</h2>
         <p className='text-light fs-4  text-capitalize'>Looking for Quality Gear and best offers for motorcycle accessories. 
         Grab this Deals Now. Best Offers for Airfilters, Exhausts,
         Head Light, Tail Light, Mounts & Mobile Chargers.</p>
         <button id="read" className='btn btn-info'>Read more</button>
    </div>
    <img src={log3} className='img-fluid  col-lg-6 ms-5 order-md-1'  alt='' /> 
    
    </div>
    </motion.div>
    </div>
  



         {/* <div className='pic111 mb-lg-5'> 
         <img src={log2}  alt='' /> 
         <div className='redmore1'>
            <h2 className='text-light fs-1 fw-bold '>BIKERS GEAR</h2>
         <p className='text-light fs-4 mb-5 text-capitalize'>Looking for Quality Gear and best offers for motorcycle accessories. 
         Grab this Deals Now. Best Offers for Airfilters, Exhausts,
         Head Light, Tail Light, Mounts & Mobile Chargers.</p>
         <button id="read" className='btn btn-info'>Read more</button>
         </div>
         
                  <div className='redmore2'>
                  <h2 className='text-light fs-1 fw-bold '>MOTORCYCLES PARTS</h2>
                  <p className='text-light fs-4 text-capitalize'>hop online for Bike Accessories at best price in India! Moglix is a one stop 
                  shop for genuine motorbike accessories like helmets, lights, Riding Gears ...</p>
                  <button id="read1" className='btn btn-warning '>Read more</button>
                    </div>
                  
                  
                  </div> */}
              {/* <div className='heade'>
              <div className='pic'>
                  <img src={log1} alt='' /> 
                  </div>
            <h1>Bikers Heaven</h1>
            <p>Shop online for Bike Accessories at best price in India! Moglix is a one stop shop 
            for genuine motorbike accessories like helmets, lights, Riding Gears ... 
            </p>
            </div>
            */}
           
        </>
    );
};
