document.addEventListener('DOMContentLoaded', function() {
    const socialIcons = document.querySelectorAll('.icon');

    socialIcons.forEach(icon => {
        icon.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('id');
            const targetElement = document.getElementById(targetId);

            // You can customize the scrolling behavior based on your layout
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
