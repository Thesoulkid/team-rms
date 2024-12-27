// UPI ID
const upiId = '6238271749@fam';

// Handle donation form submission
document.getElementById('donateForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the entered amount
  const amount = document.getElementById('amount').value;

  // Validate the amount
  if (amount && !isNaN(amount) && amount > 0) {
    // Generate UPI payment URL with the amount
    const upiUrl = `upi://pay?pa=${upiId}&pn=Heart+Touching+Love&mc=0000&tid=1234567890&url=https://hearttouchinglove.com&am=${amount}&cu=INR`;

    // Open a new tab to display the QR code
    const qrTab = window.open('', '_blank');
    
    // Add content to the new tab
    qrTab.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Scan to Donate</title>
        <script src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"></script>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #111;
            color: #fff;
            text-align: center;
            padding: 50px;
          }
          h1 {
            color: #3ECF6E;
          }
          #qrcode {
            margin-top: 30px;
          }
        </style>
      </head>
      <body>
        <h1>Scan to Donate</h1>
        <div id="qrcode"></div>
        <script>
          // Generate the QR code with the UPI URL
          new QRCode(document.getElementById("qrcode"), {
            text: "${upiUrl}",
            width: 256,
            height: 256,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
          });
        </script>
      </body>
      </html>
    `);
    
  } else {
    alert('Please enter a valid donation amount.');
  }
});
