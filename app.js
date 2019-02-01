const buttonWuerfeln = document.getElementById('wuerfeln');
const buttonReset = document.getElementById('reset');
const ausgabe = document.getElementById('display');
const liste = document.getElementById('liste');


let daten = [];


if(localStorage.getItem('daten')){
    let text = localStorage.getItem('daten');
    daten = JSON.parse(text);
}else{
    daten = [];
    speichern();    
}

listeAusgeben();


buttonWuerfeln.addEventListener('click', function(){
    let wuerfel = Math.floor(Math.random() * 6 + 1);
    ausgabe.innerHTML = wuerfel;    
    let datensatz = {};
    datensatz.zahl = wuerfel;
    datensatz.zeit = new Date().toUTCString();
    daten.push(datensatz);
    speichern();
    listeAusgeben();
});

buttonReset.addEventListener('click', function(){
    daten = [];
    speichern();
    listeAusgeben();
});

function speichern(){
    let text = JSON.stringify(daten);
    localStorage.setItem('daten', text);
}

function listeAusgeben(){
    console.log(daten);
    liste.innerHTML = '';
    for (let i = 0; i < daten.length; i++) {
        // Create the list item:
        let item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(daten[i].zahl + ", " + daten[i].zeit));

        // Add it to the list:
        liste.appendChild(item);
    } 
}
