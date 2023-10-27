document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const message = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        
        message.textContent = 'Sign-up successful!';
        message.classList.remove('hidden');
    });
});
