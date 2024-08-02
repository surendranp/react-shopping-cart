import './Baan.css';
// import { Link } from "react-router-dom";
import log5 from './img1/6s1-1.png';
import log3 from './img1/6s2-1.png';
import log4 from './img1/6s3-1.png';
import log6 from './img1/6s4-1.png';
import kit from './img1/ridkit.png';
import boy from './img1/boy.png';
import bmw from './img1/bmwbike.png';
// import logo from './img1/logo.png';


import {motion} from 'framer-motion';

function Banner(){
    return(
    <>
     
{/* <div className="empty" >UNI GEARS presents</div> */}
<div className="container1 container-fluid">
  <div className="bannertext align-self-center">
  <motion.div className="text"
    initial={{x:1,opacity:0}}
    whileInView={{x:70,opacity:1}}
    transition={{type:'spring',stiffness:100,}}>
    <h5 className='fs-3'>Uni Gear presents <b>Bikers Heaven</b>    </h5>
    <h2 className='fs-1 fw-bold'>Biekrs & Bikes Accessories </h2>
    <a href="/Shop" className='btn btn-dark btn-sm mt-2'>Show more</a>
    <a href="/About" className='btn btn-outline-dark btn-sm ms-3 mt-2' >About</a>
    </motion.div>
  </div>
</div>

<div class="container2 container-fluid text-white text-center">

			<div class="row bg-dark  pt-3  bannerbox">
				<div class="col-lg-3 col-12">
					 <img src={log5} alt="" class="pt-1"/>
					<h6 class="text-light pt-3">Fast Delivery</h6>
					<p class=" text-dark-50 xt-white">for all order over india</p>
				</div>
				<div class="col-lg-3 col-12">
					<img src={log4} alt="" class="pt-1"/>
					<h6 class="text-light pt-3">5 Days Return</h6>
					<p class=" text-dark-50 xt-white">if goods have problems</p>
				</div>
				<div class="col-lg-3 col-12">
					<img src={log3} alt=""  class="pt-1"/>
					<h6 class="text-light pt-3">Secure Payment</h6>
					<p class=" text-dark-50 xt-white">100% secure payment</p>
				</div>
				<div class="col-lg-3 col-12">
					<img src={log6} alt=""  class="pt-1"/>
					<h6 class="text-light pt-3" >24/7 Support</h6>
					<p class=" text-dark-50 xt-white">Dedicated support</p>
				</div>
			</div>
      
		</div>
{/* banner--end------------------------- */}


{/* pharagraphs */}
 
<div className="col-lg-12 container-fluid pahra">
<motion.div className="text"
    initial={{y:100,opacity:0}}
    whileInView={{y:0,opacity:1}}
    transition={{type:'spring',stiffness:100,}}>
<div className="row mt-5">
<div className="col-lg-4 b text-alig">
<ul>
  <li className='fs-3 fw-bold'>Servicess</li>
  <li> <p>Riding gear means gear that you wear during the course of riding for protection, including helmet, gloves, riding apparel, and boots.
    Riding gear is built to withstand abrasion and protect the vulnerable spots on a human body.</p> </li>
</ul>
</div>

<div className="col-lg-4 b text-alig">
<ul>
  <li className='fs-3 fw-bold'>Brands</li>
  <li> <p>Riding gear means gear that you wear during the course of riding for protection, including helmet, gloves, riding apparel, and boots.
    Riding gear is built to withstand abrasion and protect the vulnerable spots on a human body.</p> </li>
</ul>
</div>

<div className="col-lg-4 b text-alig">
<ul>
  <li className='fs-3 fw-bold'>Course</li>
  <li> <p>Riding gear means gear that you wear during the course of riding for protection, including helmet, gloves, riding apparel, and boots.
    Riding gear is built to withstand abrasion and protect the vulnerable spots on a human body.</p> </li>
</ul>
</div>
</div>
</motion.div>
</div>

{/* pharagraphs  end*/}

{/* card details---------------------------------------------------- */}
<motion.div className="text"
    initial={{y:100,opacity:0}}
    whileInView={{y:0,opacity:1}}
    transition={{type:'fade',stiffness:10,}}>

<div className="card-1 container-fluid col-lg-8 mt-5 rounded-5">
<div className="row mb-5">
<div className="col-lg-4 mt-5">
  <div className="img1">
    <img src={boy} alt='' class="card-img-top img-fluid order-1 "/>
  </div>
</div>
<div className="col-lg-7 align-self-center">
  <h5 class="card-title fs-3 mb-4 "><b>Riding Gears</b></h5>
    <p class="card-text text-capitalize fs-5 ">riding gear means gear that you wear during the course of riding for protection, including helmet, gloves, riding apparel, and boots.
    Riding gear is built to withstand abrasion and protect the vulnerable spots on a human body.
    </p>
    <p class="card-text"><small class="text-body-secondary text-dark-50">Bikers Heaven</small></p>

<p>
<button class="btn btn-primary " type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample1"  >
Read More
</button>
</p>
<div className='collaps'>
<div class="collapse collapse-vertical" id="collapseWidthExample1">
<div class="card-card-body text-decoration-none" >
  This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
  <a href='/shop'>shop now</a>
</div>
</div>
</div>
</div>
</div>
</div>
</motion.div>

<motion.div className="text"
    initial={{y:100,opacity:0}}
    whileInView={{y:0,opacity:1}}
    transition={{type:'spring',stiffness:100,}}>
<div className="card-1 container-fluid col-lg-8 mt-5 rounded-5">
<div className="row mb-5">
<div className="col-lg-4 mt-5">
  <div className="img1">
    <img src={bmw} alt='' class="card-img-top img-fluid order-1 "/> 
  </div>
</div>
<div className="col-lg-7  ">
  <h5 class="card-title fs-3 mb-4 "><b>Bike Accessories</b></h5>
    <p class="card-text text-capitalize fs-5">A Reliable Toolkit. There's no telling when you might have an emergency. 
    Compact Tire Inflator. It's a bummer to get a flat on the road. 
    Protection.
    Security. 
    A Helmet Sound System. 
    Camera for the Ride. 
    Portable Power Source.
    Take Your Pick.
    </p>
    <p class="card-text"><small class="text-body-secondary text-dark-50">Bikers Heaven</small></p>
    <p>
  <button class="btn btn-primary " type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample2"  >
    Read More
  </button>
</p>
<div className='collaps'>
  <div class="collapse collapse-vertical" id="collapseWidthExample2">
    <div class="card-card-body text-decoration-none" >
      This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
      <a href='/shop'>shop now</a>
    </div>
</div>
</div>
</div>
</div>
</div>
</motion.div>


<motion.div className="text"
    initial={{y:100,opacity:0}}
    whileInView={{y:0,opacity:1}}
    transition={{type:'spring',stiffness:100,}}>
<div className="card-1 container-fluid col-lg-8 mt-5 rounded-5">
<div className="row mb-5">
<div className="col-lg-4 mt-5">
  <div className="img1 pop">
    <img src={kit} alt='' class="card-img-top img-fluid order-1 mb-5"/>
  </div>
</div>
<div className="col-lg-7 ">
  <h5 class="card-title fs-3 mb-4 "><b>Our Poppular Services</b></h5>
    <p class="card-text text-capitalize fs-5">We are selling the most importent riding gears and bike accessories and then we have a garage to made customers custom bikes.
    and then we servicing the all catogery bikes and all catogery accessories all orginal jenuin spare parts
    </p>
    <p class="card-text"><small class="text-body-secondary text-dark-50">Bikers Heaven</small></p>
    <p>
  <button class="btn btn-primary " type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample3"  >
    Read More
  </button>
</p>
<div className='collaps'>
  <div class="collapse collapse-vertical" id="collapseWidthExample3">
    <div class="card-card-body text-decoration-none" >
      This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
      <a href='/shop'>shop now</a>
    </div>
</div>
</div>
    
</div>
</div>
</div>
</motion.div>

{/* card details------------------------------------- */}

    </>
    );
}
export default Banner;