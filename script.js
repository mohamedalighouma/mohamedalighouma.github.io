document.addEventListener('DOMContentLoaded', function() {
    const skillItems = document.querySelectorAll('.skills div');

    skillItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.05)';
            item.style.transition = 'transform 0.3s ease';
        });

        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
            item.style.transition = 'transform 0.3s ease';
        });
    });
});
