document.addEventListener("DOMContentLoaded", () => {
    // Audio Player
    const backgroundAudio = document.getElementById("background-audio");
    const accessGrantedAudio = new Audio("https://www.soundjay.com/button/beep-07.wav");

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
    const errorMessage = document.getElementById("login-error");

    // Main Website
    const mainWebsite = document.getElementById("main-website");

    // Fingerprint Click Handler
    fingerprint.addEventListener("click", () => {
        welcomeScreen.classList.remove("active");
        loginScreen.classList.add("active");
    });

    // Login Form Submission
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();  // Prevent form submission
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === "1" && password === "1") {
            // Correct credentials, show the main website
            loginScreen.classList.remove("active");
            mainWebsite.classList.add("active");

            // Play "Access Granted" Audio
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