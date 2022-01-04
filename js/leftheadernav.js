function reporting() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const authT = urlParams.get("authT");
  window.location = "reporting.html?authT=" + authT;
}

function setting() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const authT = urlParams.get("authT");
  window.location = "gobalsetting.html?authT=" + authT;
}

function domains() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const authT = urlParams.get("authT");
  window.location = "domains.html?authT=" + authT;
}

function entity() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const authT = urlParams.get("authT");
  window.location = "entityview.html?authT=" + authT;
}

function intent() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const authT = urlParams.get("authT");
  window.location = "intent.html?authT=" + authT;
}

function addhuman() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const authT = urlParams.get("authT");
  window.location = "addhumanagent.html?authT=" + authT;
}
function dashboard() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const authT = urlParams.get("authT");
  window.location = "dashboard.html?authT=" + authT;
}

function faq() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const authT = urlParams.get("authT");
  window.location = "faq.html?authT=" + authT;
}
function trainbot() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const authT = urlParams.get("authT");
  window.location = "trainbycsv.html?authT=" + authT;
}
function addagent() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const authT = urlParams.get("authT");
  window.location = "allagent.html?authT=" + authT;
}

function websitelink() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const authT = urlParams.get("authT");
  window.location = "websitelink.html?authT=" + authT;
}

function quickLinks() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const authT = urlParams.get("authT");
  window.location = "createQuicklinks.html?authT=" + authT;
}
function logout() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const authT = urlParams.get("authT");
  $.ajax({
    type: "Get",
    url: "https://www.cybot.co/api/logout",
    headers: {
      Authorization: "Token " + authT + "",
    },
    success: function (data) {
      window.location = "login_1.html";
    },
    error: function (data) {
      window.location = "login_1.html";
    },
  });
}

$(document).ready(function () {
  if (localStorage["adminbot"] == "valid") {
    console.log(localStorage);
    var username = localStorage["username"];
    document.getElementById("username").innerHTML = username;
    console.log(username);
  } else {
    //    window.open("index.html", "_self");
  }
});
