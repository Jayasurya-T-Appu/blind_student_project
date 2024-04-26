const SpeakText = (text_message) => {
  const message = new SpeechSynthesisUtterance();
  message.text = text_message;
  let isSpeaking = false;

  const startSpeaking = () => {
    if (!isSpeaking) {
      const voices = window.speechSynthesis.getVoices();
      const femaleVoice = voices.find((voice) => voice.name === 'Google UK English Female');
      if (femaleVoice) {
        message.voice = femaleVoice;
      }
      message.rate = 1.5;
      window.speechSynthesis.speak(message);
      isSpeaking = true;
    }
  };

  const stopSpeaking = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      isSpeaking = false;
    }
  };

  return {
    startSpeaking,
    stopSpeaking,
  };
};

export default SpeakText;
