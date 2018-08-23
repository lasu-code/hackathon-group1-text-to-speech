
document.querySelector('form').onsubmit = function (e) {

    e.preventDefault();

    let msg = new SpeechSynthesisUtterance();
    let voices = window.speechSynthesis.getVoices();
    let randomChoice = Math.floor(Math.random() * voices.length); 
    msg.voice = voices[randomChoice];
    msg.text = document.querySelector("input[id='text']").value;
    msg.lang = 'en-US';
    window.speechSynthesis.speak(msg);
};