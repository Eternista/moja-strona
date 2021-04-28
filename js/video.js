const videoUpdate =() => {
    let videoBtns = document.querySelectorAll('.videoBtn');
    setTimeout(() =>{videoBtns = document.querySelectorAll('.videoBtn')}, 200);
    const videoShow  = (e) => {
        document.querySelector('.videoClose').classList.add('active');
       const name = e.target.parentNode.children[0];
       document.querySelectorAll('.videoName').forEach(title => {
            if(title.textContent === name.textContent) {
                title.parentElement.classList.add('active');
                title.parentElement.children[1].play();
                title.parentElement.addEventListener('click', () => {
                    title.parentElement.children[1].pause();
                    title.parentElement.children[1].currentTime=0;
                    if(title.parentElement.classList.contains('videoContainer')) {
                        title.parentElement.classList.remove('active');
                    }
                })
            }
       })
    }
    setTimeout(() => {
        videoBtns.forEach(play => {
            play.addEventListener('click', videoShow);
        });
    }, 250)
}

app.addEventListener('click', videoUpdate);
reactApp.addEventListener('click', videoUpdate);

window.addEventListener('load', videoUpdate());
videoUpdate();

document.querySelector('.videoClose').addEventListener('click', () => {
    document.querySelector('.videoContainer.active').classList.remove('active');
    document.querySelector('.videoClose.active').classList.remove('active');
})