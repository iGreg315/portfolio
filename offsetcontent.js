// OFFSET CONTENT

var headerHeight = document.getElementById("header").clientHeight;
var content = document.getElementById("content");
var footerHeight = document.getElementById("footerNav").clientHeight;

        function offsetContent(){
            console.log(headerHeight);
            console.log(footerHeight);
            
            content.style.marginTop = (headerHeight) + "px";
            
            content.style.marginBottom = (footerHeight + 15) + "px";
        }



