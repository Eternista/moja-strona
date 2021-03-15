
// if(width > 992){
  class Scroller {
    constructor(rootSelector) {
      const rootElement = document.querySelector(rootSelector);
      this.sections = document.querySelectorAll('section');
      const sectionsArr = [...this.sections]
  
      const currentSectionIndex = sectionsArr.findIndex(this.isScrolledIntoView);
  
      this.currentSectionIndex = Math.max(currentSectionIndex, 0);
  
      this.isThrottled = false;
    }
  
    isScrolledIntoView(el) {
      const rect = el.getBoundingClientRect();
      const elemTop = rect.top;
      const elemBottom = Math.floor(rect.bottom);
  
      const isVissible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  
      return isVissible;
    }
  
    listenScroll(event) {
      if (this.isThrottled) return;
      this.isThrottled = true;
  
      setTimeout(() => {
        this.isThrottled = false;
      }, 1000);
  
      const direction = event.deltaY > 0 ? 1 : -1;
  
      this.scroll(direction);
    }
  
    scroll(direction) {
      if (direction === 1) {
        const isLastSection = this.currentSectionIndex === this.sections.length - 1;
        if (isLastSection) return;
      } else if (direction === -1) {
        const firstSection = this.currentSectionIndex === 0;
        if (firstSection) return;
      }
  
      this.currentSectionIndex = this.currentSectionIndex + direction;
  
      this.scrollToCurrentSection();
    }
  
    scrollToCurrentSection() {
      this.sections[this.currentSectionIndex].scrollIntoView({
        behavior: 'smooth',
        block: "start"
      })
    }
  
  }
// }
  
//PROGRESS BAR CLASS GIVING

window.addEventListener('scroll', function(){
  if(width > 1280) {
    if(Number(window.pageYOffset) >= Number(document.querySelector('#about').scrollHeight) + Number(document.querySelector('#about').offsetHeight)) {
      document.querySelector('.progressbars').classList.remove('show');
    }
    else if(Number(window.pageYOffset) >= Number(document.querySelector('#about').scrollHeight)){
      document.querySelector('.progressbars').classList.add('show');
    } else {
      document.querySelector('.progressbars').classList.remove('show');
    }
  } else {
    document.querySelector('.progressbars').classList.add('show');
  }
})

