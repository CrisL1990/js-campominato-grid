
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



let optn = document.getElementById('startGame');
let counter = 0
optn.addEventListener('click', function(){
    selection = document.getElementById("Difficult").value;
    let cells;
    
    cells = "Easy";

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

    counter += 1;
    

    
    return cells
})

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

function resetPlayground(){
    let playGroundReset = document.getElementById("playGroundContainer").innerHTML = '';
    return playGroundReset
}




