document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting us, ' + document.getElementById('name').value + '!');
    document.getElementById('contact-form').reset();
});
