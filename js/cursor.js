let mouseCursor = document.querySelector('.cursor');
window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

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

const navLinks = [... document.querySelectorAll('header ul li a:not(.btn)')];
navLinks.forEach(single => {
    single.addEventListener('mouseover', function(){
        mouseCursor.classList.add('hover');
        single.classList.add("hover");
    })
    single.addEventListener('mouseleave', function(){
        mouseCursor.classList.remove('hover');
        single.classList.remove("hover");
    })
})

hamb.addEventListener('mouseover', function(){
    mouseCursor.classList.add('hover');
    hamb.classList.add("hover");
})
hamb.addEventListener('mouseleave', function(){
    mouseCursor.classList.remove('hover');
    hamb.classList.remove("hover");
})

// const navLinks = [... document.querySelectorAll('header ul li a')];
// const header = document.querySelector('header');
// navLinks.forEach(single => {
//     header.addEventListener('mouseover', function(){
//         mouseCursor.classList.add('hover');
//         header.classList.add("hover");
//     })
//     header.addEventListener('mouseleave', function(){
//         mouseCursor.classList.remove('hover');
//         header.classList.remove("hover");
//     })
// })