const followBox = document.querySelector('.followBox');

window.addEventListener('scroll', function(){
    if(window.scrollY > 0 && window.scrollY < 200) {
        
        if(followBox.classList.contains('active')){
            followBox.classList.add('active0');
            followBox.classList.remove('active')
        }
    }
    else if(window.scrollY > 200 & window.scrollY < 900) {
        followBox.classList.remove('active0');
        followBox.classList.add('active')
        followBox.classList.remove('active2')
    } else if(window.scrollY > 900 && window.scrollY < 1500) {
        followBox.classList.remove('active')
        followBox.classList.add('active2')
        followBox.classList.remove('active3')
    }  else if(window.scrollY > 1500 && window.scrollY < 2500) {
        followBox.classList.remove('active2')
        followBox.classList.add('active3')
    }


})