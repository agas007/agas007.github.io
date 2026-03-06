document.addEventListener('DOMContentLoaded', () => {
    // Scroll Effects for Navbar
    const navbar = document.querySelector('.glass-nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 15, 0.85)';
            navbar.style.padding = '1rem 2rem';
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.background = 'rgba(10, 10, 15, 0.6)';
            navbar.style.padding = '1.2rem 2rem';
            navbar.style.boxShadow = 'none';
        }
    });

    // Intersection Observer for Scroll Animations
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
    
    // Trigger initial check so top elements appear immediately
    requestAnimationFrame(() => {
        setTimeout(() => {
            const topFaders = document.querySelectorAll('.hero .fade-in');
            topFaders.forEach(fader => {
                fader.classList.add('appear');
            });
        }, 150);
    });
});
