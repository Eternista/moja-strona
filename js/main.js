//HAMBURGER MENU ACTIVE

const hamb = document.querySelector('.hamburger');
hamb.addEventListener('click', function(){
    hamb.classList.toggle('is-active');
    document.querySelector('.scroller__navigation').classList.toggle('active');
})


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

//TEXT "TYPING"

const typing1 = document.querySelector('.typing1 .remove');
const typ1Array = [... typing1.textContent];


for(let i=0; i < typing1.textContent.length; i++) {
    const span = document.createElement('span');
    span.innerHTML = `${typ1Array[i]}`;
    span.style.animationDelay = `${i/10}s`
    typing1.parentNode.appendChild(span);
    typing1.style.display = 'none';
}

const typing2 = document.querySelector('.typing2 .remove');
const typ2Array = [... typing2.textContent];


for(let i=0; i < typing2.textContent.length; i++) {
    const that = typing2;
    const span = document.createElement('span');
    span.innerHTML = `${typ2Array[i]}`;
    span.style.animationDelay = `${i/10 + .1*typing1.textContent.length + .2}s`
    that.parentNode.appendChild(span);
    that.style.display = 'none';
}

const typing3 = document.querySelector('.typing3 .remove');
const typ3Array = [... typing3.textContent];


for(let i=0; i < typing3.textContent.length; i++) {
    const that = typing3;
    const span = document.createElement('span');
    span.innerHTML = `${typ3Array[i]}`;
    span.style.animationDelay = `${i/10 + .1*typing2.textContent.length + .1*typing1.textContent.length + .1}s`
    that.parentNode.appendChild(span);
    that.style.display = 'none';
}

const typing4 = document.querySelector('.typing4 .remove');
const typ4Array = [... typing4.textContent];


for(let i=0; i < typing4.textContent.length; i++) {
    const that = typing4;
    const span = document.createElement('span');
    span.innerHTML = `${typ4Array[i]}`;
    span.style.animationDelay = `${i/10 + .1*typing3.textContent.length + .1*typing2.textContent.length + .1*typing1.textContent.length + .3}s`
    that.parentNode.appendChild(span);
    that.style.display = 'none';
}

const typing5 = document.querySelector('.typing5 .remove');
const typ5Array = [... typing5.textContent];


for(let i=0; i < typing5.textContent.length; i++) {
    const that = typing5;
    const span = document.createElement('span');
    span.innerHTML = `${typ5Array[i]}`;
    span.style.animationDelay = `${i/10 + .1*typing4.textContent.length + .1*typing3.textContent.length + .1*typing2.textContent.length + .1*typing1.textContent.length + .3}s`
    that.parentNode.appendChild(span);
    that.style.display = 'none';
}

const typing6 = document.querySelector('.typing6 .remove');
const typ6Array = [... typing6.textContent];


for(let i=0; i < typing6.textContent.length; i++) {
    const that = typing6;
    const span = document.createElement('span');
    span.innerHTML = `${typ6Array[i]}`;
    span.style.animationDelay = `${i/10 + .1*typing5.textContent.length + .1*typing4.textContent.length + .1*typing3.textContent.length + .1*typing2.textContent.length + .1*typing1.textContent.length + .3}s`
    that.parentNode.appendChild(span);
    that.style.display = 'none';
}

const typing7 = document.querySelector('.typing7 .remove');
const typ7Array = [... typing7.textContent];


for(let i=0; i < typing7.textContent.length; i++) {
    const that = typing7;
    const span = document.createElement('span');
    span.innerHTML = `${typ7Array[i]}`;
    span.style.animationDelay = `${i/10 + .1*typing6.textContent.length + .1*typing5.textContent.length + .1*typing4.textContent.length + .1*typing3.textContent.length + .1*typing2.textContent.length + .1*typing1.textContent.length + .3}s`
    that.parentNode.appendChild(span);
    that.style.display = 'none';
}
const typing8 = document.querySelector('.typing8 .remove');
const typ8Array = [... typing8.textContent];


for(let i=0; i < typing8.textContent.length; i++) {
    const that = typing8;
    const span = document.createElement('span');
    span.innerHTML = `${typ8Array[i]}`;
    span.style.animationDelay = `${i/10 + .1*typing7.textContent.length + .1*typing6.textContent.length + .1*typing5.textContent.length + .1*typing4.textContent.length + .1*typing3.textContent.length + .1*typing2.textContent.length + .1*typing1.textContent.length + .3}s`
    that.parentNode.appendChild(span);
    that.style.display = 'none';
}

const typing9 = document.querySelector('.typing9 .remove');
const typ9Array = [... typing9.textContent];


for(let i=0; i < typing9.textContent.length; i++) {
    const that = typing9;
    const span = document.createElement('span');
    span.innerHTML = `${typ9Array[i]}`;
    span.style.animationDelay = `${i/10 + .1*typing8.textContent.length + .1*typing7.textContent.length + .1*typing6.textContent.length + .1*typing5.textContent.length + .1*typing4.textContent.length + .1*typing3.textContent.length + .1*typing2.textContent.length + .1*typing1.textContent.length + .3}s`
    that.parentNode.appendChild(span);
    that.style.display = 'none';
}

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