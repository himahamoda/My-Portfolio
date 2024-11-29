import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState  } from 'react';

import Button from 'react-bootstrap/Button';



export default function Social() {
  return (
<div className="container">
<div className="social-media">
        <div className="social-media-item">
     <Link>    <i class="fa-brands fa-linkedin"></i></Link> 
          </div>
          <div className="social-media-item">
          <Link>  <i class="fa-brands fa-google"></i></Link>
          </div>
          <div className="social-media-item">
          <Link>       <i class="fa-brands fa-facebook"></i></Link>
          </div>
          <div className="social-media-item">
          <Link>       <i class="fa-brands fa-instagram"></i></Link>
          </div>
          <hr class="social-media-line" />
        </div>
       
</div>      
  )
}
