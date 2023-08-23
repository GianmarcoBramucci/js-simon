const dataOdierna= new Date();
const dataOdiernaMs=dataOdierna.getTime();
const dataDomani= new Date("August 24,2023 9:30");
const dataDomaniMs=dataDomani.getTime();
let tempoRimanente=dataDomaniMs-dataOdiernaMs;
let day= document.getElementById('days');
let minute= document.getElementById('minutes');
let second= document.getElementById('seconds');
tempoRimanente= tempoRimanente/1000;
console.log(tempoRimanente);
tempoRimanente= tempoRimanente/60;
console.log(tempoRimanente);
console.log(day)
tempoRimanente= tempoRimanente/60;
console.log(tempoRimanente);
let countDown= setInterval(function(){
    
})
