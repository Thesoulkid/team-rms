const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginContainer = document.getElementById('login-container');
const sendContactMessageButton = document.getElementById('send-contact-message');
const contactMessageInput = document.getElementById('contact-message');
const contactButton = document.getElementById('contact-button');

// Admin Credentials
const adminUsername = 'admin';
const adminPassword = 'adminpass';
const userUsername = 'user';
const userPassword = 'user123';
const customerMessages = [];

// Admin and User credentials
const adminUsername = 'admin';
const adminPassword = 'adminpass';
const userUsername = 'user';
const userPassword = 'user123';

// Login Logic
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();  // Prevent form submission
  
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === adminUsername && password === adminPassword) {
    // Open Admin page in new tab
    window.open('admin.html', '_blank');
    // Clear login fields after successful login
    usernameInput.value = '';
    passwordInput.value = '';
  } 
  else if (username === userUsername && password === userPassword) {
    // Open User page in new tab
    window.open('user.html', '_blank');
    // Clear login fields after successful login
    usernameInput.value = '';
    passwordInput.value = '';
  } else {
    // Invalid credentials
    document.getElementById('login-error').style.display = 'block';
  }
});

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

// Open Contact Chat in New Tab
contactButton.addEventListener('click', () => {
  const chatWindow = window.open('', '_blank', 'width=500,height=700');
  chatWindow.document.write(`
    <html>
      <head>
        <title>Contact Admin</title>
        <style>
          body {
            margin: 0;
            font-family: 'Roboto', sans-serif;
            background: #000;
            color: #ffa500;
          }
          .chat-header {
            padding: 10px;
            background: #111;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .chat-header img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }
          .chat-header h1 {
            font-size: 18px;
            margin: 0;
          }
          .chat-messages {
            flex: 1;
            padding: 10px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
          }
          .chat-input {
            display: flex;
            align-items: center;
            padding: 10px;
            gap: 10px;
          }
          .chat-input textarea {
            flex: 1;
            padding: 10px;
            border-radius: 5px;
          }
        </style>
      </head>
      <body>
        <div class="chat-window">
          <div class="chat-header">
            <img src="admin.jpg" alt="Admin">
            <h1>Admin</h1>
          </div>
          <div class="chat-messages">
            <!-- Chat messages will appear here -->
          </div>
          <div class="chat-input">
            <textarea placeholder="Type your message"></textarea>
            <button>Send</button>
          </div>
        </div>
      </body>
    </html>
  `);
});
