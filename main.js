document.addEventListener("DOMContentLoaded", () => {
    const leaderCircle = document.getElementById("leader-circle");
    const leaderVoice = document.getElementById("leader-voice");
    const playIcon = document.getElementById("play-icon");
    const allCircles = document.querySelectorAll(".circle");

    // On Circle Click
    allCircles.forEach(circle => {
        circle.addEventListener("click", () => {
            if (leaderVoice.paused) {
                // Play audio
                leaderVoice.play();
                circle.classList.add("playing"); // Add animation (Siri effect)
                playIcon.style.display = "block"; // Show play icon
            } else {
                // Pause audio
                leaderVoice.pause();
                leaderVoice.currentTime = 0;
                circle.classList.remove("playing"); // Remove animation
                playIcon.style.display = "none"; // Hide play icon
            }
        });
    });

    // Stop Animation When Audio Ends
    leaderVoice.addEventListener("ended", () => {
        document.querySelectorAll('.circle').forEach(circle => {
            circle.classList.remove("playing"); // Remove Siri animation on end
        });
        playIcon.style.display = "none";
    });
});
