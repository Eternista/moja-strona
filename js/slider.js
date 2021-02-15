const slider = document.querySelector('.slider');
const slides = [... document.querySelectorAll('.slide')];
const nextBtn = document.querySelector('.fa-chevron-right');
const prevBtn = document.querySelector('.fa-chevron-left');
const dots = [... document.querySelectorAll('.dot')];
var i = 0;

const nextSlide = () => {
    nextBtn.classList.add('clicked');
    for(i = 0; i < slides.length; i++) {
        if(slides[i].classList.contains('left')){
            slides[i].classList.remove('left');
            i++;
            if(i == slides.length) {
                i = 0;
            }
            slides[i].classList.add('left');
        }
    }
    for(i = 0; i < slides.length; i++) {
        if(slides[i].classList.contains('active')){
            slides[i].classList.remove('active');
            i++;
            if(i == slides.length) {
                i = 0;
            }
            slides[i].classList.add('active');
        }
    }
    for(i = 0; i < slides.length; i++) {
        if(slides[i].classList.contains('right')){
            slides[i].classList.remove('right');
            i++;
            if(i == slides.length) {
                i = 0;
            }
            slides[i].classList.add('right');
        }
    }
    for(i = 0; i < dots.length; i++) {
        if(dots[i].classList.contains('active')){
            dots[i].classList.remove('active');
            i++;
            if(i == dots.length) {
                i = 0;
            }
            dots[i].classList.add('active');
        }
    }
}

const previousSlide = () => {
    prevBtn.classList.add('clicked');
    for(i = slides.length - 1; i >= 0; i--) {
        if(slides[i].classList.contains('left')){
            slides[i].classList.remove('left');
            i--;
            if(i < 0) {
                i = slides.length - 1;
            }
            slides[i].classList.add('left');
        }
    }
    for(i = slides.length - 1; i >= 0; i--) {
        if(slides[i].classList.contains('active')){
            slides[i].classList.remove('active');
            i--;
            if(i < 0) {
                i = slides.length - 1;
            }
            slides[i].classList.add('active');
        }
    }
    for(i = slides.length - 1; i >= 0; i--) {
        if(slides[i].classList.contains('right')){
            slides[i].classList.remove('right');
            i--;
            if(i < 0) {
                i = slides.length - 1;
            }
            slides[i].classList.add('right');
        }
    }
    for(i = dots.length - 1; i >= 0; i--) {
        if(dots[i].classList.contains('active')){
            dots[i].classList.remove('active');
            i--;
            if(i < 0) {
                i = dots.length - 1;
            }
            dots[i].classList.add('active');
        }
    }
}

dots.forEach((dot) => {
    dot.addEventListener('click', clickSlide = () => {
        for(i = 0; i < dots.length; i++) {
            if(dots[i].classList.contains('active')) {
                dots[i].classList.remove('active')
            }
            if(slides[i].classList.contains('left')) {
                slides[i].classList.remove('left')
            }
            if(slides[i].classList.contains('active')) {
                slides[i].classList.remove('active')
            }
            if(slides[i].classList.contains('right')) {
                slides[i].classList.remove('right')
            }
        }
        dot.classList.add('active');
        const dotNum = Number(dot.textContent);
        slides[dotNum].classList.add('active');
        dotNumPlus = dotNum + 1;
        if(dotNumPlus === dots.length){
            dotNumPlus = 0;
        }
        slides[dotNumPlus].classList.add('right');
        let dotNumMin = dotNum - 1;
        if(dotNumMin < 0){
            dotNumMin = dots.length - 1;
        }
        slides[dotNumMin].classList.add('left');
        slides[dotNum].style.transition = '0s';
        slides[dotNumPlus].style.transition = '0s';
        slides[dotNumMin].style.transition = '0s';
        console.log(slides[dotNum],slides[dotNumPlus], slides[dotNumMin]);
        setTimeout(() => {
            slides[dotNum].style.transition = '.3s linear';
            slides[dotNumPlus].style.transition = '.3s linear';
            slides[dotNumMin].style.transition = '.3s linear'; 
        }, 100);
    })
})

setInterval(() => {
    if(!nextBtn.classList.contains('clicked') || !prevBtn.classList.contains('clicked')) {
        nextSlide();
    }
    nextBtn.classList.remove('clicked');
    prevBtn.classList.remove('clicked');
}, 5000);

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', previousSlide);