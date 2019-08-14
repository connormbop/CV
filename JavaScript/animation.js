document.getElementById("AFeatures").onclick = function() {
    if(document.getElementById("dot1").style.zIndex == "-10")
    {
        document.getElementById("dot1").style.zIndex = "9";
        document.getElementById("dot1").style.left = "100px";
        document.getElementById("dot1").style.top = "0";

        document.getElementById("dot2").style.zIndex = "9";
        document.getElementById("dot2").style.left = "100px";
        document.getElementById("dot2").style.top = "200px";

        document.getElementById("dot3").style.zIndex = "9";
        document.getElementById("dot3").style.left = "100px";
        document.getElementById("dot3").style.top = "400px";
    }
    else
    {
        document.getElementById("dot1").style.zIndex = "-10";
        document.getElementById("dot1").style.left = "0";
        document.getElementById("dot1").style.top = "25%";

        document.getElementById("dot2").style.zIndex = "-10";
        document.getElementById("dot2").style.left = "0";
        document.getElementById("dot2").style.top = "25%";

        document.getElementById("dot3").style.zIndex = "-10";
        document.getElementById("dot3").style.left = "0";
        document.getElementById("dot3").style.top = "25%";
    }
}
//About Me
document.getElementById("dot1").onclick = function() {
    document.getElementById("About1").style.zIndex = "0";
    document.getElementById("About2").style.zIndex = "-1";
    document.getElementById("About3").style.zIndex = "-1";

    document.getElementById("dot1").style.zIndex = "-10";
    document.getElementById("dot1").style.left = "0";
    document.getElementById("dot1").style.top = "25%";

    document.getElementById("dot2").style.zIndex = "-10";
    document.getElementById("dot2").style.left = "0";
    document.getElementById("dot2").style.top = "25%";

    document.getElementById("dot3").style.zIndex = "-10";
    document.getElementById("dot3").style.left = "0";
    document.getElementById("dot3").style.top = "25%";
}
//Web Dev
document.getElementById("dot2").onclick = function() {
    document.getElementById("About1").style.zIndex = "-1";
    document.getElementById("About2").style.zIndex = "-1";
    document.getElementById("About3").style.zIndex = "0";

    document.getElementById("dot1").style.zIndex = "-10";
    document.getElementById("dot1").style.left = "0";
    document.getElementById("dot1").style.top = "25%";

    document.getElementById("dot2").style.zIndex = "-10";
    document.getElementById("dot2").style.left = "0";
    document.getElementById("dot2").style.top = "25%";

    document.getElementById("dot3").style.zIndex = "-10";
    document.getElementById("dot3").style.left = "0";
    document.getElementById("dot3").style.top = "25%";
}
//Software Engineering
document.getElementById("dot3").onclick = function() {
    document.getElementById("About1").style.zIndex = "-1";
    document.getElementById("About2").style.zIndex = "0";
    document.getElementById("About3").style.zIndex = "-1";

    document.getElementById("dot1").style.zIndex = "-10";
    document.getElementById("dot1").style.left = "0";
    document.getElementById("dot1").style.top = "25%";

    document.getElementById("dot2").style.zIndex = "-10";
    document.getElementById("dot2").style.left = "0";
    document.getElementById("dot2").style.top = "25%";

    document.getElementById("dot3").style.zIndex = "-10";
    document.getElementById("dot3").style.left = "0";
    document.getElementById("dot3").style.top = "25%";
}
