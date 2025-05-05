// expose.js
window.addEventListener('DOMContentLoaded', init);



function init() 
{
  //Get <select> with id = horn-select
  const hornSelectElm = document.getElementById("horn-select");

  //Returns the first element in document with id = expose, tag = img
  const img = document.querySelector("#expose img"); 
  
  //Returns the first element in document with id = expose, tag = audio
  const audio =  document.querySelector("#expose audio");

  //HornSelector Event: Changes image and audio source
  hornSelectElm.addEventListener('change', function ()
  {
    const horn = hornSelectElm.value;
    let imgPath = "";
    let audioPath = "";

    switch(horn)
    {
      case 'air-horn':
        imgPath = "assets/images/air-horn.svg";
        audioPath = "assets/audio/air-horn.mp3";
        break;

      case 'car-horn':
        imgPath = "assets/images/car-horn.svg";
        audioPath = "assets/audio/car-horn.mp3";
        break;

      case 'party-horn':
        imgPath = "assets/images/party-horn.svg";
        audioPath = "assets/audio/party-horn.mp3";
        break;

      default:
        imgPath = "assets/images/no-image.svg"
        audioPath = "";
        break;
    }

    img.src = imgPath;
    audio.src = audioPath;
  });

  //Get "Volume Control" slider element
  const volCtrlElm = document.querySelector("#volume-controls input");
  const volCtrlImg = document.querySelector("#volume-controls img");
  //playButtonElm Event: When "Play Sound" button is click, play audio
  volCtrlElm.addEventListener("input", function() 
  {
    let volValue = Number(volCtrlElm.value);
    audio.volume = volValue / 100;

    if(volValue <= 0)
    {
      volCtrlImg.src = "assets/icons/volume-level-0.svg";
    }

    else if(volValue > 0 && volValue < 33)
    {
      volCtrlImg.src = "assets/icons/volume-level-1.svg";
    }

    else if(volValue >= 33  && volValue < 67)
    {
      volCtrlImg.src = "assets/icons/volume-level-2.svg";
    }

    else if(volValue >= 67)
    {
      volCtrlImg.src = "assets/icons/volume-level-3.svg";
    }
  });

  

  const jsConfetti = new JSConfetti();
  
 
  //Get "Play Sound" button element
  const playButtonElm = document.querySelector("#expose button");
  //playButtonElm Event: When "Play Sound" button is click, play audio
  playButtonElm.addEventListener("click", function() 
  {
    if(audio.src)
      {
        audio.load();
        audio.play();
      }

      //Party horn: Add confetti
      if (hornSelectElm.value == "party-horn")
        {
          jsConfetti.addConfetti({
            emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
         })     
        } 
  });
}