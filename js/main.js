let input = document.getElementById('input73');
let btn = document.getElementById('btn-submit37');
let divRisposta = document.getElementById('risposta');
let numGame = 5;
let arraytCpu= [];
let arrayUser= [];
const startGame = setTimeout(setupGame(arraytCpu,numGame,divRisposta),9000);
console.log(arraytCpu);


function setupGame(array,num,counteiner){
    let count = 0;
    array = genereteUniqueRandomNUmber(1,100,array,count,num);
    let list = getProgrssiveElement(num,'div','class','bla','box','zz',0);
    for (let i =0; i<num;i++){
        list[i].innerHTML= array[i];
        counteiner.append(list[i]);
    }
}


