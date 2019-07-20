// Loader 
const loader = document.querySelector('.loader');
const main = document.querySelector('.main');

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none';

    main.style.display = 'block';
    setTimeout(() => main.style.opacity = 1, 50);
  }, 2000)
}


// Search Forms

const stackForm = document.querySelector(".stack-form");
const googleForm = document.querySelector(".google-form");
const youtubeForm = document.querySelector(".youtube-form");

// Search engine buttons

const stackBtn1 = document.querySelector(".stack-list1-btn");
const googleBtn1 = document.querySelector(".google-list1-btn");
const youtubeBtn1 = document.querySelector(".youtube-list1-btn");

const stackBtn2 = document.querySelector(".stack-list2-btn");
const googleBtn2 = document.querySelector(".google-list2-btn");
const youtubeBtn2 = document.querySelector(".youtube-list2-btn");

const stackBtn3 = document.querySelector(".stack-list3-btn");
const googleBtn3 = document.querySelector(".google-list3-btn");
const youtubeBtn3 = document.querySelector(".youtube-list3-btn");

// functions

stackBtn1.addEventListener("click", function() {
  stackForm.style.display = "flex !important"
  googleForm.style.display = "none"
  youtubeForm.style.display = "none"
});
googleBtn1.addEventListener("click", function() {
  stackForm.style.display = "none"
  googleForm.style.display = "flex"
  youtubeForm.style.display = "none"
});
youtubeBtn1.addEventListener("click", function() {
  stackForm.style.display = "none"
  googleForm.style.display = "none"
  youtubeForm.style.display = "flex"
});

stackBtn2.addEventListener("click", function() {
  stackForm.style.display = "flex"
  googleForm.style.display = "none"
  youtubeForm.style.display = "none"
});
googleBtn2.addEventListener("click", function() {
  stackForm.style.display = "none"
  googleForm.style.display = "flex"
  youtubeForm.style.display = "none"
});
youtubeBtn2.addEventListener("click", function() {
  stackForm.style.display = "none"
  googleForm.style.display = "none"
  youtubeForm.style.display = "flex"
});

stackBtn3.addEventListener("click", function() {
  stackForm.style.display = "flex"
  googleForm.style.display = "none"
  youtubeForm.style.display = "none"
});
googleBtn3.addEventListener("click", function() {
  stackForm.style.display = "none"
  googleForm.style.display = "flex"
  youtubeForm.style.display = "none"
});
youtubeBtn3.addEventListener("click", function() {
  stackForm.style.display = "none"
  googleForm.style.display = "none"
  youtubeForm.style.display = "flex"
});

// Search Mechanism
const stackInput = document.querySelector(".stack-input");
const googleInput = document.querySelector(".google-input");
const youtubeInput = document.querySelector(".youtube-input");
const stackLogoBtn = document.querySelector(".stack-logo-btn");
const googleLogoBtn = document.querySelector(".google-logo-btn");
const youtubeLogoBtn = document.querySelector(".youtube-logo-btn");

function submitStackForm(e) {
  e.preventDefault();
  const URL = "https://stackoverflow.com/search?q=";
  const { value } = stackInput;
  if (value.length == 0) {
    return false
  }

  const searchParam = value
    .split(" ")
    .filter(Boolean)
    .join("+");

  const searchURL = URL + searchParam;

  return (window.location.href = searchURL);
}

stackForm.addEventListener("submit", submitStackForm);
stackLogoBtn.addEventListener("click", submitStackForm);

function submitGoogleForm(e) {
  e.preventDefault();
  const URL = "https://www.google.com/search?q=";
  const { value } = googleInput;
  if (value.length == 0) {
    return false
  }

  const searchParam = value
    .split(" ")
    .filter(Boolean)
    .join("+");

  const searchURL = URL + searchParam;

  return (window.location.href = searchURL);
}


googleForm.addEventListener("submit", submitGoogleForm);
googleLogoBtn.addEventListener("click", submitGoogleForm);

function submitYoutubeForm(e) {
  e.preventDefault();
  const URL = "https://www.youtube.com/results?search_query=";
  const { value } = youtubeInput;
  if (value.length == 0) {
    return false
  }

  const searchParam = value
    .split(" ")
    .filter(Boolean)
    .join("+");

  const searchURL = URL + searchParam;

  return (window.location.href = searchURL);
}

youtubeForm.addEventListener("submit", submitYoutubeForm);
youtubeLogoBtn.addEventListener("click", submitYoutubeForm);



// Time and Date
const myDate = document.querySelector('.date');
const myTime = document.querySelector('.time');

// Date
function startDate() {
  let today = new Date();
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var year = today.getFullYear();
  myDate.innerHTML = days[today.getDay()] + " " + today.getDate() + ", " + months[today.getMonth()] + " " + year + ".";
}

startDate();

// Time

function startTime() {
  let today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var time = ('0' + h).slice(-2) + ":" + ('0' + m).slice(-2);
  
  myTime.innerHTML = time;
    if(startTime) {
      startDate()
    }
}

startTime();
setInterval(startTime, 1000);


// Blog Posts Fetch

const devPosts = (article) => {
  fetch(article)
        .then((res) => res.json())
        .then((post) => {
          const gridCtn = document.querySelector('.grid-ctn');
          let output = '';
          post.forEach(function(post){
            output += `
            <div class="col-sm">
            <div class="card border shadow mb-4 ml-auto mr-auto" title="Blog post" >
              <img src= ${post.image} alt="...">
              <div class="card-body">
                <h5 class="card-title">${post.name}</h5>
                <a href=${post.url} class="read-post-btn text-muted" target="_blank">Read post >></a>
              </div>
            </div>
          </div>
            `
          });
          gridCtn.innerHTML = output;
        })
}

// To the top button

const upBtn = document.querySelector('.up-btn');
const gridWrapper = document.querySelector('.grid-wrapper');

upBtn.addEventListener('click', function(){
  gridWrapper.scrollTop = 0;
});

// Window Load
window.addEventListener("load", function(){
  devPosts('https://raw.githubusercontent.com/mosco98/devExtension/master/articles1.json');
  init();
});

