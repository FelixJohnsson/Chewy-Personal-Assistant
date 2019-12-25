function checkCommand(sentence) {

if (addingLinkProcess === 1 && sentence[0] + sentence[1] + sentence[2] === 'ThereItIs' || sentence[0] + sentence[1] + sentence[2] === 'ThereYouGo'){
    linkURL = document.getElementById('input').value;
    document.getElementById('input').style.display = 'none';
    addingLinkProcess++;
    let confirmation = politeLanguageBank();
    speak(confirmation + 'What do you want to call it?')
}
if (addingLinkProcess === 2){
if(sentence.length > 1){
    return;
}
addLink(linkURL, sentence[0])
addingLinkProcess = 0;
speak('Okay.' + sentence[0] + ' is now added.');
}

if(addingLinkProcess === 0 && sentence[0] + sentence[1] === 'AddLink'){
addingLinkProcess++;
document.getElementById('input').style.display = 'block';
speak('Okay. What is the URL?');
}

if (sentence.length === 1 && sentence[0] === 'Chewy' || sentence[0] === 'Hello' || sentence[0] === 'Hi' ) {
speak(greetingsBank());
}
if (sentence[0] === 'Open' && sentence.length === 2){
newWindow = window.open('https://' + sentence[1] + '.com')
speak('Alright.');
}
if (sentence[0] + sentence[1] === 'OpenLink' || sentence[0] + sentence[1] === 'Openlink' || sentence[0] === 'Openlink'){
let check = openLink(sentence[2])
if(check === true){
    speak(politeLanguageBank());
} else {
    speak("Can't find that link.")
}
}
if (sentence[0] === 'Close'){
newWindow.close();
speak("Closing.");
}

}