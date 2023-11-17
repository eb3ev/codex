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
    let ele = document.querySelector(':root');
    let css = getComputedStyle(ele);

    let nav = document.getElementById("nav");
    let navWidth = css.getPropertyValue("--nav-width");

    if (nav.style.width == "0px") {
        nav.style.width = navWidth;
    } else {
        nav.style.width = "0";
    }
}

window.addEventListener('resize', function() {
    let nav = document.getElementById("nav");
    nav.style.width = "";
}, true);

