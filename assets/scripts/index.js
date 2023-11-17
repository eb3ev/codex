let currPage = "pages/home.html"
const mql = window.matchMedia("screen and (max-width: 680px)");
let navOpen = (mql) ? false : true
mql.addEventListener("change", function(e) {
    if (e.matches) {
        navOpen = false
    } else {
        navOpen = true 
    }
});

let prevWidth = window.innerWidth;
window.addEventListener('resize', function() {
    if (window.innerWidth !== prevWidth) {
        let nav = document.getElementById("nav");
        nav.style = "";
        prevWidth = window.innerWidth
    }
}, true);

function loadPage(page) {
    $("#page").load(page);
}

function reloadPage() {
    loadPage(currPage);
}

function toggleNav() {
    let ele = document.querySelector(":root");
    let css = getComputedStyle(ele);
    let nav = document.getElementById("nav");
    let navWidth = css.getPropertyValue("--nav-width");
    let navBorderRight = css.getPropertyValue("--nav-border-right")
    if (navOpen) {
        nav.style.width = "0";
        nav.style.border = "0";
        navOpen = !navOpen;
    } else {
        nav.style.width = navWidth;
        nav.style.borderRight = navBorderRight;
        navOpen = !navOpen;
    }
}

