// Window Load

window.addEventListener("load", function(){
  document.body.className += ' fade-in';
});

// Toggling Search Engines

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
googleLogoBtn.addEventListener("click", submitStackForm);

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
youtubeLogoBtn.addEventListener("click", submitStackForm);
