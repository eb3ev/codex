const pages = [
    "pages/test-page-0.html",
    "pages/test-page-1.html",
    "pages/test-page-2.html"
];

// Get page navigation container
var navContainer = document.createElement("div");
navContainer.id = "page-nav";
navContainer.className = "page-nav";
//navContainer.appendChild(document.createTextNode("Hello"));
//navContainer.setAttritube("id", "page-nav");
//navContainer.setAttritube("class", "page-nav");
//navContainer = document.getElementById("page-nav");

// Create page navigation header
var navHeader = document.createElement("header");
navHeader.className = "page-nav-class";
//navHeader.setAttritube("class", "page-nav-header");
var navHeaderLink = document.createElement("a");
var navHeaderText = document.createElement("h1");
navHeaderText.appendChild(document.createTextNode("Codex"));
navHeaderLink.appendChild(navHeaderText);
navHeaderLink.href = "index.html";
navHeader.appendChild(navHeaderLink);

navContainer.appendChild(navHeader);
document.body.appendChild(navContainer);


function addNavElements(page) {
    var a = document.createElement("a");
    var displayText = document.createTextNode("Link");
    a.appendChild(displayText);
    a.title = "Test Page 1";
    a.href = page;

    a.className += " page0"
    navContainer.appendChild(a);
}

//addNavElements();
pages.forEach(addNavElements);
