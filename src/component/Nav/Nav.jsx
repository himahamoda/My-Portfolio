
import logo from '../../Assets/HomeSlider/3-removebg-preview.png'
import darkLogo from '../../Assets/HomeSlider/4-removebg-preview.png'
import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { DarkModeContext } from '../../context';
import { useLocation } from 'react-router-dom';
import Home from '../Home/Home';
import Camp from '../Camp/Camp';
import Style from './Nav.module.css'



// export default function Nav() {

const NavToggle = () => {

  // const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNavLinksActive, setIsNavLinksActive] = useState(false);
  const [showCloseBtn, setShowCloseBtn] = useState(false);
  const [navToggle, setNavToggle] = useState(false);
  const location = useLocation();
  const [theme, setTheme] = useState('light');
  const [logoSrc, setLogoSrc] = useState(logo);
  // const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);
  // const handleModeToggle = handleToggle;

  const { isDarkMode, toggleDarkMode, setIsDarkMode } = useContext(DarkModeContext);

  //...





  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    setNavToggle(false);
  };

  useEffect(() => {
    setNavToggle(false);
  }, [location]);



  const handleNavToggle = () => {
    setNavToggle(!navToggle);

  };

  const handleNavLinksToggle = () => {
    setIsNavLinksActive((prevState) => !prevState);
    setShowCloseBtn(true);
  };

  const handleCloseNavLinks = () => {
    setIsNavLinksActive(false);
    setShowCloseBtn(false);
  };
  ;
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // This makes the scroll smooth
    });
  };

  return <>


    <nav>
      <div className={Style.container} >
        {/* <div className="logo ">

  </div> */}
        <div className="header">
          {/* <div className="logo">
        <img width={100} height={100} className="dark-mode-image"   src={logo} alt="" />
        
        </div> */}

          <div className="logo">
            <Link to='/'>
              <img
                width={100}
                height={100}
                src={isDarkMode ? darkLogo : logo}
                alt="Logo"
              />
            </Link>
          </div>
          <i
            className="nav-toggle"
            onClick={handleNavToggle}
          >
            &#9776;
          </i>

          <nav className={navToggle ? 'active' : ''}>
            <i
              className="close-button"
              onClick={handleNavToggle}
            >
              &times;
            </i>
            <ul className='mt-2 ms-auto'>
              <Link to={`/`} className='  text-black  ' > <li className='nav-linkss'>Home</li> </Link>

              <Link to={`/Web`} className='text-black  ' > <li className='nav-linkss'>Programing</li> </Link>
              {/* <Link to={`/videos`} className='text-black  ' > <li className='nav-linkss'>videos</li> </Link> */}
              <Link to={`/berlin`} className='text-black' onClick={scrollToTop}>
                <li className='nav-linkss'>Some Photos</li>
              </Link>
              <Link to={`/Camp`} className='text-black  ' > <li className='nav-linkss'>Ads</li> </Link>
              <div className="menus text-light ">
                <label className="mode" onClick={handleToggle}>
                  <i className={isDarkMode ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
                </label>

              </div>
            </ul>
          </nav>
        </div>

      </div>


    </nav>
  </>
}

export default NavToggle
