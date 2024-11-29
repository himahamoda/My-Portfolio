// import React, { useRef, useEffect } from 'react';
// import video from "../../../Assets/videos/home.mp4"
// import style from "./Video.module.css"
// function Video() {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const video = videoRef.current;
//     video.play();

//     // Loop the video when it ends
//     video.addEventListener('ended', () => {
//       video.currentTime = 0;
//       video.play();
//     });
//   }, []);

//   return (
//     <div className={style.app}>
//       <video ref={videoRef} autoPlay loop muted className={style.videobackground}>
//         <source src={video} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className={style.content}>
//         {/* Your content goes here */}
//       </div>
//     </div>
//   );
// }

// export default Video;
// import React, { useState, useEffect } from 'react';
// import video from "../../../Assets/videos/home.mp4"
// import style from "./Video.module.css"
// const VideoBackground = () => {
//     const [opacity, setOpacity] = useState(1);

//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollPosition = window.scrollY;
//             const windowHeight = window.innerHeight;
//             const documentHeight = document.body.scrollHeight;
//             const maxScroll = documentHeight - windowHeight;

//             const newOpacity = 1 - (scrollPosition / maxScroll);
//             setOpacity(newOpacity < 0 ? 1 : newOpacity); // Ensure opacity doesn't go below 0
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <div className={style.app}>
//             <h2></h2>            <video
//                 className={style.videobackground}
//                 style={{ opacity }}
//                 autoPlay
//                 muted
//                 loop
//             >
//                 <source src={video} type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>

//         </div>
//     );
// };

// export default VideoBackground;