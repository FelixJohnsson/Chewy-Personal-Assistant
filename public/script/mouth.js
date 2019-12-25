function speak(sentence){
    utterance = new SpeechSynthesisUtterance(sentence);

    utterance.voice = synth.getVoices()[6];
    utterance.lang = 'en-GB';
    utterance.pitch = 0.8;
    utterance.rate = 1.1;

    synth.speak(utterance);
}