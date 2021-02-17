let mouseCursor = document.querySelector('.cursor');
window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}
//HEADING HOVER

const headings = document.querySelectorAll('.heading:not(h3)');
const headingsArray = [... headings];
headingsArray.forEach(single => {
    single.addEventListener('mouseover', function(){
        mouseCursor.classList.add('hover-heading');
        single.classList.add("hover");
    })
    single.addEventListener('mouseleave', function(){
        mouseCursor.classList.remove('hover-heading');
        single.classList.remove("hover");
    })
})

//HAMBURGER HOVER

hamb.addEventListener('mouseover', function(){
    mouseCursor.classList.add('hover');
    hamb.classList.add("hover");
})
hamb.addEventListener('mouseleave', function(){
    mouseCursor.classList.remove('hover');
    hamb.classList.remove("hover");
})

//TRANSPARENT BUTTON HOVER

const trans = document.querySelectorAll('.transparent span');
const transArray = [... trans];
transArray.forEach(single => {
    single.addEventListener('mouseover', function(){
        mouseCursor.classList.add('hover','hover-trans');
    })
    single.addEventListener('mouseleave', function(){
        mouseCursor.classList.remove('hover','hover-trans');
    })
})

// BUTTON HOVER

const btns = document.querySelectorAll('.btn:not(.transparent)');
const btnsArray = [... btns];
btnsArray.forEach(single => {
    single.addEventListener('mouseover', function(){
        mouseCursor.classList.add('hover','hover-btn');
    })
    single.addEventListener('mouseleave', function(){
        mouseCursor.classList.remove('hover','hover-btn');
    })
})


//IMAGE HOVER

const image = document.querySelector('.myPhoto');

image.addEventListener('mouseover', function(){
    mouseCursor.classList.add('hover', 'imageHover');
})
image.addEventListener('mouseleave', function(){
    mouseCursor.classList.remove('hover', 'imageHover');
})