document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();

        var username = document.getElementById('userName').value;
        var password = document.getElementById('password').value;

        var adminUsername = 'admin';
        var adminPassword = 'admin123';

        var employeeUsername = 'employee';
        var employeePassword = 'employee123';

        if ((username === adminUsername && password === adminPassword) ||
            (username === employeeUsername && password === employeePassword)) {
            if (username === 'employee') {
                window.location.href = 'request.html';
            } else {
                // Assuming you have an admin home page
                window.location.href = 'admin.html';
            }
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
});