const all = document.getElementById('all');
const app = document.getElementById('app');
const pages = document.getElementById('pages');
const reactApp = document.getElementById('react');
let childOfgrid = document.querySelectorAll('#grid > div')
all.addEventListener('click', loadAll);
app.addEventListener('click', loadJsApp);
pages.addEventListener('click', loadPages);
reactApp.addEventListener('click', loadReact);

function loadAll(){
var xhr = new XMLHttpRequest();
xhr.open('GET', 'all.json', true);

xhr.onload = function(){
if(this.status == 200){
    var projects = JSON.parse(this.responseText);
  
    var output = '';
    
    for(var i in projects){
      output += '<div id='+projects[i].id+'>' +
      '<div class="gridContent">'+'<h3>'+projects[i].name+'</h3>' +
      '<p>'+projects[i].type+'</p>' +'</div>'+
      `<img class='grid-image' src=${projects[i].url}>`+
      '</div>';
    }
  document.getElementById('grid').innerHTML = output;
  document.getElementById('grid').classList.remove('two-elements');
  all.classList.add('active');
  app.classList.remove('active');
  pages.classList.remove('active');
  reactApp.classList.remove('active');
  childOfgrid = document.querySelectorAll('#grid > div')
}
}

xhr.send();
}

loadAll(); 

function loadJsApp(){
var xhr = new XMLHttpRequest();
xhr.open('GET', 'js-app.json', true);

xhr.onload = function(){
  if(this.status == 200){
      var projects = JSON.parse(this.responseText);
    
      var output = '';
      
      for(var i in projects){
        output += '<div id='+projects[i].id+'>' +
        '<div class="gridContent">'+'<h3>'+projects[i].name+'</h3>' +
        '<p>'+projects[i].type+'</p>' +'</div>'+
        `<img class='grid-image' src=${projects[i].url}>`+
        '</div>';
      }
    document.getElementById('grid').innerHTML = output;
    document.getElementById('grid').classList.add('two-elements');
    all.classList.remove('active');
    app.classList.add('active');
    pages.classList.remove('active');
    reactApp.classList.remove('active');
    childOfgrid = document.querySelectorAll('#grid > div')
  }
}

xhr.send();
}
function loadPages(){
var xhr = new XMLHttpRequest();
xhr.open('GET', 'pages.json', true);

xhr.onload = function(){
  if(this.status == 200){
      var projects = JSON.parse(this.responseText);
    
      var output = '';
      
      for(var i in projects){
        output += '<div id='+projects[i].id+'>' +
        '<div class="gridContent">'+'<h3>'+projects[i].name+'</h3>' +
        '<p>'+projects[i].type+'</p>' +'</div>'+
        `<img class='grid-image' src=${projects[i].url}>`+
        '</div>';
      }
    document.getElementById('grid').innerHTML = output;
    document.getElementById('grid').classList.add('two-elements');
    all.classList.remove('active');
  app.classList.remove('active');
  pages.classList.add('active');
  reactApp.classList.remove('active');
  childOfgrid = document.querySelectorAll('#grid > div')
  }
}

xhr.send();
}
function loadReact(){
const xhr = new XMLHttpRequest();
xhr.open('GET', 'react-app.json', true);

xhr.onload = function(){
  if(this.status == 200){
      var projects = JSON.parse(this.responseText);
    
      var output = '';
      
      for(var i in projects){
        output += '<div id='+projects[i].id+'>' +
        '<div class="gridContent">'+'<h3>'+projects[i].name+'</h3>' +
        '<p>'+projects[i].type+'</p>' +'</div>'+
        `<img class='grid-image' src=${projects[i].url}>`+
        '</div>';
      }
    document.getElementById('grid').innerHTML = output;
    document.getElementById('grid').classList.add('two-elements');
    all.classList.remove('active');
  app.classList.remove('active');
  pages.classList.remove('active');
  reactApp.classList.add('active');
  childOfgrid = document.querySelectorAll('#grid > div')
  }
}

xhr.send();
}