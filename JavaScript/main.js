document.getElementById("About1").onclick = function(){
    document.getElementById("About1").style.zIndex = "-2";
    document.getElementById("About2").style.zIndex = "0";
    document.getElementById("About3").style.zIndex = "-1";

    // document.getElementById("About1").style.left = "0%";
    // document.getElementById("About2").style.left = "0";
    // document.getElementById("About3").style.left = "2.5%";

    document.getElementById("About1").style.width = "100%";
    document.getElementById("About2").style.width = "90%";
    document.getElementById("About3").style.width = "95%";

    document.getElementById("About1").style.height = "100%";
    document.getElementById("About2").style.height = "90%";
    document.getElementById("About3").style.height = "95%";
}
document.getElementById("About2").onclick = function(){
    document.getElementById("About1").style.zIndex = "-1";
    document.getElementById("About2").style.zIndex = "-2";
    document.getElementById("About3").style.zIndex = "0";

    // document.getElementById("About1").style.left = "2.5%";
    // document.getElementById("About2").style.left = "5%";
    // document.getElementById("About3").style.left = "0";

    document.getElementById("About1").style.width = "95%";
    document.getElementById("About2").style.width = "100%";
    document.getElementById("About3").style.width = "90%";

    document.getElementById("About1").style.height = "95%";
    document.getElementById("About2").style.height = "100%";
    document.getElementById("About3").style.height = "90%";
}
document.getElementById("About3").onclick = function(){
    document.getElementById("About1").style.zIndex = "0";
    document.getElementById("About2").style.zIndex = "-1";
    document.getElementById("About3").style.zIndex = "-2";

    // document.getElementById("About1").style.left = "0";
    // document.getElementById("About2").style.left = "2.5%";
    // document.getElementById("About3").style.left = "5%";

    document.getElementById("About1").style.width = "90%";
    document.getElementById("About2").style.width = "95%";
    document.getElementById("About3").style.width = "100%";

    document.getElementById("About1").style.height = "90%";
    document.getElementById("About2").style.height = "95%";
    document.getElementById("About3").style.height = "100%";
}


    
