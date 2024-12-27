// Scroll to donate section on button click
function scrollToDonate() {
  const donateSection = document.getElementById('donate');
  window.scrollTo({
    top: donateSection.offsetTop,
    behavior: 'smooth'
  });
}

// Optional: Form submit confirmation
document.querySelector('.donate-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const amount = document.getElementById('amount').value;
  if (amount && !isNaN(amount)) {
    alert(`Thank you for your donation of $${amount}!`);
  } else {
    alert('Please enter a valid donation amount.');
  }
});

