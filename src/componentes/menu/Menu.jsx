import React from 'react';
import './menu.css';
import serv1 from'./img/51.jpg';
export const Menu = () => {
    return (
        <>


          <div className='header'> 
            <h1 className='fw-bold'>Customer Services</h1>
            <img src={serv1} alt=""/>
            <p>Toll free number (11001100111) Principles of good customer service. Listening, understanding your customer's needs,
                 thanking the customer and promoting a positive, helpful and friendly environment will
                  ensure they leave with a great impression.
                 A happy customer will return often and is likely to spend more.</p>
            </div>
            <div className='formcont needs-validation container bg-dark my-3 rounded rounded-2' novalidate>
                <h1 class="fs-5 p-3 text-light fw-bold fs-3">Feed Back</h1>
            <form className='col-12 p-3 ' >
                <div className='col-12 mb-3 fs-3'>
                
                <input type='text' className='form-control' class='form-control' placeholder='enter your name' required/>
                </div>
                <div className='frm1 col-12 mb-3'>
                
                <input type='text' className='form-control' pattern='{1-10}' placeholder='enter your mobile number' required/>
                </div>
                <div className='frm1 col-12 mb-3'>
            
                <input type='email' className='form-control' placeholder='enter your mail ID' required/>
                </div>
                <button className='frmbtn btn btn-success' type='submit'>submit</button>
            </form>
           
            </div>
        </>
    );
};
