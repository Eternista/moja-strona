var width = (window.innerWidth > 0) ? window.innerWidth : document.documentElement.clientWidth;
// if(width > 1280){
//   const scrollFun= function () {
//       const scroller = new Scroller('#root');
    
//       document.addEventListener('wheel', (event) => scroller.listenScroll(event));
//       if (document.bodyscrollTop <= 0) {
//         document.addEventListener('swipeDown', () => scroller.scroll(-1));
//       } else {
//         document.addEventListener('swipeUp', () => scroller.scroll(1));
//       }
//       document.addEventListener('keydown', (event) => {
//         switch (event.keyCode) {
//           case 40:
//             return scroller.scroll(1)
//           case 38:
//             return scroller.scroll(-1)
    
//           default:
//             return;
//         }
//       })
//     }
// }