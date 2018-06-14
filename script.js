
function lemonad(citron_pris, socker_pris) {
    antal_citroner = 4
    socker = .15
    return ((antal_citroner * citron_pris + socker * socker_pris)/5).toPrecision(4);
}

document.getElementById("go").addEventListener("click", function(e){
    var stuff = document.querySelectorAll("input");
    var citron_pris = stuff[0].value
    var socker_pris = stuff[1].value
    document.getElementById("lemonad").innerText = "Kostnad per glas (2 dl) lemonad: " + lemonad(citron_pris, socker_pris) + "kr.";

})
