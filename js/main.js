let gameInput = document.getElementById('input-game');
let input = document.getElementById('input73');
let btn = document.getElementById('btn-submit37');
let btnStart= document.getElementById('btn-submit73');
let divRisposta = document.getElementById('risposta');
let numGame = 5;
let arraytCpu= [];
let arrayUser= [];
let score = 0;
let count = 0;
let time = 9000;

gameInput.classList.add('d-none');

btnStart.addEventListener('click',function(event1){
    arraytCpu= [];
    arrayUser= [];
    score = 0;
    count = 0;
    setupGame(arraytCpu,numGame,divRisposta);
    setTimeout(removeElement,time);
    console.log(arraytCpu);
    event1.stopPropagation();
});

btn,addEventListener('click',function(event2){
    if(count<numGame){
        let numUser = parseInt(input.value);
        divRisposta.innerHTML= `fra devi rimette i numeri che hai visto uno alla volta`;
        console.log(numUser);
        if(!isNaN(numUser)){
            count++;
            if(arraytCpu.includes(numUser)){
                score++
            }

            divRisposta.innerHTML= `fra hai inserito ${count} numeri e il tuo punteggio e: ${score}`; 

            if(count == numGame){
                gameInput.classList.add('d-none');
                if(score == numGame){
                    divRisposta.innerHTML= 'fra hai vinto';
                }
                else{
                    divRisposta.innerHTML= `fra hai perso e il tuo punteggio e: ${score}`;
                }
            }     
        }
        else{
            divRisposta.innerHTML= 'fra ma che hai scritto';
        }
    }
    
    input.value = '';
    event2.stopPropagation();
});
input.addEventListener('click',function(event3){
    event3.stopPropagation();
});

function setupGame(array,num,counteiner){
    let count = 0;
    array = genereteUniqueRandomNUmber(1,100,array,count,num);
    let list = getProgrssiveElement(num,'div','class','bla','box','zz',0);
    for (let i =0; i<num;i++){
        list[i].innerHTML= array[i];
        counteiner.append(list[i]);
    }
}

function removeElement(){
divRisposta.innerHTML = ''
gameInput.classList.remove('d-none');
}