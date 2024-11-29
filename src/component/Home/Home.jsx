

import React from 'react';

import profile from '../../Assets/Profil/my pic.jpeg';
import ImageGrid from '../Projects/Gallery/Gallery';
// import Videos from '../Videos/videos';
import styles from '../Home/Home.module.css'
import { Link } from 'react-router-dom';
import Video from '../Projects/New me/VideoHome';
import Services from '../services/Services';

const Portfolio = () => {
  return (
    <>
<div className="container">
</div>
      <div className="container Backk ">
        <div className="portfolio-title">
          <h1>Portfolio</h1>
        </div>
        <div className="content w-75">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h2>15</h2>
                  <p>Different projects I have worked on it</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h2>15</h2>
                  <p>Advertising campaigns I have done.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h2>4</h2>
                  <p>Real Estat compianes </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h2>4</h2>
                  <p>Years in full-time practice.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h2>16</h2>
                  <p>Other digital marketers mentored in their businesses.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h2>7</h2>
                  <p>I’ve worked projects from startup to advanced stages.</p>
                </div>
              </div>
              <div className="buttons">
 <Link to={"https://wa.link/fvme60"}>    <button className="button">Hire</button> </Link>             
 
 <Link to={"/Camp"}>    <button className="button">ads</button> </Link>             
 
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Video/> */}

      <div className={styles.container}>
      <div className="row">
        <div className="col-md-5">
          <img className={styles.image} src={profile} alt="Ibrahim Ahmed" />
        </div>
        <div className="col-md-7">
          <h2 className={styles.textabout}>
            My name is Ibrahim Ahmed, and I’m a 26-year-old digital marketing specialist with over 4 years of experience across Egypt and UAE. 
            I spent three years in Egypt working on diverse projects, where I helped businesses grow through well-planned marketing strategies. 
            In the UAE, I have worked for a year with marketing agencies, creating effective marketing strategies and successful advertising campaigns that achieved strong results. 
            I am passionate about helping brands connect with their audiences and achieve measurable growth through digital marketing.
          </h2>
        </div>
      </div>
    </div>
    <Services/>

      <ImageGrid />
    </>
  );
};

export default Portfolio;