// JavaScript File
(function () {
    "use strict";
    function Game (name) {
        this.name = name ;

    }


// случ число в диапазоне

Game.prototype.sluchaynChislo = function (minZ, maxZ) {
    return Math.floor(
            Math.random() * (maxZ - minZ + 1)) + minZ;
};
 Game.prototype.choiceKozira =  function() {
     var random = Math.floor(Math.random() * 3);
     switch (random) {
         case 0:
             kozir = 'pik';
             break;
         case 1 :
             kozir = 'kresty';
             break;
         case 2:
             kozir = 'chirwa';
             break;
         case 3 :
             kozir = 'bubna';
     }
     return kozir;
 } ;
 Game.prototype.ShuffleDeck =   function (kol) {
        for (var i = 0; i < kol.length; i++) {
            var card1 = kol[i];
            var index = this.sluchaynChislo(0, kol.length - 1);
            var card2 = kol[index];
            kol[i] = card2;
            kol[index] = card1;
        }
        return kol;
    };
  Game.prototype.razdachaKart = function(kol) {

        var rukaPetia = [];
        var rukaVasia = [];

        for (var i = 0; i < koloda.length; i++) {
            if (i % 2 == 0) {
                rukaPetia.push(koloda[i]);
            } else rukaVasia.push(koloda[i]);
        }
        var igroki = { pet:rukaPetia , vas:rukaVasia};
        return igroki ;
    };

   Game.prototype.hod = function () {
       var i = j;
       while (i >= 0) {
           sravnKarti(i, peter, vasya, kozir, count);
           displayHod(i , peter , vasya ,pole );
           i--;
       }
   };
   Game.prototype.sravnKarti = function (i ,peter ,vasya ,kozir ,count) {
        mastPet = peter[i].mast ;
        mastVas = vasya[i].mast ;
        vesPet  = peter[i].ves ;
        vesVas =  vasya[i].ves ;
        if (mastPet === kozir && mastVas!== kozir){
            count.pet+=1;
        }
        else if (mastPet !== kozir && mastVas === kozir) {
            count.vas+=1;
        }
        else if ((mastPet!==kozir && mastVas!== kozir)
            ||(mastPet===kozir && mastVas === kozir) ) {
            if (vesPet > vesVas ){count.pet+=1; }
            else if (vesPet === vesVas){ count.pet = count.pet ;count.vas = count.vas;}
            else { count.vas+=1;}
        }
    };
   Game.prototype.FindWinner = function (count) {
        if (count.pet == count.vas) {
            return "не выявлен";
        } else if (count.pet >count.vas ) {
            return "Петя";
        } else return "Вася";
    };

    window.Game = Game ;
} ());