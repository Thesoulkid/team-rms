// JavaScript for Circle Interaction and Audio Playback
document.addEventListener("DOMContentLoaded", () => {
    const leaderCircle = document.getElementById("leader-circle");
    const leaderVoice = document.getElementById("leader-voice");
    const playIcon = document.getElementById("play-icon");

    // On Circle Click
    leaderCircle.addEventListener("click", () => {
        if (leaderVoice.paused) {
            // Play audio
            leaderVoice.play();
            leaderCircle.classList.add("playing"); // Add animation
            playIcon.innerHTML = "&#10074;&#10074;"; // Change icon to pause
            playIcon.style.display = "block"; // Show pause icon
        } else {
            // Pause audio
            leaderVoice.pause();
            leaderVoice.currentTime = 0;
            leaderCircle.classList.remove("playing"); // Remove animation
            playIcon.innerHTML = "&#9658;"; // Change icon back to play
            playIcon.style.display = "block"; // Show play icon
        }
    });

    // Stop Animation When Audio Ends
    leaderVoice.addEventListener("ended", () => {
        leaderCircle.classList.remove("playing");
        playIcon.innerHTML = "&#9658;"; // Reset icon to play when audio ends
        playIcon.style.display = "none"; // Hide icon after audio ends
    });

    // Add 3D Scrolling Effect
    document.addEventListener("mousemove", (event) => {
        const container = document.querySelector(".container");
        const x = (window.innerWidth - event.pageX * 2) / 50;
        const y = (window.innerHeight - event.pageY * 2) / 50;
        container.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    });
});
