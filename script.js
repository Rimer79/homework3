// JavaScript File
/**
 * Created by 18 on 20.05.2017.
 */

// здесь будет собираться все в кучу
    var game = new Game ('game');
    var view = new View ('viev');

    var koloda =[ pik6 = new Karta ('pik', 1 ,'pik6'),
                  pik7 = new Karta('pik', 2, 'pik7'),
                  pik8 = new Karta ('pik', 3 , 'pik8'),
                  pik9 = new Karta ( 'pik', 4 , 'pik9'),
                  pik10 = new Karta ('pik', 5 , 'pik10'),
                  pikB = new Karta ( 'pik ', 6 , 'pikB'),
                  pikD = new Karta ( 'pik ',7 ,'pikD'),
                  pikK = new Karta ( 'pik ', 8, 'pikK'),
                  pikT = new Karta ('pik' , 9 ,'pikT'),
                    kresty6 = new Karta ('kresty', 1 , 'kresty6'),
                    kresty7 = new Karta ('kresty', 2 , 'kresty7'),
                    kresty8 = new  Karta ('kresty', 3 , 'kresty8'),
                    kresty9 = new Karta ( 'kresty', 4 , 'kresty9'),
                    kresty10 = new Karta ( 'kresty', 5 , 'kresty10'),
                    krestyB = new Karta ('kresty', 6 , 'krestyB'),
                    krestyD = new Karta ('kresty', 7 , 'krestyD'),
                    krestyK = new Karta ('kresty', 8 , 'krestyK'),
                    krestyT = new Karta ('kresty', 9 , 'krestyT'),
                  chirwa6 = new Karta ('chirwa', 1 , 'chirwa6'),
                    chirwa7 = new Karta ('chirwa', 2 , 'chirwa7'),
                    chirwa8 = new Karta ('chirwa', 3 , 'chirwa8'),
                    chirwa9 = new Karta ('chirwa', 4 , 'chirwa9'),
                    chirwa10 = new Karta ('chirwa', 5 , 'chirwa10'),
                    chirwaB = new Karta ('chirwa', 6 , 'chirwaB'),
                    chirwaD = new Karta ('chirwa', 7 , 'chirwaD'),
                    chirwaK = new Karta ('chirwa', 8 , 'chirwaK'),
                    chirwaT = new Karta ('chirwa', 9 , 'chirwaT'),
                  bubna6 = new Karta ('bubna', 1 , 'bubna6'),
                    bubna7 = new Karta ('bubna', 2 , 'bubna7'),
                    bubna8 = new Karta ('bubna', 3 , 'bubna8'),
                    bubna9 = new Karta ('bubna', 4 , 'bubna5'),
                    bubna10 = new Karta ('bubna', 5 , 'bubna10'),
                    bubnaB = new Karta ('bubna', 6 , 'bubnaB'),
                    bubnaD = new Karta ('bubna', 7 , 'bubnaD'),
                    bubnaK = new Karta ('bubna', 8 , 'bubnaK'),
                    bubnaT = new Karta ('bubna', 9 , 'bubnaT')
    ];


//game.sluchaynChislo(0,36);
console.log( koloda);

for (var i=0 ; i<36 ;i++ ) {
    view.display("start", koloda[i].picture);

}
var kozir = game.choiceKozira() ;

alert (kozir);
view.display('baraban','wrashaem_baraban');
view.display('baraban','niwidim');
view.display('trump', kozir);
view.display('trump','vidim');

koloda = game.ShuffleDeck(koloda);
console.log( koloda);


for ( i=0 ; i<36 ;i++ ) {
    view.display("start", koloda[i].picture);
}
var igroki = game.razdachaKart(koloda) ;
var count = { pet : 0, vas : 0};
var peter = igroki.pet;
var vasya = igroki.vas;
var j = vasya.length-1;

game.sravnKarti();

game.FindWinner();