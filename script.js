// NU SITE JS



//Dropdowns

var GDnav = document.getElementById("graphicDesign_nav");
var GDdd = document.getElementById("graphicDesign_list");

GDdd.style.display='none';

function dropdown() {
    GDdd.style.display === "none" ?
    GDdd.style.display = 'block' :
    GDdd.style.display = 'none'; 
}

GDnav.addEventListener("click", dropdown);

//

var PHnav = document.getElementById("photography_nav");
var PHdd = document.getElementById("photography_list");

PHdd.style.display='none';

function dropdown2() {
    PHdd.style.display === "none" ?
    PHdd.style.display = "block" :
    PHdd.style.display = "none";
}

PHnav.addEventListener("click", dropdown2);

//

var VDnav = document.getElementById("video_nav");
var VDdd = document.getElementById("video_list");

VDdd.style.display='none';

function dropdown3() {
    VDdd.style.display === "none" ?
    VDdd.style.display = "block" :
    VDdd.style.display = "none";
}

VDnav.addEventListener("click", dropdown3);

//

var PNnav = document.getElementById("passion_nav");
var PNdd = document.getElementById("passion_list");

PNdd.style.display='none';

function dropdown4() {
    PNdd.style.display === "none" ?
    PNdd.style.display = "block" :
    PNdd.style.display = "none";
}

PNnav.addEventListener("click", dropdown4);

//

var CTnav = document.getElementById("contact_nav");
var CTdd = document.getElementById("contact_list");

CTdd.style.display='none';

function dropdown5() {
    CTdd.style.display === "none" ?
    CTdd.style.display = "block" :
    CTdd.style.display = "none";
}

CTnav.addEventListener("click", dropdown5);
