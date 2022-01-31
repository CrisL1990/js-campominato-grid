
//Aquisisce il div con id playGroundContainer da HTML
let playGround = document.getElementById("playGroundContainer");



//Contiene il valore della selezione della difficoltà
let selection = "Easy";

//Crea riferimento al button
let optn = document.getElementById('startGame');

//Setta counter di quante volte viene premuto il bottone Play
let counter = 0

//Crea event listener del click
optn.addEventListener('click', function(){

    //Aquisisce la selezione della difficoltà da html
    selection = document.getElementById("Difficult").value;

    //Crea variabile cells e la setta di default a Easy
    let cells;
    cells = "Easy";

    //Ogni numero pari di counter viene creato il campo selezionato.
    //Ogni numero dispari il campo si resetta
    if(counter % 2 == 0){
        if(selection == "Easy"){
            cells = 100;
            playGroundMaker(cells);
        }
        else if(selection == "Medium"){
            cells = 81;
            playGroundMaker(cells);
        }
        else if(selection == "Hard"){
            cells = 49;
            playGroundMaker(cells);
        }
    }
    else{
        resetPlayground();
    }

    //Incrementa counter di 1 ad ogni click
    counter += 1;
    
    //Ritorna numero di celle
    return cells
})


//Questa Funzione crea la singola cella e ne assegna la classe box
const createBox = () => {
    //Crea il div della singola casella
    const box = document.createElement("div");   
    //Aggiunge classe "box" a box
    box.classList.add('box');
    //Ritorna il div box con classe box
    return box
}


//Questa funzione aquisisce il numero di celle da creare come parametro e inserisce al suo interno il numero
//Cambia colore di sfondo alla cella quando viene cliccata
//In base al numero di celle passate come parametro ne modifica la dimensione
function playGroundMaker(cellsNumber){
    for(let i = 1; i <= cellsNumber; i++){
        const box = createBox();
        box.innerHTML = i;
    
        box.addEventListener('click', function(){
            box.classList.add("clicked");
        });

        if(cellsNumber == 100){
            box.classList.add('game100');
            box.classList.remove('game81');
            box.classList.remove('game49');
        }

        else if(cellsNumber == 81){
            box.classList.remove('game100');
            box.classList.add('game81');
            box.classList.remove('game49');
        }

        else if(cellsNumber == 49){
            box.classList.remove('game100');
            box.classList.remove('game81');
            box.classList.add('game49');
        }
    
        playGround.appendChild(box);
    }

}

//Questa funzione riporta il plauyground alla condizione di partenza con 0 celle al suo interno
function resetPlayground(){
    let playGroundReset = document.getElementById("playGroundContainer").innerHTML = '';
    return playGroundReset
}




