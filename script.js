function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const response = document.getElementById('form-response');

    if (name && email && message) {
        response.textContent = 'Thank you for your message! I\'ll get back to you soon.';
        response.style.color = 'green';
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    } else {
        response.textContent = 'Please fill out all fields.';
        response.style.color = 'red';
    }
}