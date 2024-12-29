document.addEventListener("DOMContentLoaded", () => {
    // Audio Player
    const backgroundAudio = document.getElementById("background-audio");

    // Play Background Audio
    function playAudio() {
        backgroundAudio.play().catch((error) => {
            console.error("Error playing background audio:", error);
        });
    }

    backgroundAudio.loop = true; // Loop Audio
    backgroundAudio.onerror = function () {
        console.error("Failed to load the audio file. Please check the file path.");
    };

    // Welcome Screen
    const welcomeScreen = document.getElementById("welcome-screen");
    const fingerprint = document.querySelector(".fingerprint");

    // Login Screen
    const loginScreen = document.getElementById("login-screen");
    const loginForm = document.getElementById("login-form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");

    // Main Website
    const mainWebsite = document.getElementById("main-website");

    // Fingerprint Click Handler
    fingerprint.addEventListener("click", () => {
        welcomeScreen.classList.remove("active");
        loginScreen.classList.add("active");
    });

    // Login Form Submission
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === "TEAM RMS" && password === "royalmarcos") {
            loginScreen.classList.remove("active");
            mainWebsite.classList.add("active");

            // Play "Access Granted" Audio
            const accessGrantedAudio = new Audio("https://example.com/access-granted.mp3");
            accessGrantedAudio.play();

            // Play Background Music
            playAudio();
        } else {
            errorMessage.textContent = "Invalid Username or Password. Please try again.";
        }
    });

    // Start Background Audio if Welcome Screen is bypassed
    playAudio();
});