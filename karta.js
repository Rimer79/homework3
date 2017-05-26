// JavaScript File
(function () {
    "use strict";
    function Karta (mast , ves , picture ){
    this.mast = mast ;
    this.ves = ves ;
    this.picture = picture ;

}
     Karta.prototype.locationStart = 'start' ;
    Karta.prototype.trump = false ;
    Karta.prototype.displayStart = function (location) {
        var rr = this.picture,
            ee = this.locationStart;
        var displayStart = document.getElementById(ee);
        displayStart.setAttribute("class",rr )
    };
    Karta.prototype.trump = function (kozir) {
        if (this.mast = kozir ){
            this.trump = true ;
        }

    };



    window.Karta = Karta ;

}());