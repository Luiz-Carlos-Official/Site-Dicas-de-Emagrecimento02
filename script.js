// script.js

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. SCROLL SUAVE PARA LINKS INTERNOS
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 2. ANIMAÇÃO DO BOTÃO CTA QUANDO APARECE NA TELA
    const ctaSection = document.querySelector('.cta');
    const ctaButton = ctaSection.querySelector('a');

    const observerCTA = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                ctaButton.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.5
    });

    observerCTA.observe(ctaSection);

    // 3. LAZY LOAD DO VÍDEO
    const videoSection = document.querySelector('.video iframe');
    const observerVideo = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const src = videoSection.getAttribute('data-src') || videoSection.src;
                if(videoSection.src !== src) {
                    videoSection.src = src;
                }
            }
        });
    }, { threshold: 0.5 });

    observerVideo.observe(videoSection);

    // 4. HOVER SUAVE NAS SEÇÕES
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.style.transform = 'translateY(-3px)';
            section.style.transition = 'all 0.3s ease';
        });
        section.addEventListener('mouseleave', () => {
            section.style.transform = 'translateY(0)';
        });
    });

});

// 5. FADE-IN CSS PARA CTA BUTTON
const style = document.createElement('style');
style.innerHTML = `
.fade-in {
    opacity: 0;
    animation: fadeInUp 1s forwards;
}

@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
`;
document.head.appendChild(style);
