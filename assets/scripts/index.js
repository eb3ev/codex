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
    let navBorderRight = "1px solid var(--col-accent)"

    let mainHeader = document.getElementById("main-header");
    let page = document.getElementById("page");

    if (nav.style.width == "0px") {
        nav.style.width = navWidth;
        nav.style.borderRight = navBorderRight;
        mainHeader.style.marginLeft = navWidth;
        page.style.marginLeft = navWidth;
    } else {
        nav.style.width = "0";
        nav.style.borderRight = "0";
        mainHeader.style.marginLeft = "0";
        page.style.marginLeft = "0";
    }
}
