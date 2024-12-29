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
                leaderCircle.classList.add("playing"); // Add animation
                playIcon.style.display = "block"; // Show play icon

                // Start pulsing animation for Siri effect
                circle.querySelectorAll('.siri-circle').forEach(siriCircle => {
                    siriCircle.style.animationPlayState = "running";
                });
            } else {
                // Pause audio
                leaderVoice.pause();
                leaderVoice.currentTime = 0;
                leaderCircle.classList.remove("playing"); // Remove animation
                playIcon.style.display = "none"; // Hide play icon

                // Stop pulsing animation
                circle.querySelectorAll('.siri-circle').forEach(siriCircle => {
                    siriCircle.style.animationPlayState = "paused";
                });
            }
        });
    });

    // Stop Animation When Audio Ends
    leaderVoice.addEventListener("ended", () => {
        leaderCircle.classList.remove("playing");
        playIcon.style.display = "none";

        // Stop pulsing animation
        document.querySelectorAll('.siri-circle').forEach(siriCircle => {
            siriCircle.style.animationPlayState = "paused";
        });
    });
});
