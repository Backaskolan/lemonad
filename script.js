/*  
En funktion som räknar ut vad ett glas lemonad kostar beroende på priserna man skriver in.
Receptet är baserat på 1 liter lemonad:
    4 citroner
    150g socker

*/

function lemonad(citron_pris, socker_pris) {
    antal_citroner = 4  // 4 citroner
    socker = 0.15        // 0.15 kg = 150g
    return ((antal_citroner * citron_pris + socker * socker_pris)/5).toPrecision(4); // 4 citroner * citronens pris + 0.15 * sockrets kilopris, delat i 5 för att få ett glas och avrundat till 4 siffror.
}

// När användaren klickar på knappen "Räkna" (med id "go")
document.getElementById("go").addEventListener("click", function(e){
    // ...samla in priserna i rutorna (som är av typen "input")
    var stuff = document.querySelectorAll("input");
    // Den första rutan är citronernas pris, gör en variabel som innehåller det talet
    var citron_pris = stuff[0].value
    // Den andra är sockrets pris, gör en variabel till
    var socker_pris = stuff[1].value
    // Hitta stycket som har id "lemonad", kör funktionen och skriv ut resultatet.
    document.getElementById("lemonad").innerText = "Kostnad per glas (2 dl) lemonad: " + lemonad(citron_pris, socker_pris) + "kr.";

})
