let gameInput = document.getElementById('input-game');
let input = document.getElementById('input73');
let btn = document.getElementById('btn-submit37');
let btnStart= document.getElementById('btn-submit73');
let divRisposta = document.getElementById('risposta');
let numGame = 5;
let arraytCpu= [];
let arrayUser= [];
let startGame;
let listaDiv;
gameInput.classList.add('d-none');
btnStart.addEventListener('click',function(){
    listaDiv = setupGame(arraytCpu,numGame,divRisposta);
    startGame= setTimeout(removeElement,9000);
    console.log(arraytCpu);
});


function setupGame(array,num,counteiner){
    let count = 0;
    array = genereteUniqueRandomNUmber(1,100,array,count,num);
    let list = getProgrssiveElement(num,'div','class','bla','box','zz',0);
    for (let i =0; i<num;i++){
        list[i].innerHTML= array[i];
        counteiner.append(list[i]);
    }
    return list;
}

function removeElement(){
for (let i; i<listaNUmeri.length;i++){
    listaDiv[i].innerHTML = '';
}
}