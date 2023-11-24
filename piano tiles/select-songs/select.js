// Function to play the sound
function playSound() {
    const audio = document.getElementById('audioPlayer');
    audio.play();
}

// Add event listener to play button
const playButton = document.getElementById('playButton');
playButton.addEventListener('click', playSound);