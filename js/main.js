//HAMBURGER MENU ACTIVE

const hamb = document.querySelector('.hamburger');
hamb.addEventListener('click', function(){
    hamb.classList.toggle('is-active');
    document.querySelector('.navigation').classList.toggle('active');
    document.querySelector('.cursor').classList.toggle('red');
})

const navBtns = [... document.querySelectorAll('.navigation a')];

navBtns.forEach((e) => {
    e.addEventListener('click', function(){
        hamb.classList.remove('is-active');
        document.querySelector('.navigation').classList.remove('active');
        document.querySelector('.cursor').classList.remove('red');
    })
})

//CLOSE MODAL

// if(width > 992){
    // const scrollFun= function () {
    //     const scroller = new Scroller('#root');
      
    //     document.addEventListener('wheel', (event) => scroller.listenScroll(event));
    //     document.addEventListener('swipeUp', () => scroller.scroll(1));
    //     document.addEventListener('swipeDown', () => scroller.scroll(-1));
    //     document.addEventListener('keydown', (event) => {
    //       switch (event.keyCode) {
    //         case 40:
    //           return scroller.scroll(1)
    //         case 38:
    //           return scroller.scroll(-1)
      
    //         default:
    //           return;
    //       }
    //     })
    //   }
//   }

// const closeWelcomeModal = document.querySelector('.close-modal');
// if(width > 1280) {
//     document.querySelector('.cursor').classList.add('z-index-1000');
//     document.querySelectorAll('#home .heading').forEach(single => {
//         single.style.animation = 'none';
//         document.querySelector('#home .dual-btn .secondary').style.animation = "none";
//         document.querySelector('#home .dual-btn .primary').style.animation = "none";
//         closeWelcomeModal.addEventListener('click', () => {
//             closeWelcomeModal.parentElement.parentElement.classList.add('none');
//             if(document.querySelector('.wait') == null) {
//             }else {
//                 document.querySelector('.wait').classList.remove('wait');
//                 typingFunction();
//                 scrollFun();
//             }
//             document.querySelector('#home h1.heading').removeAttribute('style');
//             document.querySelector('#home h2.heading').removeAttribute('style');
//             document.querySelector('#home h3.heading').removeAttribute('style');
//             document.querySelector('#home .dual-btn .primary').removeAttribute('style');
//             document.querySelector('#home .dual-btn .secondary').removeAttribute('style');
//             mouseCursor.classList.remove('hover-btn', 'hover', 'z-index-1000');
//             // document.addEventListener('DOMContentLoaded', scrollFun);
//         })
//     });
// } else {
    // closeWelcomeModal.parentElement.parentElement.parentElement.removeChild(closeWelcomeModal.parentElement.parentElement);
    // document.addEventListener('DOMContentLoaded', scrollFun);
    // scrollFun();
// }

const typingFunction = () => {
    //TEXT "TYPING"
    const time = .1;
    for(let x = 1; x <= 9; x++) {
        const typing = document.querySelector(`.typing${x} .remove`);
        const typing1 = document.querySelector(`.typing1 .remove`);
        const typing2 = document.querySelector(`.typing2 .remove`);
        const typing3 = document.querySelector(`.typing3 .remove`);
        const typing4 = document.querySelector(`.typing4 .remove`);
        const typing5 = document.querySelector(`.typing5 .remove`);
        const typing6 = document.querySelector(`.typing6 .remove`);
        const typing7 = document.querySelector(`.typing7 .remove`);
        const typing8 = document.querySelector(`.typing8 .remove`);
        const typing9 = document.querySelector(`.typing9 .remove`);
        const typ1Array = [... typing.textContent];
        
        
        for(let i=0; i < typing.textContent.length; i++) {
            const span = document.createElement('span');
            span.innerHTML = `${typ1Array[i]}`;
            if(x === 1) {
                span.style.animationDelay = `${i/10}s`;
            } else if(x === 2) {
                span.style.animationDelay = `${(i/10 + time*typing1.textContent.length + .2)/2}s`
            } else if(x === 3) {
                span.style.animationDelay = `${(i/10 + time*typing2.textContent.length + time*typing1.textContent.length + .1)/2}s`;
            } else if(x === 4) {
                span.style.animationDelay = `${(i/10 + time*typing3.textContent.length + time*typing2.textContent.length + time*typing1.textContent.length + .3)/2}s`;
            } else if(x === 5) {
                span.style.animationDelay = `${(i/10 + time*typing4.textContent.length + time*typing3.textContent.length + time*typing2.textContent.length + time*typing1.textContent.length + .3)/2}s`;
            } else if(x === 6) {
                span.style.animationDelay = `${(i/10 + time*typing5.textContent.length + time*typing4.textContent.length + time*typing3.textContent.length + time*typing2.textContent.length + time*typing1.textContent.length + .3)/2}s`;
            } else if(x === 7) {
                span.style.animationDelay = `${(i/10 + time*typing6.textContent.length + time*typing5.textContent.length + time*typing4.textContent.length + time*typing3.textContent.length + time*typing2.textContent.length + time*typing1.textContent.length + .3)/2}s`;
            } else if(x === 8) {
                span.style.animationDelay = `${(i/10 + time*typing7.textContent.length + time*typing6.textContent.length + time*typing5.textContent.length + time*typing4.textContent.length + time*typing3.textContent.length + time*typing2.textContent.length + time*typing1.textContent.length + .3)/2}s`;
            } else if(x === 9) {
                span.style.animationDelay = `${(i/10 + time*typing8.textContent.length + time*typing7.textContent.length + time*typing6.textContent.length + time*typing5.textContent.length + time*typing4.textContent.length + time*typing3.textContent.length + time*typing2.textContent.length + time*typing1.textContent.length + .3)/2}s`;
            }
            typing.parentNode.appendChild(span);
            // typing1.style.display = 'none';

            if(x != 1) {
                typing.style.display = 'none';
            }

        }
    }
}

typingFunction();

//PUT HEADING LETTER TO SPAN

const h1 = document.querySelector('h1');
const h1Text = [... h1.textContent];
h1Text.forEach((e) => {
    const span = document.createElement('span');
    span.innerHTML = `${e}`
    span.classList.add('letter');
    h1.appendChild(span);
})
h1.removeChild(h1.firstChild);

const mainBannerh2 = document.querySelector('.banner h2');
const h2Text = [... mainBannerh2.textContent];
h2Text.forEach((e) => {
    const span = document.createElement('span');
    span.innerHTML = `${e}`
    span.classList.add('letter');
    mainBannerh2.appendChild(span);
})
mainBannerh2.removeChild(mainBannerh2.firstChild);

const bigH2 = [... document.querySelectorAll('h2.big')];
bigH2.forEach(single => {
    const textArr = [... single.textContent];
    textArr.forEach(e => {
        const span = document.createElement('span');
        span.innerHTML = `${e}`
        span.classList.add('letter');
        single.appendChild(span);
    })
    if(single.classList.contains('spans')) {
        single.removeChild(single.firstChild);
        single.removeChild(single.firstChild);
    }else {
        single.removeChild(single.firstChild);
    }
    
});

const gameH2 = document.querySelector('.game-intro h2');
const gameH2Array = [... gameH2.textContent];

gameH2Array.forEach(e => {
    const span = document.createElement('span');
    span.innerHTML = `${e}`
    span.classList.add('letter');
    gameH2.appendChild(span);
})
gameH2.removeChild(gameH2.firstChild);

const contactH2 = document.querySelector('.contact_content div h2');
const contactH2Array = [... contactH2.textContent];

contactH2Array.forEach(e => {
    const span = document.createElement('span');
    span.innerHTML = `${e}`
    span.classList.add('letter');
    contactH2.appendChild(span);
})
contactH2.removeChild(contactH2.firstChild);

//BOUNCING LETTERS

$(document).ready(function () {
    "use strict";

    var span = $('.letter');

    span.on('mouseover', function () {
        
        // -- Bounce Effect -- //
        
        $(this).addClass('rubberBand animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass('rubberBand animated');
        });
        
    });
});


//PROJECTS ACTIVATION

//ALL CATEGORIES
const categories = document.querySelectorAll("#projects .menu > li");

//SINGLE
categories.forEach(categorie => {
    categorie.addEventListener('click', () => {
        
        //REMOVE ACTiVE CLASS
        categories.forEach(e => {
            e.classList.remove('active');
        })
        categorie.classList.add('active');
        

        //PROJECTS
        const projects = document.querySelectorAll('#grid .single');
        projects.forEach(project => {
            project.classList.remove('none');
            if(categorie.textContent === "Vanilla JS") {
                if(!(project.classList.contains('app-single'))) {
                    project.classList.add('none')
                }
            } else if(categorie.textContent === "REACT") {
                if(!(project.classList.contains('react-single'))) {
                    project.classList.add('none')
                }
            }  else if(categorie.textContent === "HTML/CSS") {
                if(!(project.classList.contains('page-single'))) {
                    project.classList.add('none')
                }
            }
        })
    })
})