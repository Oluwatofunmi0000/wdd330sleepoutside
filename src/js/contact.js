// Get the form element
const form = document.getElementById('contact-form');

// Add submit event listener
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // For now, just show an alert (in a real app, you'd send this to a server)
    alert('Thank you for your message! We will get back to you soon.');
    
    // Clear the form
    form.reset();
});