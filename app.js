const buttonHochzaehlen = document.getElementById('plus');
const buttonReset = document.getElementById('reset');
const ausgabe = document.getElementById('display');

let wert = 0;
if(!localStorage.getItem('wert')){
    wert = 0;
    speichern();
}else{
    wert = localStorage.getItem('wert');
}

displayWert();

buttonHochzaehlen.addEventListener('click', function(){
    wert++;
    displayWert();
    speichern();
});

buttonReset.addEventListener('click', function(){
    wert=0;
    displayWert();
    speichern();
});

function displayWert(){
    ausgabe.innerHTML = wert;
}

function speichern(){
    localStorage.setItem('wert', wert);
}
