
//Aquisisce il div con id playGroundContainer da HTML
let playGround = document.getElementById("playGroundContainer");

//Funzione che crea la singola cella e ne assegna la classe box
const createBox = () => {
    //Crea il div della singola casella
    const box = document.createElement("div");   
    //Aggiunge classe "box" a box
    box.classList.add('box');
    //Ritorna il div box con classe box
    return box
}

//Contiene il valore della selezione della difficoltà
let selection = "Easy";

//Funzione che ritorna livello difficoltà selezionato
function levelSelection() {
    selection = document.getElementById("Difficult").value;

    if(selection == "Easy"){
        cells = 100;
    }
    else if(selection == "Medium"){
        cells = 81;
    }
    else if(selection == "Hard"){
        cells = 49;
    }

    return cells;
}

console.log(levelSelection());
/*
function playGroundMaker(cellsNumber){
    for(let i = 1; i <= cellsNumber; i++){
        const box = createBox();
        box.innerHTML = i;
    
        box.addEventListener('click', function(){
            box.classList.add("clicked");
        });
    
        playGround.appendChild(box);
    }

}


*/



