
// import React, { useRef } from 'react';
// import video1 from '../../Assets/videos/Horizon2.mp4'; // Adjust the path as necessary
// import video2 from '../../Assets/videos/Horizon.mp4'; // Adjust the path as necessary
// import video3 from '../../Assets/videos/reels 2 haoua pdcst .mp4'; // Adjust the path as necessary
// import video4 from '../../Assets/videos/VideoAlsef.mp4'; // Adjust the path as necessary
// import video5 from '../../Assets/videos/WhatsApp Video 2024-07-17 at 18.07.28_c03c24da.mp4'; // Adjust the path as necessary
// import video6 from '../../Assets/Comfy/video/intro.mp4'; // Adjust the path as necessary
// import video7 from '../../Assets/GrandLand/Video/French.mp4'; // Adjust the path as necessary
// import video8 from '../../Assets/GrandLand/Video/Spanish.mp4';

//   // Adjust the path as necessary
// import styles from './videos.module.css'; // Import your CSS module

// function Videos() {
//   const videos = [
//     { src: video1, alt: "Horizon Media" },
//     { src: video2, alt: "Horizon Media" },
//     { src: video3, alt: "Real Estat" },
//     { src: video4, alt: "Horizon Media" },
//     { src: video6, alt: "Comfy Fit" },
//     { src: video7, alt: "French Video" },
//     { src: video8, alt: "Spanish Video" },
//     { src: video5, alt: "Comfy Fit" },

//   ];

//   // Create an array of refs for the video elements
//   const videoRefs = useRef([]);

//   const handleMouseEnter = (index) => {
//     if (videoRefs.current[index] && videoRefs.current[index].paused) {
//       videoRefs.current[index].play();
//     }
//   };



//   return (
    
//     <div className={styles['portfolio-container']}>
//       <h2 className={styles['hh']}>Reels & Videos</h2>
//       <div className={styles.gallery}>
//         {videos.map((video, index) => (
//           <div 
//             className={styles.video} 
//             key={index} 
//             onMouseEnter={() => handleMouseEnter(index)} 
//             // onMouseLeave={() => handleMouseLeave(index)}
//           >
//             <video 
//               ref={el => videoRefs.current[index] = el} 
//               width="100%"
//               height="90%" 
//               controls
//               muted // Optional: Mute the video to avoid sound on hover
//             >
//               <source src={video.src} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//             <div className='container'>
//               <h2 className={styles.h2}>{video.alt}</h2>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Videos;