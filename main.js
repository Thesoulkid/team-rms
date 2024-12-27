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

    // Open a new tab to display the QR code with the UPI URL and amount
    const qrTab = window.open('generateQRCode.html?upiUrl=' + encodeURIComponent(upiUrl), '_blank');
    
    // If the tab didn't open, alert the user about the pop-up block
    if (!qrTab) {
      alert('Pop-up blocked. Please allow pop-ups for this site.');
    }

  } else {
    alert('Please enter a valid donation amount.');
  }
});
