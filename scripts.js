(function(){

    var parallax = document.querySelectorAll("body"),
        speed = 0.9;

    window.onscroll = function(){
    [].slice.call(parallax).forEach(function(el,i){

        var windowYOffset = window.scrollY,
            elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

        el.style.backgroundPosition = elBackgrounPos;

    });
    };

})();

function openInNewTab(url) {
    window.open(url, '_blank').focus();
}
