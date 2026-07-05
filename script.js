document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.social-link');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            link.style.transform = 'scale(0.95)';
            setTimeout(() => {
                link.style.transform = '';
            }, 150);
        });
        
        link.addEventListener('mouseenter', () => {
            createParticles(link);
        });
    });
    
    function createParticles(element) {
        const rect = element.getBoundingClientRect();
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = '5px';
        particle.style.height = '5px';
        particle.style.background = 'rgba(255, 255, 255, 0.8)';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.left = rect.left + Math.random() * rect.width + 'px';
        particle.style.top = rect.top + Math.random() * rect.height + 'px';
        particle.style.zIndex = '9999';
        particle.style.transition = 'all 1s ease-out';
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.style.transform = `translateY(-${Math.random() * 100 + 50}px)`;
            particle.style.opacity = '0';
        }, 10);
        
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
    
    const name = document.querySelector('.name');
    name.addEventListener('mouseenter', () => {
        name.style.transform = 'scale(1.05)';
    });
    
    name.addEventListener('mouseleave', () => {
        name.style.transform = 'scale(1)';
    });
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const container = document.querySelector('.container');
        container.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
});
