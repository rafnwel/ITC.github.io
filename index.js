// Add smooth scrolling for navigation links
document.querySelectorAll('#navigation a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        alert(The ${this.textContent} section is coming soon!);
    });
});

// Fade-in effect for hero overlay
window.addEventListener('load', () => {
    const heroOverlay = document.querySelector('.hero-overlay');
    heroOverlay.style.transition = 'opacity 1.5s ease-in-out';
    heroOverlay.style.opacity = '1';
});
