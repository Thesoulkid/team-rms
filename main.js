document.addEventListener("DOMContentLoaded", () => {
    const backgroundAudio = document.getElementById("background-audio");

    // Start playing background audio automatically when the page loads
    backgroundAudio.play().then(() => {
        console.log("Background audio is playing.");
    }).catch((error) => {
        console.error("Error playing background audio:", error);
    });

    // Ensure audio continues playing in the background (in case user interaction is needed)
    backgroundAudio.loop = true;

    // Handle any errors or issues with audio
    backgroundAudio.onerror = function () {
        console.error("Failed to load the audio file. Please check the file path.");
    };
});
