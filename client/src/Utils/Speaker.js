 const SpeakText = (text_message) => {
    const message = new SpeechSynthesisUtterance();
    message.text = text_message;
    const voices = window.speechSynthesis.getVoices();
    const femaleVoice = voices.find((voice) => voice.name === 'Google UK English Female');

    if (femaleVoice) {
      message.voice = femaleVoice;
    }
    message.rate = 1.5;

    window.speechSynthesis.speak(message)
 
  };

  export default SpeakText
  