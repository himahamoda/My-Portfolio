import React, { useRef } from 'react';
import Style from "../Web/web.module.css"

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const CardComponent = () => {
  const iframeRef = useRef(null);

  return <>
<div className={`${Style.Cards} container`}>
        <div className="">
        <div className={Style.card}>
          <iframe
            ref={iframeRef}
            src="https://neu-store-1.onrender.com/" // replace with the website you want to display
            frameBorder="0"
            width="100%"
            height="400" // adjust the height as needed
          />
          <h2 className=' text-center m-2 mb-5'>Neu Store</h2>
          <h4 className='Texto'>Women's Fashion Website (React JS, CSS, Database)</h4>
          <p className='text-white Texto '>
          I built a dynamic women's fashion e-commerce website using React JS for the frontend and CSS for styling. The site features a responsive design that adapts to different screen sizes and devices.

          Key features:
          React JS: Used to build interactive components like product listings, navigation, and user authentication.
          CSS: Custom styling for modern design, including responsive layouts and hover effects.
          Database Integration: Connected to a database to manage product details (images, prices, descriptions) and user data (for login and orders).
          Hosting: The website is deployed and hosted online, accessible to users globally.
          This project showcases my skills in building responsive, dynamic websites with React, CSS, and database management.</p>        

          <a href="https://neu-store-1.onrender.com/" target="_blank" rel="noopener noreferrer">
    <Button className={Style.Button}> Open  </Button>
</a> 
        </div>
 
        {/* <div className="card">
          <iframe
            ref={iframeRef}
            src="https://github.com/himahamoda/HN/blob/95151a2eeb93601b867716ff458b41a6bbcb0983/Images/11.jpg" // replace with the website you want to display
            frameBorder="0"
            width="100%"
            height="300" // adjust the height as needed
          />
        </div>
        <div className="card">
          <iframe
            ref={iframeRef}
            src="https://neu-store-1.onrender.com/" // replace with the website you want to display
            frameBorder="0"
            width="100%"
            height="300" // adjust the height as needed
          />
        </div>
        <div className="card">
          <iframe
            ref={iframeRef}
            src="https://neu-store-1.onrender.com/" // replace with the website you want to display
            frameBorder="0"
            width="100%"
            height="300" // adjust the height as needed
          />
        </div>
        <div className="card">
          <iframe
            ref={iframeRef}
            src="https://neu-store-1.onrender.com/" // replace with the website you want to display
            frameBorder="0"
            width="100%"
            height="300" // adjust the height as needed
          />
        </div> */}
      </div> 

    </div>


</>
};

export default CardComponent;


// import React from 'react';


// function App() {
//   return (
//     <div className="App">

//       <main className="main">
//         <section className="section">
//           <div className="project">
//             <img src="https://cdn.pixabay.com/photo/2016/04/01/10/19/amazon-1297372_960_720.jpg" alt="Amazon Clone" className="project-image" />
//             <div className="project-details">
//               <h2 className="project-title">Featured Project</h2>
//               <h1 className="project-name">Amazon Clone 2.0</h1>
//               <p className="project-description">An Amazon clone website for visualizing personalized Amazon website. View your products, Add your account with O-auth and then make the purchase using stripe.</p>
//               <ul className="project-skills">
//                 <li className="project-skill">Nextjs</li>
//                 <li className="project-skill">Typescript</li>
//                 <li className="project-skill">Next-auth</li>
//                 <li className="project-skill">Stripe</li>
//                 <li className="project-skill">Vercel Deployment</li>
//               </ul>
//               <div className="project-social">
//                 <a href="#" className="project-social-link"><i className="fab fa-github"></i></a>
//                 <a href="#" className="project-social-link"><i className="fab fa-youtube"></i></a>
//                 <a href="#" className="project-social-link"><i className="fab fa-figma"></i></a>
//               </div>
//             </div>
//           </div>
//         </section>
       
//       </main>
//       <footer className="footer">
//         <div className="footer-content">
//           <p className="footer-text">Copyright © 2023 Noor Mohammad</p>
//           <a href="#" className="footer-link">reactbd@proton.me</a>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;

