const homePage = document.getElementById("home");
const programsPage = document.getElementById("programs");
const pageTitle = document.getElementById("title");
const panelPage = document.getElementById("panel")

homePage.style.display = "block";
programsPage.style.display = "none";

pageTitle.textContent = "<Main Page>";


function programsPanel() {
    panelPage.src = "programs.html" 
}

function homePanel() {
    panelPage.src = "home.html"
}