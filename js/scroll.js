const followBox = document.querySelector('.followBox');

window.addEventListener('scroll', function(){
    if(window.scrollY > 0 && window.scrollY < 200) {
        
        if(followBox.classList.contains('active')){
            followBox.classList.add('active0');
            followBox.classList.remove('active')
        }
    }
    else if(window.scrollY > 200 & window.scrollY < 800) {
        followBox.classList.remove('active0');
        followBox.classList.add('active')
        followBox.classList.remove('active2')
    } else if(window.scrollY > 800 && window.scrollY < 1300) {
        followBox.classList.remove('active')
        followBox.classList.add('active2')
    }  else if(window.scrollY > 1300 && window.scrollY < 2400) {
        followBox.classList.remove('active2')
        followBox.classList.add('active3')
    }


})