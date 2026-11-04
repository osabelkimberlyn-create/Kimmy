// Mobile navigation menu toggle
const mobileMenuToggle = document.getElementById('mobile-menu');
const navbar = document.querySelector('.navbar');

mobileMenuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    const icon = mobileMenuToggle.querySelector('i');
    if (navbar.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking a navigation link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        const icon = mobileMenuToggle.querySelector('i');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    });
});

// Active menu highlight on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Interactive 3D Card Tilt Effect on Hover
const idCard = document.getElementById('idCard');

if (idCard) {
    idCard.addEventListener('mousemove', (e) => {
        const rect = idCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = -((y - centerY) / centerY) * 15;
        const rotateY = ((x - centerX) / centerX) * 15;
        
        idCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    idCard.addEventListener('mouseleave', () => {
        idCard.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
        idCard.style.transition = 'transform 0.5s ease';
    });

    idCard.addEventListener('mouseenter', () => {
        idCard.style.transition = 'none';
    });
}