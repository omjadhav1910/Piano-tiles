// // Function to play the sound
// function playSound() {
//     const audio = document.getElementById('audioPlayer');
//     audio.play();
// }

// // Add event listener to play button
// const playButton = document.getElementById('playButton');
// playButton.addEventListener('click', playSound);


// var playButtons = document.querySelectorAll('.play-button');
//         var audioPlayers = document.querySelectorAll('[class^="audio-player"]');
    
//         // Iterate through each play button and add a click event listener
//         playButtons.forEach(function (button, index) {
//             button.addEventListener('click', function () {
//                 // Pause all audio elements
//                 audioPlayers.forEach(function (audio) {
//                     audio.pause();
//                     audio.currentTime = 0; // Reset to the beginning
//                 });
    
//                 // Get the corresponding audio element based on the index
//                 var audioPlayer = document.querySelector('.audio-player' + (index + 1));
//                 localStorage.setItem("audioNo",index+1)
                
//                 // Play the clicked audio
//                 audioPlayer.play();
//             });
//         });





const element1 = document.querySelector(".audi1")

element1.onclick = function(){
    console.log("HELELE")
  localStorage.setItem("valueOfSel",1)
  window.location.href = "../../index.html"
}