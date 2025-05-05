// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() 
{
  //Create an instanct of speechSynthese object
  const voiceSynth = window.speechSynthesis;
  //Init other variables
  const selector = document.getElementById("voice-select"); 
  const speakButton = document.querySelector("button");
  const textToSpeak = document.querySelector("textarea");
  const talkingFace = document.querySelector("img");

  //List of voices
  let voices = [];

  function populateVoiceList()
  {
    const voices = voiceSynth.getVoices();
    
    for (let i = 0; i < voices.length; i++) 
    {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      selector.appendChild(option);
    }
  }

  populateVoiceList();
  //Only execute populateVoiceList AFTER list of available voices is fully loaded.
  if (typeof speechSynthesis.onvoiceschanged !== 'undefined') {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
    

  speakButton.addEventListener('click', () => 
  {
    const text = textToSpeak.value;

    //Handle empty text explicitly.
    if (text.trim() === '') return;

    //Set the utterance to input of textarea
    const utterance = new SpeechSynthesisUtterance(text);

    //Get and Set the voice from selected voice list
    const selectedVoice = voices[selector.value];
    if (selectedVoice) 
    {
      utterance.voice = selectedVoice;
    }

    //While speaking: change face to open mouth
    utterance.onstart = () => 
    {
      talkingFace.src = 'assets/images/smiling-open.png';
    };

    //When done speaking: revert face
    utterance.onend = () => 
    {
      talkingFace.src = 'assets/images/smiling.png';
    };

    //SAY THE MAGIC LINE BABY!!!!!!!!!
    voiceSynth.speak(utterance);
  });

}