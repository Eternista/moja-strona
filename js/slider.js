const slider = document.querySelector('.slider');
const slides = [... document.querySelectorAll('.slide')];
const nextBtn = document.querySelector('.fa-chevron-right');
const prevBtn = document.querySelector('.fa-chevron-left');

const nextSlide = () => {
    nextBtn.classList.add('clicked');
    for(var i = 0; i < slides.length; i++) {
        if(slides[i].classList.contains('left')){
            slides[i].classList.remove('left');
            i++;
            if(i == slides.length) {
                i = 0;
            }
            slides[i].classList.add('left');
        }
    }
    for(var i = 0; i < slides.length; i++) {
        if(slides[i].classList.contains('active')){
            slides[i].classList.remove('active');
            i++;
            if(i == slides.length) {
                i = 0;
            }
            slides[i].classList.add('active');
        }
    }
    for(var i = 0; i < slides.length; i++) {
        if(slides[i].classList.contains('right')){
            slides[i].classList.remove('right');
            i++;
            if(i == slides.length) {
                i = 0;
            }
            slides[i].classList.add('right');
        }
    }
}

const previousSlide = () => {
    prevBtn.classList.add('clicked');
    for(var i = slides.length - 1; i >= 0; i--) {
        if(slides[i].classList.contains('left')){
            slides[i].classList.remove('left');
            i--;
            if(i < 0) {
                i = slides.length - 1;
            }
            slides[i].classList.add('left');
        }
    }
    for(var i = slides.length - 1; i >= 0; i--) {
        if(slides[i].classList.contains('active')){
            slides[i].classList.remove('active');
            i--;
            if(i < 0) {
                i = slides.length - 1;
            }
            slides[i].classList.add('active');
        }
    }
    for(var i = slides.length - 1; i >= 0; i--) {
        if(slides[i].classList.contains('right')){
            slides[i].classList.remove('right');
            i--;
            if(i < 0) {
                i = slides.length - 1;
            }
            slides[i].classList.add('right');
        }
    }
}
setInterval(() => {
    if(!nextBtn.classList.contains('clicked') || !prevBtn.classList.contains('clicked')) {
        nextSlide();
    }
    nextBtn.classList.remove('clicked');
    prevBtn.classList.remove('clicked');
}, 5000);

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', previousSlide);