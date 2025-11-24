// Site-wide JavaScript functionality
$(document).ready(function () {
    // Auto-hide alerts after 5 seconds
    setTimeout(function () {
        $('.alert').fadeOut('slow');
    }, 5000);

    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Add CSRF token to all AJAX requests
    $.ajaxSetup({
        beforeSend: function (xhr, settings) {
            if (settings.type === 'POST' || settings.type === 'PUT' || settings.type === 'DELETE') {
                var token = $('input[name="__RequestVerificationToken"]').val();
                if (token) {
                    xhr.setRequestHeader('RequestVerificationToken', token);
                }
            }
        }
    });

    // Confirm delete actions
    $('.confirm-delete').on('click', function (e) {
        if (!confirm('Are you sure you want to delete this item?')) {
            e.preventDefault();
            return false;
        }
    });
});