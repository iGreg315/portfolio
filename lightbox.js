// LIGHTBOX

var lightbox = document.getElementById("lightbox");
var lbImg = document.getElementById("lightboxImg");
var images = document.getElementsByClassName("brickImg");


//var content = document.getElementById("content");
//var clickable = document.createAttribute("onclick");
//clickable.value = "setSrc(this)";
//
//images.setAttribute

function setSrc(thisimg) {
    var imgSrc = thisimg.getAttribute("src");
    console.log(imgSrc);
    lbImg.setAttribute("src", imgSrc);
    lightbox.style.display = "flex";
    
}

var lbclose = document.getElementById("lbclose");

lbclose.onclick=function(){
    lightbox.style.display = "none";
}