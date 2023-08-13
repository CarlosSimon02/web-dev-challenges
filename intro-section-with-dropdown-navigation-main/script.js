document.getElementById("menu-icon").onclick = showmenu;
document.getElementById("close-icon").onclick = closeMenu;

function showmenu() {
    document.getElementById("overlay").style.animationName = "fade-in";
    document.getElementById("overlay").style.animationDuration = ".5s";
    document.getElementById("overlay").style.display = "block";
    document.getElementById("menu-mobile").style.animationName = "entrance";
    document.getElementById("menu-mobile").style.animationDuration = ".5s";
    document.getElementById("menu-mobile").style.right = "0";
}

function closeMenu() {

    document.getElementById("menu-mobile").style.animationName = "exit";
    document.getElementById("menu-mobile").style.animationDuration = ".5s";
    document.getElementById("menu-mobile").style.right = "-240px";
    document.getElementById("overlay").style.animationName = "fade-out";
    document.getElementById("overlay").style.animationDuration = ".5s";
    setTimeout(function(){document.getElementById("overlay").style.display = "none"}, 400);
}

function dropdown(idname, arrow) {
    if(document.getElementById(idname).style.display === "block") {
        document.getElementById(idname).style.display = "none";
        document.getElementById(arrow).style.content = 'url("images/icon-arrow-down.svg")';
    } else {
        document.getElementById(idname).style.display = "block";
        document.getElementById(arrow).style.content = 'url("images/icon-arrow-up.svg")';
    }
}