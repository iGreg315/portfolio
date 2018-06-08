// LIGHTBOX
const pics = {
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
var lbclose = document.getElementById("lbclose");
var bricks = Array.of(document.getElementsByClassName('brickImg'))
var next = document.getElementById('lightbox-next');
var prev = document.getElementById('lightbox-prev');

var currimg
var curridx

function setSrc(thisimg, type) {
    curridx = pics[type].indexOf(thisimg.getAttribute('src'))
    lbImg.setAttribute("src", pics[type][curridx]);
    lightbox.style.display = "flex";
}

bricks.forEach(brick => {
    brick.addEventListener('click', setSrc(brick, brick.getAttribute('src')))
})

lbclose.addEventListener('click', function(){
    lightbox.style.display = "none";
})
next.addEventListener('click', function (){
    console.log('next')
    ++curridx
    lbImg.setAttribute("src", pics[type][curridx])
})
prev.addEventListener('click', function (){
    console.log('prev')
    --curridx
    lbImg.setAttribute("src", pics[type][curridx]);
})