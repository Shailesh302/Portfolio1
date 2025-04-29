document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission to allow validation
    
    // Get form values
    const fullName = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validation checks
    if (!fullName || !email || !phone || !subject || !message) {
        alert('Please fill in all fields before submitting!');
        return;
    }

    // If validation passes
    alert('Message sent successfully! Thank you for contacting me.');
    
    // Clear form after submission (optional)
    document.getElementById('contact-form').reset();
});
