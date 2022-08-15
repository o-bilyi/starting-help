import 'slick-carousel/slick/slick.css';
// import './src/preloader.css';

// export const onClientEntry = () => {
//   window.onload = () => {
//     document.getElementById("preloader")?.classList.add('load');

//     setTimeout(() => {
//       try {
//         document.getElementById("preloader-container")?.style.display = "none";
//       } catch (error) {
//         console.log('dis not find document');
//       }
//     }, 1000);
//   }
// }

// export const onPreRouteUpdate = () => {
//   document.getElementById("preloader")?.classList.remove('load');
//   document.getElementById("preloader-container")?.style.display = "flex";
// }

// export const onRouteUpdate = ({ location, prevLocation }) => {
//   if (prevLocation) {
//     setTimeout(() => {
//       document.getElementById("preloader-container")?.style.display = "none";
//     }, 500);
//   }
// }