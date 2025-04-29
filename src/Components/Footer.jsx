import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='container my-4'> 
    <div className="row my-5">
    <div className="col-lg-3">
    <h5><i class="fa-solid fa-music" ></i>{' '}
    Media Player</h5>
     <p>Designed and built with all the love in the world by luminar team with help of our contributers</p>
     <p>Code Licsensed Luminar,CC by 3.0</p>
     <p>Currently v5.3.2.0</p>
    </div>
    <div className="col-lg-1"></div>
    <div className="col-lg-2" >
      <h5>Links</h5>
      <Link to={'/'} style={{textDecoration:"none"}}>
       Landing page
      </Link>
      <Link to={'/home'} style={{textDecoration:"none"}}><br></br>
       Home page
      </Link>
      <Link to={'/history'} style={{textDecoration:"none"}}><br></br>
       History page
      </Link>
    </div>
    <div className="col-lg-1"></div>
    <div className="col-lg-2">
      <h5>Guides</h5>
      <p>React</p>
      <p>React bootstrap</p>
      <p>React router</p>
    </div>
    <div className="col-lg-3">
    <h5>Contact</h5>
            <div className="input-group mb-2 gap-2">
              <input type="email" className="form-control" placeholder="Enter your Email here!!" />
              <button className="btn btn-primary" type="button"><i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className='d-flex justify-content-start gap-4 mt-3'>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-github"></i>
            <i class="fa-solid fa-phone"></i>
            </div>
    </div>
    </div>
    
  </div>
  )
}

export default Footer