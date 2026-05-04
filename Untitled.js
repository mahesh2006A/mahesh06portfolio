// Smooth Scroll reveal
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Initial style for reveal
sections.forEach(s => {
    s.style.opacity = '0';
    s.style.transform = 'translateY(50px)';
    s.style.transition = 'all 0.8s ease-out';
});
