// const all = document.getElementById('all');
const app = document.getElementById('app');
const pages = document.getElementById('pages');
const reactApp = document.getElementById('react');
let childOfgrid = document.querySelectorAll('#grid > div')
app.addEventListener('click', loadJsApp);
pages.addEventListener('click', loadPages);
reactApp.addEventListener('click', loadReact);

function loadJsApp(){
var xhr = new XMLHttpRequest();
xhr.open('GET', 'js-app.json', true);

xhr.onload = function(){
  videoBtns = document.querySelectorAll('.videoBtn');
  if(this.status == 200){
      var projects = JSON.parse(this.responseText);
    
      var output = '';
      
      for(var i in projects){
        output +=
        '<div id='+projects[i].id+'>' +
          '<div class="grid-image">'+
              `<img src=${projects[i].imageUrl}>`+
          '</div>'+
          '<div class="grid-content">'+
            '<h3><span>'+projects[i].name+'</span></h3>'+
            '<a href='+projects[i].websiteUrl+'>View Project</a>'+
            '<a href='+projects[i].githubUrl+'>GITHUB</a>'+
            '<button class="videoBtn">Video</button>'+
          '</div>'+
        '</div>';
      }
    document.getElementById('grid').innerHTML = output;
    app.classList.add('active');
    pages.classList.remove('active');
    reactApp.classList.remove('active');
    childOfgrid = document.querySelectorAll('#grid > div')
  }
  videoUpdate();
}

xhr.send();
}

loadJsApp();

function loadPages(){
var xhr = new XMLHttpRequest();
xhr.open('GET', 'pages.json', true);

xhr.onload = function(){
  if(this.status == 200){
      var projects = JSON.parse(this.responseText);
    
      var output = '';
      
      for(var i in projects){
        output +=
        '<div id='+projects[i].id+'>' +
          '<div class="grid-image">'+
              `<img class="imageFix" src=${projects[i].imageUrl}>`+
          '</div>'+
          '<div class="grid-content two-btn">'+
            '<h3><span>'+projects[i].name+'</span></h3>'+
            '<a href='+projects[i].websiteUrl+'>View Project</a>'+
            '<a href='+projects[i].githubUrl+'>GITHUB</a>'+
          '</div>'+
        '</div>';
      }
  document.getElementById('grid').innerHTML = output;
  app.classList.remove('active');
  pages.classList.add('active');
  reactApp.classList.remove('active');
  childOfgrid = document.querySelectorAll('#grid > div')
  }
}

xhr.send();
}

// loadPages();

function loadReact(){
const xhr = new XMLHttpRequest();
xhr.open('GET', 'react-app.json', true);

xhr.onload = function(){
  videoBtns = document.querySelectorAll('.videoBtn');
  if(this.status == 200){
      var projects = JSON.parse(this.responseText);
    
      var output = '';
      
      for(var i in projects){
        output +=
        '<div id='+projects[i].id+'>' +
          '<div class="grid-image">'+
              `<img  src=${projects[i].imageUrl}>`+
          '</div>'+
          '<div class="grid-content">'+
            '<h3><span>'+projects[i].name+'</span></h3>'+
            '<a class="width-100" href='+projects[i].githubUrl+'>GITHUB</a>'+
            '<button class="videoBtn">Video</button>'+
          '</div>'+
        '</div>';
      }
  document.getElementById('grid').innerHTML = output;
  app.classList.remove('active');
  pages.classList.remove('active');
  reactApp.classList.add('active');
  childOfgrid = document.querySelectorAll('#grid > div')
  }
  videoUpdate();

}

xhr.send();
}
