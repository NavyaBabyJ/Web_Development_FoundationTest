document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('viewRequestsTab').addEventListener('click', function() {
        document.getElementById('requestDetails').style.display = 'block';
        document.getElementById('pendingRequests').style.display = 'block';
        document.getElementById('onHoldRequests').style.display = 'block';
        document.getElementById('approvedRequests').style.display = 'block';
        document.getElementById('rejectedRequests').style.display = 'block';
    });

    document.getElementById('logout').addEventListener('click', function() {
        window.location.href = 'login.html';
    });

    // Add other event listeners and functionality as needed
});