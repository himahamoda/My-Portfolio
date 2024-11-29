

import React, { useContext } from 'react';
import lightLogo from '../../Assets/HomeSlider/3-removebg-preview.png';
import darkLogo from '../../Assets/HomeSlider/4-removebg-preview.png';
import { DarkModeContext } from '../../context';
import { Link } from 'react-router-dom';
import { Home } from '../Home/Home';

const Logo = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (

<div className="container">
  <Link to="/Home"> {/* Link to the home page */}
    <img
      src={isDarkMode ? darkLogo : lightLogo}
      width={400}
      height={400}
      alt="Logo"
    />
  </Link>
</div>
  );
};

export default Logo;
