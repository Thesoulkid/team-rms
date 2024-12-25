// Toggle Drawer
function toggleDrawer() {
    const drawer = document.getElementById('drawer');
    if (drawer.style.left === '0px') {
        drawer.style.left = '-250px';
    } else {
        drawer.style.left = '0px';
    }
}

// Open Happy New Year Page
function openHappyNewYear() {
    const newTab = window.open("", "_blank"); // Open a new tab

    // Generate HTML content for the new tab
    newTab.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Happy New Year</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    background: linear-gradient(to right, #ff7e5f, #feb47b);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    color: white;
                    text-align: center;
                }
                h1 {
                    font-size: 4rem;
                    margin: 0;
                    animation: glow 2s infinite alternate;
                }
                p {
                    font-size: 1.5rem;
                }
                .fireworks {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: url('https://i.gifer.com/2AB.gif') center/cover no-repeat;
                    z-index: -1;
                    opacity: 0.8;
                }
                @keyframes glow {
                    from {
                        text-shadow: 0 0 10px #fff, 0 0 20px #ff9, 0 0 30px #ff6;
                    }
                    to {
                        text-shadow: 0 0 20px #fff, 0 0 30px #ff9, 0 0 40px #ff6;
                    }
                }
                button {
                    margin-top: 20px;
                    padding: 10px 20px;
                    background: white;
                    color: #ff5f6d;
                    border: none;
                    border-radius: 5px;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: background 0.3s;
                }
                button:hover {
                    background: #ff5f6d;
                    color: white;
                }
            </style>
        </head>
        <body>
            <div class="fireworks"></div>
            <div>
                <h1>Happy New Year 🎉</h1>
                <p>Wishing you a year full of joy, happiness, and success!</p>
                <button onclick="window.close()">Close</button>
            </div>
        </body>
        </html>
    `);

    newTab.document.close(); // Close the document stream
}
