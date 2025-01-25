const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginContainer = document.getElementById('login-container');
const userSection = document.getElementById('user-section');
const adminPanel = document.getElementById('admin-panel');
const messagesList = document.getElementById('messages-list');
const sendContactMessageButton = document.getElementById('send-contact-message');
const contactMessageInput = document.getElementById('contact-message');
const contactButton = document.getElementById('contact-button');

// Admin Credentials
const adminUsername = 'admin';
const adminPassword = 'adminpass';
const userUsername = 'user';
const userPassword = 'user123';
const customerMessages = [];

// Login Logic
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Admin Login
  if (username === adminUsername && password === adminPassword) {
    loginContainer.classList.add('hidden');
    adminPanel.classList.remove('hidden');
    displayMessages();
  } 
  // User Login
  else if (username === userUsername && password === userPassword) {
    loginContainer.classList.add('hidden');
    userSection.classList.remove('hidden');
  } else {
    alert('Invalid username or password!');
  }
});

// Display Customer Messages in Admin Panel
function displayMessages() {
  messagesList.innerHTML = '';
  customerMessages.forEach((message, index) => {
    const messageItem = document.createElement('li');
    messageItem.textContent = `Message ${index + 1}: ${message}`;
    messagesList.appendChild(messageItem);
  });
}

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