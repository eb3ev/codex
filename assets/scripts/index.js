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

    let mainHeader = document.getElementById("main-header");
    let page = document.getElementById("page");

    if (nav.style.width == "0px") {
        nav.style.width = navWidth;
        mainHeader.style.marginLeft = navWidth;
        page.style.marginLeft = navWidth;
    } else {
        nav.style.width = "0";
        mainHeader.style.marginLeft = "0";
        page.style.marginLeft = "0";
    }
}

function setDate() {
    let date =  new Date();
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let d = date.getDate();
    document.getElementById("date").innerHTML = d + " / " + m + " / " + y;
}
