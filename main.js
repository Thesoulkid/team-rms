document.addEventListener("DOMContentLoaded", () => {
    const backgroundAudio = document.getElementById("background-audio");
    const playButton = document.getElementById("play-audio");

    // Attempt to autoplay the audio
    backgroundAudio.play().then(() => {
        console.log("Audio autoplayed successfully.");
        playButton.style.display = "none"; // Hide play button if autoplay works
    }).catch(() => {
        console.log("Autoplay blocked. User interaction needed.");
    });

    // Play button functionality
    playButton.addEventListener("click", () => {
        backgroundAudio.play();
        playButton.style.display = "none"; // Hide the button after audio starts
    });

    // Error handling for the audio element
    backgroundAudio.onerror = function () {
        console.error("Failed to load the audio file. Please check the file path.");
    };
});