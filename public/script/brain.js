import { monitorEventLoopDelay } from "perf_hooks";

const synth = window.speechSynthesis;

let addingLinkProcess = 0;
let linkURL = '';

function blink(i) {
    if (i === 33){
        document.getElementById('face').innerHTML = '-_-'
    }
    if (i > 33){
        document.getElementById('face').innerHTML = 'ಠ_ಠ'
        blinkCounter = 0;
    }
    }
blinkCounter = 0;
setInterval(() => {
    blinkCounter++;
    blink(blinkCounter);
}, 200)


//LANGUAGE SETTINGS
//POLITE
//GRUMPY
//MAD
//SAD

//let mood = checkMood();
//changeLanguageSettings(mood);

function confirmAction() {
    //checkLanguageSettings(); //RETURNS "POLITE", "GRUMPY", "MAD", "SAD"
    
}
//PROFANITY FILTER FUNCTION
function politeLanguageBank() {
    //GENDER BASED
    let confirmations = [
        "Of course. ", "Will do. ", "Aye aye. ", "In a hurry. ", "As fast as I can. "
    ]
    let random = Math.floor(Math.random() * confirmations.length);

    let confirmation = confirmations[random];
    return confirmation;
}
function greetingsBank() {
    let confirmations = [
        "Hello! ", "Hi!. ", "What's up. ", "How you doing? ", "Sup? ", "Hey. "
    ]
    let random = Math.floor(Math.random() * confirmations.length);

    let greeting = confirmations[random]
    return greeting;
}












function mood() {
    mood = {
        sad:0,
        happy:0,
        angry:0,
        excited:0
    }
}

















function responseProcessing(sentence) {

    let array = sentence.split(' ');
    if (array[0] === ''){
        array.shift();
    }
    for (let i = 0; i < array.length; i++){
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }
    
    checkCommand(array);
}



function addLink(URL, name){
    let newLink = {linkName:name, linkUrl:URL}
    links.push(newLink)
}
function openLink(name){

    for (let i = 0; i < links.length; i++){
       if (links[i].linkName === name){
        newWindow = window.open(links[i].linkUrl);
        speak("Okay.");
        return true;
       }
       return false;
    }
}

let links = [
    {linkName:'Believer', linkUrl:'https://www.youtube.com/watch?v=WS-XqJM0-uQ'}
]






/*
ERRORS 

newWindow is not defined
    at responseProcessing (brain.js:94)


*/