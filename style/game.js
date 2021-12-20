const kertas = document.getElementById("k");
const batu = document.getElementById("b");
const gunting = document.getElementById("g"); 
const hasil_div = document.querySelector(".hasil");  
const kertasc_div = document.getElementById("kc");
const batuc_div = document.getElementById("bc");
const guntingc_div = document.getElementById("gc");

function getcomputerchoice (){
const choices =['kc','gc','bc'];
const randomnumber= Math.floor(Math.random()*3);
return choices[randomnumber];
}
function menang(playerchoice, computerchoice){
    hasil_div.innerHTML = " MENANG ";

    
}
function kalah(playerchoice, computerchoice){
    hasil_div.innerHTML = " KALAH ";
    
}
function seri(playerchoice, computerchoice){
    hasil_div.innerHTML = " SERI ";

}

function game(playerchoice){
 const computerchoice = getcomputerchoice();
switch (playerchoice+computerchoice){
    case"bgc":
    case "kbc":
    case "gkc":
        menang()
        break;
    case"bkc":
    case "kgc":
    case "gbc":
        kalah()
        break;
    case"bbc":
    case "kkc":
    case "ggc":
        seri()
        break;    
}

}


function main(){
    batu.addEventListener('click', function(){
    game("b");
})
    kertas.addEventListener('click', function(){
    game("k");
})
    gunting.addEventListener('click', function(){
    game("g");
})
}


main();