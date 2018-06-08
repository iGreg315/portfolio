// LIGHTBOX
const pics = {
    LOGOS_PICS: [
        'images/graphic/logos/DCMOFabozzi.jpg',
        'images/graphic/logos/DCMOLegendary.jpg',
        'images/graphic/logos/DCMOMidlothean.jpg',
        'images/graphic/logos/DCMOTurnagain.jpg',
        'images/graphic/logos/DCMOWhiting.jpg',
        'images/graphic/logos/LogosDC.jpg',
        'images/graphic/logos/LogosDD.jpg',
        'images/graphic/logos/LogosDROPS.jpg',
        'images/graphic/logos/LogosFnB.jpg',
        'images/graphic/logos/LogosMF.jpg',
        'images/graphic/logos/LogosNONAIM.jpg',
        'images/graphic/logos/LogosTC.jpg',
        'images/graphic/logos/LogosURMC.jpg',
        'images/graphic/logos/LogosWWE.jpg'
    ],
    ADS_PICS: [
        'images/graphic/ads/AdsAshley1.png',
        'images/graphic/ads/AdsBarber.jpg',
        'images/graphic/ads/AdsEDGE1.jpg',
        'images/graphic/ads/AdsEDGE2.jpg',
        'images/graphic/ads/AdsEDGE3.jpg',
        'images/graphic/ads/AdsThane.jpg',
        'images/graphic/ads/AdsUVUSA1.jpg',
        'images/graphic/ads/AdsUVUSA2.jpg',
        'images/graphic/ads/AdsUVUSA3.jpg',
        'images/graphic/ads/AdsUVUSA4.jpg',
        'images/graphic/ads/AdsUVUSA5.jpg',
        'images/graphic/ads/AdsUVUSA6.jpg'
    ],
    ENGAGEMENTS_PICS: [
        'images/photography/engagements/11-full.jpg',
        'images/photography/engagements/engagementsAE1.jpg',
        'images/photography/engagements/engagementsAE2.jpg',
        'images/photography/engagements/engagementsAE3.jpg',
        'images/photography/engagements/engagementsAE4.jpg',
        'images/photography/engagements/engagementsAE5.jpg',
        'images/photography/engagements/engagementsAE6.jpg',
        'images/photography/engagements/engagementsEN1.jpg',
        'images/photography/engagements/engagementsEN3.jpg',
        'images/photography/engagements/engagementsEN4.jpg',
        'images/photography/engagements/engagementsEN5.jpg',
        'images/photography/engagements/engagementsEN6.jpg',
        'images/photography/engagements/engagementsEN7.jpg'
    ],
    FAMILY_PICS: [
        'images/photography/familypics/family1.jpg',
        'images/photography/familypics/family2.jpg',
        'images/photography/familypics/family3.jpg',
        'images/photography/familypics/family4.jpg',
        'images/photography/familypics/family5.jpg',
        'images/photography/familypics/family6.jpg'
    ],
    HEADSHOTS_PICS: [
        'images/photography/headshots/headshotAndrew.jpg',
        'images/photography/headshots/headshotBrennon.jpg',
        'images/photography/headshots/headshotElijah.jpg',
        'images/photography/headshots/headshotKristin.jpg',
        'images/photography/headshots/headshotSarah.jpg',
        'images/photography/headshots/headshotSarahNu.jpg',
        'images/photography/headshots/headshotsChandler.jpg',
        'images/photography/headshots/headshotSteven.jpg',
        'images/photography/headshots/portraitBrandonP.jpg',
        'images/photography/headshots/portraitBrennon.jpg',
        'images/photography/headshots/portraitCourtni.jpg',
        'images/photography/headshots/portraitDarrenEp.jpg',
        'images/photography/headshots/portraitEden.jpg',
        'images/photography/headshots/portraitEllie.jpg',
        'images/photography/headshots/portraitFacundo.jpg',
        'images/photography/headshots/portraitMom.jpg',
        'images/photography/headshots/portraitSam.jpg',
        'images/photography/headshots/portraitSarah1.jpg'
    ]
}

var lightbox = document.getElementById("lightbox");
var lbImg = document.getElementById("lightboxImg");

var currtype
var curridx

function setSrc(thisimg, type) {
    currtype = type
    curridx = pics[currtype].indexOf(thisimg.getAttribute('src'))
    lbImg.setAttribute("src", pics[currtype][curridx]);
    lightbox.style.display = "flex";
}
function close() {
    lightbox.style.display = "none";
}
function prev() {
    --curridx
    loop()
    lbImg.setAttribute("src", pics[currtype][curridx])
}
function next() {
    ++curridx
    loop()
    lbImg.setAttribute("src", pics[currtype][curridx]);
}
function loop(){
    if (curridx > pics[currtype].length - 1){
        curridx = 0
    } else if (curridx < 0){
        curridx = pics[currtype].length - 1
    }
}