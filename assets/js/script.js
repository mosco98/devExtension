// Loader 
const loader = document.querySelector('.loader');
const main = document.querySelector('.main');

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none';

    main.style.display = 'block';
    setTimeout(() => main.style.opacity = 1, 50);
  }, 1000)
}
init();


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
const myGreeting = document.querySelector('.greeting');

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
    };
    if(h <= 11) {
      myGreeting.innerHTML = "Good Morning there!"
    }; 
    if(h <= 16 && h > 11) {
      myGreeting.innerHTML = "Good Afternoon there!"
    };
    if(h <= 23 && h >= 16) {
      myGreeting.innerHTML = "Good Evening there!"
    }
}

startTime();
setInterval(startTime, 1000);



// Country
const countries = [
  {
   "image": "https://www.countryflags.io/AD/flat/64.png",
   "name": "Andorra"
  },
  {
   "image": "https://www.countryflags.io/AE/flat/64.png",
   "name": "United Arab Emirates"
  },
  {
   "image": "https://www.countryflags.io/AF/flat/64.png",
   "name": "Afghanistan"
  },
  {
   "image": "https://www.countryflags.io/AG/flat/64.png",
   "name": "Antigua and Barbuda"
  },
  {
   "image": "https://www.countryflags.io/AI/flat/64.png",
   "name": "Anguilla"
  },
  {
   "image": "https://www.countryflags.io/AL/flat/64.png",
   "name": "Albania"
  },
  {
   "image": "https://www.countryflags.io/AM/flat/64.png",
   "name": "Armenia"
  },
  {
   "image": "https://www.countryflags.io/AN/flat/64.png",
   "name": "Netherlands Antilles"
  },
  {
   "image": "https://www.countryflags.io/AO/flat/64.png",
   "name": "Angola"
  },
  {
   "image": "https://www.countryflags.io/AQ/flat/64.png",
   "name": "Antarctica"
  },
  {
   "image": "https://www.countryflags.io/AR/flat/64.png",
   "name": "Argentina"
  },
  {
   "image": "https://www.countryflags.io/AS/flat/64.png",
   "name": "American Samoa"
  },
  {
   "image": "https://www.countryflags.io/AT/flat/64.png",
   "name": "Austria"
  },
  {
   "image": "https://www.countryflags.io/AU/flat/64.png",
   "name": "Australia"
  },
  {
   "image": "https://www.countryflags.io/AW/flat/64.png",
   "name": "Aruba"
  },
  {
   "image": "https://www.countryflags.io/AX/flat/64.png",
   "name": "Åland Islands"
  },
  {
   "image": "https://www.countryflags.io/AZ/flat/64.png",
   "name": "Azerbaijan"
  },
  {
   "image": "https://www.countryflags.io/BA/flat/64.png",
   "name": "Bosnia and Herzegovina"
  },
  {
   "image": "https://www.countryflags.io/BB/flat/64.png",
   "name": "Barbados"
  },
  {
   "image": "https://www.countryflags.io/BD/flat/64.png",
   "name": "Bangladesh"
  },
  {
   "image": "https://www.countryflags.io/BE/flat/64.png",
   "name": "Belgium"
  },
  {
   "image": "https://www.countryflags.io/BF/flat/64.png",
   "name": "Burkina Faso"
  },
  {
   "image": "https://www.countryflags.io/BG/flat/64.png",
   "name": "Bulgaria"
  },
  {
   "image": "https://www.countryflags.io/BH/flat/64.png",
   "name": "Bahrain"
  },
  {
   "image": "https://www.countryflags.io/BI/flat/64.png",
   "name": "Burundi"
  },
  {
   "image": "https://www.countryflags.io/BJ/flat/64.png",
   "name": "Benin"
  },
  {
   "image": "https://www.countryflags.io/BL/flat/64.png",
   "name": "Saint Barthélemy"
  },
  {
   "image": "https://www.countryflags.io/BM/flat/64.png",
   "name": "Bermuda"
  },
  {
   "image": "https://www.countryflags.io/BN/flat/64.png",
   "name": "Brunei Darussalam"
  },
  {
   "image": "https://www.countryflags.io/BO/flat/64.png",
   "name": "Bolivia"
  },
  {
   "image": "https://www.countryflags.io/BQ/flat/64.png",
   "name": "Bonaire, Sint Eustatius and Saba"
  },
  {
   "image": "https://www.countryflags.io/BR/flat/64.png",
   "name": "Brazil"
  },
  {
   "image": "https://www.countryflags.io/BS/flat/64.png",
   "name": "Bahamas"
  },
  {
   "image": "https://www.countryflags.io/BT/flat/64.png",
   "name": "Bhutan"
  },
  {
   "image": "https://www.countryflags.io/BV/flat/64.png",
   "name": "Bouvet Island"
  },
  {
   "image": "https://www.countryflags.io/BW/flat/64.png",
   "name": "Botswana"
  },
  {
   "image": "https://www.countryflags.io/BY/flat/64.png",
   "name": "Belarus"
  },
  {
   "image": "https://www.countryflags.io/BZ/flat/64.png",
   "name": "Belize"
  },
  {
   "image": "https://www.countryflags.io/CA/flat/64.png",
   "name": "Canada"
  },
  {
   "image": "https://www.countryflags.io/CC/flat/64.png",
   "name": "Cocos (Keeling) Islands"
  },
  {
   "image": "https://www.countryflags.io/CD/flat/64.png",
   "name": "Congo, The Democratic Republic Of The"
  },
  {
   "image": "https://www.countryflags.io/CF/flat/64.png",
   "name": "Central African Republic"
  },
  {
   "image": "https://www.countryflags.io/CG/flat/64.png",
   "name": "Congo"
  },
  {
   "image": "https://www.countryflags.io/CH/flat/64.png",
   "name": "Switzerland"
  },
  {
   "image": "https://www.countryflags.io/CI/flat/64.png",
   "name": "Côte D'Ivoire"
  },
  {
   "image": "https://www.countryflags.io/CK/flat/64.png",
   "name": "Cook Islands"
  },
  {
   "image": "https://www.countryflags.io/CL/flat/64.png",
   "name": "Chile"
  },
  {
   "image": "https://www.countryflags.io/CM/flat/64.png",
   "name": "Cameroon"
  },
  {
   "image": "https://www.countryflags.io/CN/flat/64.png",
   "name": "China"
  },
  {
   "image": "https://www.countryflags.io/CO/flat/64.png",
   "name": "Colombia"
  },
  {
   "image": "https://www.countryflags.io/CR/flat/64.png",
   "name": "Costa Rica"
  },
  {
   "image": "https://www.countryflags.io/CU/flat/64.png",
   "name": "Cuba"
  },
  {
   "image": "https://www.countryflags.io/CV/flat/64.png",
   "name": "Cape Verde"
  },
  {
   "image": "https://www.countryflags.io/CW/flat/64.png",
   "name": "Curaçao"
  },
  {
   "image": "https://www.countryflags.io/CX/flat/64.png",
   "name": "Christmas Island"
  },
  {
   "image": "https://www.countryflags.io/CY/flat/64.png",
   "name": "Cyprus"
  },
  {
   "image": "https://www.countryflags.io/CZ/flat/64.png",
   "name": "Czech Republic"
  },
  {
   "image": "https://www.countryflags.io/DE/flat/64.png",
   "name": "Germany"
  },
  {
   "image": "https://www.countryflags.io/DJ/flat/64.png",
   "name": "Djibouti"
  },
  {
   "image": "https://www.countryflags.io/DK/flat/64.png",
   "name": "Denmark"
  },
  {
   "image": "https://www.countryflags.io/DM/flat/64.png",
   "name": "Dominica"
  },
  {
   "image": "https://www.countryflags.io/DO/flat/64.png",
   "name": "Dominican Republic"
  },
  {
   "image": "https://www.countryflags.io/DZ/flat/64.png",
   "name": "Algeria"
  },
  {
   "image": "https://www.countryflags.io/EC/flat/64.png",
   "name": "Ecuador"
  },
  {
   "image": "https://www.countryflags.io/EE/flat/64.png",
   "name": "Estonia"
  },
  {
   "image": "https://www.countryflags.io/EG/flat/64.png",
   "name": "Egypt"
  },
  {
   "image": "https://www.countryflags.io/EH/flat/64.png",
   "name": "Western Sahara"
  },
  {
   "image": "https://www.countryflags.io/ER/flat/64.png",
   "name": "Eritrea"
  },
  {
   "image": "https://www.countryflags.io/ES/flat/64.png",
   "name": "Spain"
  },
  {
   "image": "https://www.countryflags.io/ET/flat/64.png",
   "name": "Ethiopia"
  },
  {
   "image": "https://www.countryflags.io/EU/flat/64.png"
  },
  {
   "image": "https://www.countryflags.io/FI/flat/64.png",
   "name": "Finland"
  },
  {
   "image": "https://www.countryflags.io/FJ/flat/64.png",
   "name": "Fiji"
  },
  {
   "image": "https://www.countryflags.io/FK/flat/64.png",
   "name": "Falkland Islands (Malvinas)"
  },
  {
   "image": "https://www.countryflags.io/FM/flat/64.png",
   "name": "Micronesia, Federated States Of"
  },
  {
   "image": "https://www.countryflags.io/FO/flat/64.png",
   "name": "Faroe Islands"
  },
  {
   "image": "https://www.countryflags.io/FR/flat/64.png",
   "name": "France"
  },
  {
   "image": "https://www.countryflags.io/GA/flat/64.png",
   "name": "Gabon"
  },
  {
   "image": "https://www.countryflags.io/GB/flat/64.png",
   "name": "United Kingdom"
  },
  {
   "image": "https://www.countryflags.io/GD/flat/64.png",
   "name": "Grenada"
  },
  {
   "image": "https://www.countryflags.io/GE/flat/64.png",
   "name": "Georgia"
  },
  {
   "image": "https://www.countryflags.io/GF/flat/64.png",
   "name": "French Guiana"
  },
  {
   "image": "https://www.countryflags.io/GG/flat/64.png",
   "name": "Guernsey"
  },
  {
   "image": "https://www.countryflags.io/GH/flat/64.png",
   "name": "Ghana"
  },
  {
   "image": "https://www.countryflags.io/GI/flat/64.png",
   "name": "Gibraltar"
  },
  {
   "image": "https://www.countryflags.io/GL/flat/64.png",
   "name": "Greenland"
  },
  {
   "image": "https://www.countryflags.io/GM/flat/64.png",
   "name": "Gambia"
  },
  {
   "image": "https://www.countryflags.io/GN/flat/64.png",
   "name": "Guinea"
  },
  {
   "image": "https://www.countryflags.io/GP/flat/64.png",
   "name": "Guadeloupe"
  },
  {
   "image": "https://www.countryflags.io/GQ/flat/64.png",
   "name": "Equatorial Guinea"
  },
  {
   "image": "https://www.countryflags.io/GR/flat/64.png",
   "name": "Greece"
  },
  {
   "image": "https://www.countryflags.io/GS/flat/64.png",
   "name": "South Georgia and the South Sandwich Islands"
  },
  {
   "image": "https://www.countryflags.io/GT/flat/64.png",
   "name": "Guatemala"
  },
  {
   "image": "https://www.countryflags.io/GU/flat/64.png",
   "name": "Guam"
  },
  {
   "image": "https://www.countryflags.io/GW/flat/64.png",
   "name": "Guinea-Bissau"
  },
  {
   "image": "https://www.countryflags.io/GY/flat/64.png",
   "name": "Guyana"
  },
  {
   "image": "https://www.countryflags.io/HK/flat/64.png",
   "name": "Hong Kong"
  },
  {
   "image": "https://www.countryflags.io/HM/flat/64.png",
   "name": "Heard and McDonald Islands"
  },
  {
   "image": "https://www.countryflags.io/HN/flat/64.png",
   "name": "Honduras"
  },
  {
   "image": "https://www.countryflags.io/HR/flat/64.png",
   "name": "Croatia"
  },
  {
   "image": "https://www.countryflags.io/HT/flat/64.png",
   "name": "Haiti"
  },
  {
   "image": "https://www.countryflags.io/HU/flat/64.png",
   "name": "Hungary"
  },
  {
   "image": "https://www.countryflags.io/IC/flat/64.png"
  },
  {
   "image": "https://www.countryflags.io/ID/flat/64.png",
   "name": "Indonesia"
  },
  {
   "image": "https://www.countryflags.io/IE/flat/64.png",
   "name": "Ireland"
  },
  {
   "image": "https://www.countryflags.io/IL/flat/64.png",
   "name": "Israel"
  },
  {
   "image": "https://www.countryflags.io/IM/flat/64.png",
   "name": "Isle of Man"
  },
  {
   "image": "https://www.countryflags.io/IN/flat/64.png",
   "name": "India"
  },
  {
   "image": "https://www.countryflags.io/IO/flat/64.png",
   "name": "British Indian Ocean Territory"
  },
  {
   "image": "https://www.countryflags.io/IQ/flat/64.png",
   "name": "Iraq"
  },
  {
   "image": "https://www.countryflags.io/IR/flat/64.png",
   "name": "Iran, Islamic Republic Of"
  },
  {
   "image": "https://www.countryflags.io/IS/flat/64.png",
   "name": "Iceland"
  },
  {
   "image": "https://www.countryflags.io/IT/flat/64.png",
   "name": "Italy"
  },
  {
   "image": "https://www.countryflags.io/JE/flat/64.png",
   "name": "Jersey"
  },
  {
   "image": "https://www.countryflags.io/JM/flat/64.png",
   "name": "Jamaica"
  },
  {
   "image": "https://www.countryflags.io/JO/flat/64.png",
   "name": "Jordan"
  },
  {
   "image": "https://www.countryflags.io/JP/flat/64.png",
   "name": "Japan"
  },
  {
   "image": "https://www.countryflags.io/KE/flat/64.png",
   "name": "Kenya"
  },
  {
   "image": "https://www.countryflags.io/KG/flat/64.png",
   "name": "Kyrgyzstan"
  },
  {
   "image": "https://www.countryflags.io/KH/flat/64.png",
   "name": "Cambodia"
  },
  {
   "image": "https://www.countryflags.io/KI/flat/64.png",
   "name": "Kiribati"
  },
  {
   "image": "https://www.countryflags.io/KM/flat/64.png",
   "name": "Comoros"
  },
  {
   "image": "https://www.countryflags.io/KN/flat/64.png",
   "name": "Saint Kitts And Nevis"
  },
  {
   "image": "https://www.countryflags.io/KP/flat/64.png",
   "name": "Korea, Democratic People's Republic Of"
  },
  {
   "image": "https://www.countryflags.io/KR/flat/64.png",
   "name": "Korea, Republic of"
  },
  {
   "image": "https://www.countryflags.io/KW/flat/64.png",
   "name": "Kuwait"
  },
  {
   "image": "https://www.countryflags.io/KY/flat/64.png",
   "name": "Cayman Islands"
  },
  {
   "image": "https://www.countryflags.io/KZ/flat/64.png",
   "name": "Kazakhstan"
  },
  {
   "image": "https://www.countryflags.io/LA/flat/64.png",
   "name": "Lao People's Democratic Republic"
  },
  {
   "image": "https://www.countryflags.io/LB/flat/64.png",
   "name": "Lebanon"
  },
  {
   "image": "https://www.countryflags.io/LC/flat/64.png",
   "name": "Saint Lucia"
  },
  {
   "image": "https://www.countryflags.io/LI/flat/64.png",
   "name": "Liechtenstein"
  },
  {
   "image": "https://www.countryflags.io/LK/flat/64.png",
   "name": "Sri Lanka"
  },
  {
   "image": "https://www.countryflags.io/LR/flat/64.png",
   "name": "Liberia"
  },
  {
   "image": "https://www.countryflags.io/LS/flat/64.png",
   "name": "Lesotho"
  },
  {
   "image": "https://www.countryflags.io/LT/flat/64.png",
   "name": "Lithuania"
  },
  {
   "image": "https://www.countryflags.io/LU/flat/64.png",
   "name": "Luxembourg"
  },
  {
   "image": "https://www.countryflags.io/LV/flat/64.png",
   "name": "Latvia"
  },
  {
   "image": "https://www.countryflags.io/LY/flat/64.png",
   "name": "Libya"
  },
  {
   "image": "https://www.countryflags.io/MA/flat/64.png",
   "name": "Morocco"
  },
  {
   "image": "https://www.countryflags.io/MC/flat/64.png",
   "name": "Monaco"
  },
  {
   "image": "https://www.countryflags.io/MD/flat/64.png",
   "name": "Moldova, Republic of"
  },
  {
   "image": "https://www.countryflags.io/ME/flat/64.png",
   "name": "Montenegro"
  },
  {
   "image": "https://www.countryflags.io/MF/flat/64.png",
   "name": "Saint Martin"
  },
  {
   "image": "https://www.countryflags.io/MG/flat/64.png",
   "name": "Madagascar"
  },
  {
   "image": "https://www.countryflags.io/MH/flat/64.png",
   "name": "Marshall Islands"
  },
  {
   "image": "https://www.countryflags.io/MK/flat/64.png",
   "name": "Macedonia, the Former Yugoslav Republic Of"
  },
  {
   "image": "https://www.countryflags.io/ML/flat/64.png",
   "name": "Mali"
  },
  {
   "image": "https://www.countryflags.io/MM/flat/64.png",
   "name": "Myanmar"
  },
  {
   "image": "https://www.countryflags.io/MN/flat/64.png",
   "name": "Mongolia"
  },
  {
   "image": "https://www.countryflags.io/MO/flat/64.png",
   "name": "Macao"
  },
  {
   "image": "https://www.countryflags.io/MP/flat/64.png",
   "name": "Northern Mariana Islands"
  },
  {
   "image": "https://www.countryflags.io/MQ/flat/64.png",
   "name": "Martinique"
  },
  {
   "image": "https://www.countryflags.io/MR/flat/64.png",
   "name": "Mauritania"
  },
  {
   "image": "https://www.countryflags.io/MS/flat/64.png",
   "name": "Montserrat"
  },
  {
   "image": "https://www.countryflags.io/MT/flat/64.png",
   "name": "Malta"
  },
  {
   "image": "https://www.countryflags.io/MU/flat/64.png",
   "name": "Mauritius"
  },
  {
   "image": "https://www.countryflags.io/MV/flat/64.png",
   "name": "Maldives"
  },
  {
   "image": "https://www.countryflags.io/MW/flat/64.png",
   "name": "Malawi"
  },
  {
   "image": "https://www.countryflags.io/MX/flat/64.png",
   "name": "Mexico"
  },
  {
   "image": "https://www.countryflags.io/MY/flat/64.png",
   "name": "Malaysia"
  },
  {
   "image": "https://www.countryflags.io/MZ/flat/64.png",
   "name": "Mozambique"
  },
  {
   "image": "https://www.countryflags.io/NA/flat/64.png",
   "name": "Namibia"
  },
  {
   "image": "https://www.countryflags.io/NC/flat/64.png",
   "name": "New Caledonia"
  },
  {
   "image": "https://www.countryflags.io/NE/flat/64.png",
   "name": "Niger"
  },
  {
   "image": "https://www.countryflags.io/NF/flat/64.png",
   "name": "Norfolk Island"
  },
  {
   "image": "https://www.countryflags.io/NG/flat/64.png",
   "name": "Nigeria"
  },
  {
   "image": "https://www.countryflags.io/NI/flat/64.png",
   "name": "Nicaragua"
  },
  {
   "image": "https://www.countryflags.io/NL/flat/64.png",
   "name": "Netherlands"
  },
  {
   "image": "https://www.countryflags.io/NO/flat/64.png",
   "name": "Norway"
  },
  {
   "image": "https://www.countryflags.io/NP/flat/64.png",
   "name": "Nepal"
  },
  {
   "image": "https://www.countryflags.io/NR/flat/64.png",
   "name": "Nauru"
  },
  {
   "image": "https://www.countryflags.io/NU/flat/64.png",
   "name": "Niue"
  },
  {
   "image": "https://www.countryflags.io/NZ/flat/64.png",
   "name": "New Zealand"
  },
  {
   "image": "https://www.countryflags.io/OM/flat/64.png",
   "name": "Oman"
  },
  {
   "image": "https://www.countryflags.io/PA/flat/64.png",
   "name": "Panama"
  },
  {
   "image": "https://www.countryflags.io/PE/flat/64.png",
   "name": "Peru"
  },
  {
   "image": "https://www.countryflags.io/PF/flat/64.png",
   "name": "French Polynesia"
  },
  {
   "image": "https://www.countryflags.io/PG/flat/64.png",
   "name": "Papua New Guinea"
  },
  {
   "image": "https://www.countryflags.io/PH/flat/64.png",
   "name": "Philippines"
  },
  {
   "image": "https://www.countryflags.io/PK/flat/64.png",
   "name": "Pakistan"
  },
  {
   "image": "https://www.countryflags.io/PL/flat/64.png",
   "name": "Poland"
  },
  {
   "image": "https://www.countryflags.io/PM/flat/64.png",
   "name": "Saint Pierre And Miquelon"
  },
  {
   "image": "https://www.countryflags.io/PN/flat/64.png",
   "name": "Pitcairn"
  },
  {
   "image": "https://www.countryflags.io/PR/flat/64.png",
   "name": "Puerto Rico"
  },
  {
   "image": "https://www.countryflags.io/PS/flat/64.png",
   "name": "Palestine, State of"
  },
  {
   "image": "https://www.countryflags.io/PT/flat/64.png",
   "name": "Portugal"
  },
  {
   "image": "https://www.countryflags.io/PW/flat/64.png",
   "name": "Palau"
  },
  {
   "image": "https://www.countryflags.io/PY/flat/64.png",
   "name": "Paraguay"
  },
  {
   "image": "https://www.countryflags.io/QA/flat/64.png",
   "name": "Qatar"
  },
  {
   "image": "https://www.countryflags.io/RE/flat/64.png",
   "name": "Réunion"
  },
  {
   "image": "https://www.countryflags.io/RO/flat/64.png",
   "name": "Romania"
  },
  {
   "image": "https://www.countryflags.io/RS/flat/64.png",
   "name": "Serbia"
  },
  {
   "image": "https://www.countryflags.io/RU/flat/64.png",
   "name": "Russian Federation"
  },
  {
   "image": "https://www.countryflags.io/RW/flat/64.png",
   "name": "Rwanda"
  },
  {
   "image": "https://www.countryflags.io/SA/flat/64.png",
   "name": "Saudi Arabia"
  },
  {
   "image": "https://www.countryflags.io/SB/flat/64.png",
   "name": "Solomon Islands"
  },
  {
   "image": "https://www.countryflags.io/SC/flat/64.png",
   "name": "Seychelles"
  },
  {
   "image": "https://www.countryflags.io/SD/flat/64.png",
   "name": "Sudan"
  },
  {
   "image": "https://www.countryflags.io/SE/flat/64.png",
   "name": "Sweden"
  },
  {
   "image": "https://www.countryflags.io/SG/flat/64.png",
   "name": "Singapore"
  },
  {
   "image": "https://www.countryflags.io/SH/flat/64.png",
   "name": "Saint Helena"
  },
  {
   "image": "https://www.countryflags.io/SI/flat/64.png",
   "name": "Slovenia"
  },
  {
   "image": "https://www.countryflags.io/SJ/flat/64.png",
   "name": "Svalbard And Jan Mayen"
  },
  {
   "image": "https://www.countryflags.io/SK/flat/64.png",
   "name": "Slovakia"
  },
  {
   "image": "https://www.countryflags.io/SL/flat/64.png",
   "name": "Sierra Leone"
  },
  {
   "image": "https://www.countryflags.io/SM/flat/64.png",
   "name": "San Marino"
  },
  {
   "image": "https://www.countryflags.io/SN/flat/64.png",
   "name": "Senegal"
  },
  {
   "image": "https://www.countryflags.io/SO/flat/64.png",
   "name": "Somalia"
  },
  {
   "image": "https://www.countryflags.io/SR/flat/64.png",
   "name": "Suriname"
  },
  {
   "image": "https://www.countryflags.io/SS/flat/64.png",
   "name": "South Sudan"
  },
  {
   "image": "https://www.countryflags.io/ST/flat/64.png",
   "name": "Sao Tome and Principe"
  },
  {
   "image": "https://www.countryflags.io/SV/flat/64.png",
   "name": "El Salvador"
  },
  {
   "image": "https://www.countryflags.io/SX/flat/64.png",
   "name": "Sint Maarten"
  },
  {
   "image": "https://www.countryflags.io/SY/flat/64.png",
   "name": "Syrian Arab Republic"
  },
  {
   "image": "https://www.countryflags.io/SZ/flat/64.png",
   "name": "Swaziland"
  },
  {
   "image": "https://www.countryflags.io/TC/flat/64.png",
   "name": "Turks and Caicos Islands"
  },
  {
   "image": "https://www.countryflags.io/TD/flat/64.png",
   "name": "Chad"
  },
  {
   "image": "https://www.countryflags.io/TF/flat/64.png",
   "name": "French Southern Territories"
  },
  {
   "image": "https://www.countryflags.io/TG/flat/64.png",
   "name": "Togo"
  },
  {
   "image": "https://www.countryflags.io/TH/flat/64.png",
   "name": "Thailand"
  },
  {
   "image": "https://www.countryflags.io/TJ/flat/64.png",
   "name": "Tajikistan"
  },
  {
   "image": "https://www.countryflags.io/TK/flat/64.png",
   "name": "Tokelau"
  },
  {
   "image": "https://www.countryflags.io/TL/flat/64.png",
   "name": "Timor-Leste"
  },
  {
   "image": "https://www.countryflags.io/TM/flat/64.png",
   "name": "Turkmenistan"
  },
  {
   "image": "https://www.countryflags.io/TN/flat/64.png",
   "name": "Tunisia"
  },
  {
   "image": "https://www.countryflags.io/TO/flat/64.png",
   "name": "Tonga"
  },
  {
   "image": "https://www.countryflags.io/TR/flat/64.png",
   "name": "Turkey"
  },
  {
   "image": "https://www.countryflags.io/TT/flat/64.png",
   "name": "Trinidad and Tobago"
  },
  {
   "image": "https://www.countryflags.io/TV/flat/64.png",
   "name": "Tuvalu"
  },
  {
   "image": "https://www.countryflags.io/TW/flat/64.png",
   "name": "Taiwan, Republic Of China"
  },
  {
   "image": "https://www.countryflags.io/TZ/flat/64.png",
   "name": "Tanzania, United Republic of"
  },
  {
   "image": "https://www.countryflags.io/UA/flat/64.png",
   "name": "Ukraine"
  },
  {
   "image": "https://www.countryflags.io/UG/flat/64.png",
   "name": "Uganda"
  },
  {
   "image": "https://www.countryflags.io/UM/flat/64.png",
   "name": "United States Minor Outlying Islands"
  },
  {
   "image": "https://www.countryflags.io/US/flat/64.png",
   "name": "United States"
  },
  {
   "image": "https://www.countryflags.io/UY/flat/64.png",
   "name": "Uruguay"
  },
  {
   "image": "https://www.countryflags.io/UZ/flat/64.png",
   "name": "Uzbekistan"
  },
  {
   "image": "https://www.countryflags.io/VA/flat/64.png",
   "name": "Holy See (Vatican City State)"
  },
  {
   "image": "https://www.countryflags.io/VC/flat/64.png",
   "name": "Saint Vincent And The Grenadines"
  },
  {
   "image": "https://www.countryflags.io/VE/flat/64.png",
   "name": "Venezuela, Bolivarian Republic of"
  },
  {
   "image": "https://www.countryflags.io/VG/flat/64.png",
   "name": "Virgin Islands, British"
  },
  {
   "image": "https://www.countryflags.io/VI/flat/64.png",
   "name": "Virgin Islands, U.S."
  },
  {
   "image": "https://www.countryflags.io/VN/flat/64.png",
   "name": "Vietnam"
  },
  {
   "image": "https://www.countryflags.io/VU/flat/64.png",
   "name": "Vanuatu"
  },
  {
   "image": "https://www.countryflags.io/WF/flat/64.png",
   "name": "Wallis and Futuna"
  },
  {
   "image": "https://www.countryflags.io/WS/flat/64.png",
   "name": "Samoa"
  },
  {
   "image": "https://www.countryflags.io/XK/flat/64.png"
  },
  {
   "image": "https://www.countryflags.io/YE/flat/64.png",
   "name": "Yemen"
  },
  {
   "image": "https://www.countryflags.io/YT/flat/64.png",
   "name": "Mayotte"
  },
  {
   "image": "https://www.countryflags.io/ZA/flat/64.png",
   "name": "South Africa"
  },
  {
   "image": "https://www.countryflags.io/ZM/flat/64.png",
   "name": "Zambia"
  },
  {
   "image": "https://www.countryflags.io/ZW/flat/64.png",
   "name": "Zimbabwe"
  }
]
const countryFlag = document.querySelector('.country');

function getCountry() {
  fetch('https://extreme-ip-lookup.com/json/')
  .then( res => res.json())
  .then(locationData => {
    function findCountry(array, key, value) {
      for (let i = 0; i < array.length; i++) {
          if (array[i][key] === value) {
              return array[i];
          }
      }
      return null;
  }
  const myCountry = findCountry(countries, "name", locationData.country);
  countryFlag.innerHTML += `<img src=${myCountry.image} class="image-fluid animated slideInLeft" alt="Country FLag">`;
  localStorage.setItem("country", JSON.stringify(locationData));
  })
  
}

function getCountryOffline() {
  function findCountryLocal(array, key, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
}
  const locationDataLocal = localStorage.getItem("country");
  const locationDataJson = JSON.parse(locationDataLocal);
  const myCountryLocal = findCountryLocal(countries, "name", locationDataJson.country);
  countryFlag.innerHTML += `<img src=${myCountryLocal.image} class="image-fluid animated slideInLeft" alt="">`;
}

// Blog Posts Fetch

const gridWrapper = document.querySelector('.grid-wrapper');
gridWrapper.style.display = "none";
const messageLoader = document.querySelector('.message');
const gridCtn = document.querySelector('.grid-ctn');
messageLoader.classList.add("show");
messageLoader.innerHTML = "Couldn't Load. <br> Check Your Network And Refresh Browser";


function getPosts() {
  const uri = 'https://quiet-bayou-45541.herokuapp.com/';
  let h = new Headers();
  h.append('Content-Type', 'application/json');
  let req = new Request(uri, {
    method: 'GET',
    headers: h,
    mode: 'cors'
  });
  messageLoader.classList.add("show");
  messageLoader.innerHTML = `<p class ="posts-loader">Fetching Posts</p>`;
  gridWrapper.style.display = 'none';
  fetch(req)
  .then((res) => {
      if(res.ok) {
        return res.json();
      }
  })
  .then((blogPosts) => {
    let output = '';
    blogPosts.forEach((blogPost) => {
      output += `
      <div class="col-sm card-ctn animated fadeIn">
      <div class="card border shadow mb-4 ml-auto mr-auto" >
        <img src= ${blogPost.image} alt="...">
        <div class="card-body">
          <h5 class="card-title">${blogPost.name}</h5>
          <a href=${blogPost.url} class="read-post-btn text-muted" target="_blank" title="Read Post">Read post >></a>
        </div>
      </div>
    </div>
      ` 
    })
    gridWrapper.style.display = 'block';
    gridCtn.innerHTML += output;
    messageLoader.classList.remove("show");
    localStorage.setItem("articles", JSON.stringify(blogPosts));
  })
  .catch((err) => {
    if(err){
      messageLoader.classList.add("show");
      messageLoader.innerHTML = `Oops... Couldn't load. <br>Please check your network settings and refresh browser`;
      gridWrapper.style.display = "none";
    }
  })
}


function getPostsOffline() {
  const blogpostsLocal = localStorage.getItem("articles");
  const blogPostJson = JSON.parse(blogpostsLocal);
    blogPostJson.forEach(function(blogPost){
      let output = '';
      output += `
      <div class="col-sm card-ctn">
      <div class="card border shadow mb-4 ml-auto mr-auto" >
        <img src= ${blogPost.image} alt="...">
        <div class="card-body">
          <h5 class="card-title">${blogPost.name}</h5>
          <a href=${blogPost.url} class="read-post-btn text-muted" target="_blank" title="Read Post">Read post >></a>
        </div>
      </div>
    </div>
      `
      gridWrapper.style.display = "block";
      gridCtn.innerHTML += output;
      messageLoader.classList.remove("show");
    });
}

// To the top button
const upBtn = document.querySelector('.up-btn');

upBtn.addEventListener('click', function(){
  gridWrapper.scrollTop = 0;
});



window.addEventListener('load', function(){
  if(this.navigator.onLine) {
    getPosts();
    getCountry();
  } else {
    getPostsOffline();
    getCountryOffline();
  }
});
