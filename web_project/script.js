$(document).ready(function() {
    $('.menu-item').click(function(e) {
        e.preventDefault();

        // Hide all pages
        $('.page').removeClass('active');

        // Show the target page
        const target = $(this).data('target');
        $('#' + target).addClass('active');
    });
});
