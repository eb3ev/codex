let currPage = "pages/home.html"
let navOpen = true

function loadPage(page) {
    sessionStorage.setItem("currPage", page);
    $(document).ready(function() {
        $("#page").load(page);
    });
}

function reloadPage()
{
    if (sessionStorage.getItem("currPage")) {
        let currPage = sessionStorage.getItem("currPage");

        loadPage(currPage);
    } else {
        loadPage("pages/home.html")
    }
}

function toggleNav() {
    let ele = document.querySelector(":root");
    let css = getComputedStyle(ele);

    let nav = document.getElementById("nav");
    let navWidth = css.getPropertyValue("--nav-width");

    if (navOpen) {
        nav.style.width = "0";
        navOpen = !navOpen
    } else {
        nav.style.width = navWidth;
        navOpen = !navOpen
    }
}

const mql = window.matchMedia("screen and (max-width: 480px)");

if (mql.matches) {
    navOpen = false
} else {
    navOpen = true 
}

mql.addEventListener("change", function(e) {
    if (e.matches) {
        navOpen = false
    } else {
        navOpen = true 
    }
});

window.addEventListener('resize', function() {
    let nav = document.getElementById("nav");
    nav.style = "";
}, true);

