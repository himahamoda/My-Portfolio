
import React from 'react';
import image1 from '../Assets/HomeSlider/Believe in yourself and all that you are. (1).png';
import image2 from '../Assets/HomeSlider/deep-beneath-the-antelope-canyon.jpg';
import image3 from '../Assets/HomeSlider/width_1600.jpeg';
import image4 from '../Assets/Home/Screenshot 2024-05-11 173348.png';
import image5 from '../Assets/Home/Screenshot 2024-05-22 162653.png';

const Portfolio = () => {
  return (
    <div className="portfolio-container  ">
      <h1>Portfolio</h1>
      <div className="gallery">
        <div className="gallery-photos">
          <div className="image">
            <img src={image1} alt="Image 1" />
            <div className="layer">
              <h2>ddddddddddddddd</h2>
            </div>
          </div>

          <div className="image">
            <img src={image2} alt="Image 2" />
            <div className="layer">
              <h2>ddddddddddddddd</h2>
            </div>
          </div>

          <div className="image">
            <img src={image3} alt="Image 3" />
            <div className="layer">
              <h2>ddddddddddddddd</h2>
            </div>
          </div>

          <div className="image">
            <img src={image4} alt="Image 4" />
            <div className="layer">
              <h2>ddddddddddddddd</h2>
            </div>
          </div>

          <div className="image">
            <img src={image5} alt="Image 5" />
            <div className="layer">
              <h2>ddddddddddddddd</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;


// // import React from 'react';
// // import './Services.module.css'; 

// // const Service = ({ icon, title, description ,img}) => {
// //   return (
// //     <div className="service">
// //       <div className="icon">{icon}</div>
// //       <h3>{title}</h3>
// //       <p>{description}</p>
// //       {/* <img src={img} width={200} height={200} className='service-img ' alt="" /> */}
// //     </div>
// //   );
// // };

// // export default Service;
// import React from 'react';
// import image1 from '../Assets/HomeSlider/Believe in yourself and all that you are. (1).png';
// import image2 from '../Assets/HomeSlider/deep-beneath-the-antelope-canyon.jpg';
// import image3 from '../Assets/HomeSlider/width_1600.jpeg';
// import image4 from '../Assets/Home/Screenshot 2024-05-11 173348.png';
// import image5 from '../Assets/Home/Screenshot 2024-05-22 162653.png';

// const Portfolio = () => {
//   return (
//     <div className="portfolio-container">
//       <h1>Portfolio</h1>
//       <div className="gallery">
//         <div className="web-design">
//           <img src={image1} alt="Image 1" className="gallery-image" />
//           <div className="layer">
//             <h2>ddddddddddddddd</h2>
//           </div>
//         </div>

//         <div className="web-design">
//           <img src={image2} alt="Image 2" className="gallery-image" />
//           <div className="layer">
//             <h2>ddddddddddddddd</h2>
//           </div>
//         </div>

//         <div className="web-design">
//           <img src={image3} alt="Image 3" className="gallery-image" />
//           <div className="layer">
//             <h2>ddddddddddddddd</h2>
//           </div>
//         </div>

//         <div className="web-design">
//           <img src={image4} alt="Image 4" className="gallery-image" />
//           <div className="layer">
//             <h2>ddddddddddddddd</h2>
//           </div>
//         </div>

//         <div className="web-design">
//           <img src={image5} alt="Image 5" className="gallery-image" />
//           <div className="layer">
//             <h2>ddddddddddddddd</h2>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;
