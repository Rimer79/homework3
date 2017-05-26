// JavaScript File
/**
 * Created by 18 on 26.05.2017.
 */
(function () {
    "use strict";
    function View (name){
        this.name = name ;
    }
    View.prototype.display = function  (where , what ) {
        var pozicia = document.getElementById(where);
        pozicia.setAttribute("class",what)
    };


  /*  View.prototype.viborKozira = function () {
        this.display('baraban','wrashaem_baraban');
        };
*/
    window.View = View ;
} ());
