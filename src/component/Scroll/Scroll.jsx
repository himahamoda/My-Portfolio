// import React, { useEffect, useState } from 'react';

// const ScrollToTopButton = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   const toggleVisibility = () => {
//     if (window.scrollY > 20) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', toggleVisibility);
//     return () => {
//       window.removeEventListener('scroll', toggleVisibility);
//     };
//   }, []);

//   return (
//     <button
//       onClick={scrollToTop}
//       style={{
//         display: isVisible ? 'block' : 'none',
//         position: 'fixed',
//         bottom: '50px',
//         right: '50px',
//         backgroundColor: '#0007bf',
//         color: 'white',
//         border: 'none',
//         borderRadius: '5px',
//         padding: '10px 15px',
//         cursor: 'pointer',
//         zIndex: 1000,
//       }}
//     >
//     <i class="fa-solid fa-plane-up"> up</i>
//     </button>
//   );
// };

// export default ScrollToTopButton;


import React, { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleVisibility = () => {
    if (window.scrollY > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      style={{
        display: isVisible ? 'block' : 'none',
        position: 'fixed',
        bottom: isMobile ? '30px' : '50px',
        right: isMobile ? '30px' : '50px',
        backgroundColor: '#0007bf',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: isMobile ? '8px 12px' : '10px 15px',
        cursor: 'pointer',
        zIndex: 1000,
      }}
    >
      <i className="fa-solid fa-plane-up"> up</i>
    </button>
  );
};

export default ScrollToTopButton;