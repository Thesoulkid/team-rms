document.addEventListener("DOMContentLoaded", () => {
    const leaderCircle = document.getElementById("leader-circle");
    const leaderVoice = document.getElementById("leader-voice");
    const playIcon = document.getElementById("play-icon");
    const allCircles = document.querySelectorAll(".circle");
    const backgroundAudio = document.getElementById("background-audio");

    // Start playing background audio automatically
    backgroundAudio.play();

    // Start Siri effect on all circles when background audio is playing
    allCircles.forEach(circle => {
        circle.addEventListener("click", () => {
            if (backgroundAudio.paused) {
                backgroundAudio.play(); // Play audio
                circle.classList.add("playing"); // Start Siri effect animation
                playIcon.style.display = "block"; // Show play icon
            } else {
                backgroundAudio.pause(); // Pause audio
                circle.classList.remove("playing"); // Remove Siri effect
                playIcon.style.display = "none"; // Hide play icon
            }
        });
    });

    // When audio ends, stop animation and reset icon
    backgroundAudio.addEventListener("ended", () => {
        allCircles.forEach(circle => {
            circle.classList.remove("playing");
        });
        playIcon.style.display = "none";
    });
});
