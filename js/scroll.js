// const followBox = document.querySelector('.followBox');

// window.addEventListener('scroll', function(){
//     if(window.scrollY > 0 && window.scrollY < 200) {
        
//         if(followBox.classList.contains('active')){
//             followBox.classList.add('active0');
//             followBox.classList.remove('active');
//             // document.querySelector('.about').classList.add('hidden');
//         }
//     }
//     else if(window.scrollY > 200 & window.scrollY < 900) {
//         followBox.classList.remove('active0');
//         followBox.classList.add('active');
//         followBox.classList.remove('active2');
//         // document.querySelector('.about').classList.remove('hidden', 'firstSec');
//         // document.querySelector('.banner').classList.add('hidden')
//     } else if(window.scrollY > 900 && window.scrollY < 1500) {
//         followBox.classList.remove('active')
//         followBox.classList.add('active2')
//         followBox.classList.remove('active3')
//         // document.querySelector('.about').classList.add('hidden');
//         // document.querySelector('.about').classList.remove('hidden');
//     }  else if(window.scrollY > 1500 && window.scrollY < 2500) {
//         followBox.classList.remove('active2')
//         followBox.classList.add('active3')
//     }


// })

// var pageHeight = window.innerHeight;
// var isAnimating = false;
// let stop = 0;
// document.body.style.transform = 'translate3d(0px,0px,0px)';

// document.addEventListener('scroll', function(e){
//   document.body.scrollTop = 0;
// });
// document.addEventListener('wheel', wheelListener);

// function wheelListener(e) {
//   if(e.deltaY > 0) {
//     scrollPage(-pageHeight);
//   } else {
//     scrollPage(+pageHeight);
//   }
// }

// function scrollPage(scrollSize) {
//     if(scrollSize > 0) {
//         stop += pageHeight
//     }else {
//         if(stop == -pageHeight * 5)
//     }
//   if(isAnimating){
//     return;
//   }
//   isAnimating = true;
//   var yPos = getNewYPos(scrollSize);
//   document.body.style.transform = 'translate3d(0px,'+ yPos + ',0px)';
// }

// function getNewYPos(add){
//   var oldYPos = document.body.style.transform.split(',')[1];
//   oldYPos = parseInt(oldYPos.replace(/px/,''));
//   var newYPos = oldYPos + add;
//   if(newYPos > 0){
//     isAnimating = false;
//   }
//   return Math.min(0, newYPos) + 'px';
// }


// document.body.addEventListener('transitionend', function(){
//   setTimeout(function(){ isAnimating = false; }, 500);
//   document.addEventListener('wheel', wheelListener);
// });