// JavaScript File
/**
 * Created by 18 on 20.05.2017.
 */
var pik6 = {
    mast : 'pik',
    ves : 1 ,
    picture : 'pik6',
    locationStart : 'start',
    displayStart : function (location) {
        var rr = this.picture,
            ee = this.locationStart;
        var displayStart = document.getElementById(ee);
        displayStart.setAttribute("class",rr );
    },
    trumpKard : false , // козырь или нет


};


var pozicia= document.getElementById("start_v");
pozicia.setAttribute("class","kresty7");


pik6.displayStart();
