
document.getElementById("btnShowMenu").onclick = showMenu;
document.getElementById("btnClose").onclick = closeMenu;


function showMenu()
{
    document.getElementById("menu-mobile").style.display = "block";
    document.getElementById("menu-mobile").style.animationName = "entrance";
    document.getElementById("menu-mobile").style.animationName = ".5s";
    document.getElementById("menu-mobile").style.right = "0";
    document.getElementById("overlay").style.display = "block";
    document.querySelector("body").classList.add("noscroll");

}

function closeMenu()
{
    
    document.getElementById("menu-mobile").style.animationName = "exit";
    document.getElementById("menu-mobile").style.animationDuration = ".2s";
    document.getElementById("menu-mobile").style.right = "-256px";
    setTimeout(function(){document.getElementById("menu-mobile").style.display = "none"}, 200);
    document.getElementById("overlay").style.display = "none";
    document.querySelector("body").classList.remove("noscroll");
}

document.getElementById("btnShowMenu").onclick = showMenu;
document.getElementById("btnClose").onclick = closeMenu;
window.matchMedia("(min-width: 730px)").onchange = closeMenu;