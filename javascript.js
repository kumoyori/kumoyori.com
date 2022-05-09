const homePage = document.getElementById("home");
const programsPage = document.getElementById("programs");
const pageTitle = document.getElementById("title");

homePage.style.display = "block";
programsPage.style.display = "none";

pageTitle.textContent = "<Main Page>"

function home() {
  pageTitle.textContent = "<Main Page>"

  if (programsPage.style.display == "block") {
    programsPage.style.display = "none";
  }

  if (homePage.style.display == "none") {
    homePage.style.display = "block";
  }
}


function programs() {
  pageTitle.textContent = "<Programs>"

  if (homePage.style.display == "block") {
    homePage.style.display = "none";
  }

  if (programsPage.style.display == "none") {
    programsPage.style.display = "block";
  }
}

/*
function programs() {
  if (homePage.style.display == "none") {
    homePage.style.display = "block";
  }

  if (programsPage.style.display == "none") {
    programsPage.style.display = "block";
  }
}
*/
