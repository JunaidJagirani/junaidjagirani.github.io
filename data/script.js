var autoCloseTimer;

function openSlide(event) {
  event.stopPropagation(); // Stop event propagation
  document.getElementById("popupContainer").classList.add("open");
}

function closeSlide() {
  document.getElementById("popupContainer").classList.remove("open");
}

var developers = {
  "invader": {
    "name": "Junaid ( Invader )",
    "age": 23,
    "expertise": "Web Developer, PUBG HACK Developer, Website Hacker",
    "owner": "Invader Cheats",
    "city": "Karachi",
    "country": "Pakistan",
    "telegram": "https://t.me/xinvader"
  },
  "xbot": {
    "name": "Hamad ( MRxBOT )",
    "age": 27,
    "expertise": "MOD | INJECTOR CRACKER, PUBG HACK DEVELOPER, BYPASS DEVELOPER",
    "owner": "MRxBOT VIP Cheats",
    "city": "D I Khan",
    "country": "Pakistan",
    "telegram": "https://t.me/mrxbot_owner"
  },
  "camper": {
    "name": "Gulzar ( KING CAMPER )",
    "age": 21,
    "expertise": "IMGUI KING, PUBG HACK Developer, Trusted PUBG Acc Seller",
    "owner": "King Camper YT",
    "city": "Kamoke",
    "country": "Pakistan",
    "telegram": "https://t.me/KingCamperyt_2"
  },
  "shahid": {
    "name": "Shahid Khaskheli ( Shahid Sindhi )",
    "age": 26,
    "expertise": "OBB Developer, PUBG HACK DEVELOPER, Expert in All field",
    "owner": "Sindhi Hacks",
    "city": "Dhulatpur Sindh",
    "country": "Pakistan",
    "telegram": "https://t.me/shahidali0304"
  }
};

function showDeveloperInfo(name) {
  var developerInfo = developers[name];
  if (developerInfo) {
    document.getElementById("developerName").innerText = developerInfo.name;
    document.getElementById("developerAge").innerText = developerInfo.age;
    document.getElementById("developerExpertise").innerText = developerInfo.expertise;
    document.getElementById("developerOwner").innerText = developerInfo.owner;
    document.getElementById("developerCity").innerText = developerInfo.city;
    document.getElementById("developerCountry").innerText = developerInfo.country;

    var detailsBox = document.getElementById("detailsBox");
    detailsBox.style.display = "block";

    clearTimeout(autoCloseTimer);

    autoCloseTimer = setTimeout(function() {
      detailsBox.style.display = "none";
    }, 10000);

    // Check if Telegram button already exists
    var telegramButton = document.querySelector(".telegram-button");
    if (!telegramButton) {
      // Create and append Telegram button if it doesn't exist
      telegramButton = document.createElement("button");
      telegramButton.classList.add("telegram-button");
      telegramButton.innerText = "Message on Telegram";
      telegramButton.onclick = function() {
        window.open(developerInfo.telegram, "_blank"); // Open Telegram link in a new tab
      };
      document.querySelector(".developer-details").appendChild(telegramButton);
    }
  }
}

window.addEventListener('click', function(event) {
  var popupContainer = document.getElementById("popupContainer");
  var detailsBox = document.getElementById("detailsBox");

  if (!event.target.closest('.popup-container') && !event.target.closest('#detailsBox')) {
    popupContainer.classList.remove("open");
    detailsBox.style.display = "none";
  }
});