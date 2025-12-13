// ===========================
// Navigation Menu Toggle
// ===========================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger icon
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ===========================
// Navbar Scroll Effect
// ===========================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scrolled');
        return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
        navbar.classList.add('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===========================
// Active Navigation Link
// ===========================
const sections = document.querySelectorAll('section[id]');

function setActiveNav() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', setActiveNav);
window.addEventListener('load', setActiveNav);

// ===========================
// Smooth Scroll
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Intersection Observer for Animations
// ===========================
const observerOptions = {
    threshold: 0.05,
    rootMargin: '0px 0px -10px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animatable elements
const animateElements = document.querySelectorAll(
    '.stat-card, .timeline-item, .project-card, .skill-category, .education-card, .contact-item'
);

animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    observer.observe(el);
});

// Fallback: Show elements after 3 seconds if observer doesn't trigger
setTimeout(() => {
    animateElements.forEach(el => {
        if (el.style.opacity === '0') {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
}, 3000);

// ===========================
// Typing Effect for Hero Section
// ===========================
const heroSubtitle = document.querySelector('.hero-subtitle');
const text = heroSubtitle.textContent;
heroSubtitle.textContent = '';

let charIndex = 0;
function typeWriter() {
    if (charIndex < text.length) {
        heroSubtitle.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing effect after page load
window.addEventListener('load', () => {
    setTimeout(typeWriter, 500);
});

// ===========================
// Dynamic Stats Counter
// ===========================
const stats = document.querySelectorAll('.stat-card h3');
const statsSection = document.querySelector('.about-stats');
let statsAnimated = false;

function animateStats() {
    if (statsAnimated) return;
    
    stats.forEach(stat => {
        const target = stat.textContent;
        const isNumber = !isNaN(parseFloat(target));
        
        if (isNumber) {
            const numericValue = parseFloat(target);
            const suffix = target.replace(/[0-9.]/g, '');
            let current = 0;
            const increment = numericValue / 50;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= numericValue) {
                    stat.textContent = target;
                    clearInterval(timer);
                } else {
                    stat.textContent = current.toFixed(target.includes('.') ? 2 : 0) + suffix;
                }
            }, 30);
        }
    });
    
    statsAnimated = true;
}

// Observe stats section
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
        }
    });
}, { threshold: 0.5 });

if (statsSection) {
    statsObserver.observe(statsSection);
}

// ===========================
// Project Card Tilt Effect
// ===========================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
});

// ===========================
// Skills Tag Animation
// ===========================
const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach((tag, index) => {
    tag.style.animationDelay = `${index * 0.05}s`;
});

// ===========================
// Timeline Item Alternating Animation
// ===========================
const timelineItems = document.querySelectorAll('.timeline-item');

timelineItems.forEach((item, index) => {
    if (index % 2 === 0) {
        item.querySelector('.timeline-content').style.animationDelay = '0.2s';
    } else {
        item.querySelector('.timeline-content').style.animationDelay = '0.4s';
    }
});

// ===========================
// Back to Top Button (Optional)
// ===========================
const createBackToTop = () => {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'back-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 999;
        font-size: 1.2rem;
    `;
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-5px)';
        button.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.25)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    });
};

// Initialize back to top button
createBackToTop();

// ===========================
// Parallax Effect for Hero
// ===========================
const hero = document.querySelector('.hero');
const heroText = document.querySelector('.hero-text');
const heroImage = document.querySelector('.hero-image');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    
    if (heroText && scrolled < hero.offsetHeight) {
        heroText.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        heroText.style.opacity = 1 - (scrolled / hero.offsetHeight);
    }
    
    if (heroImage && scrolled < hero.offsetHeight) {
        heroImage.style.transform = `translateY(${scrolled * parallaxSpeed * 0.8}px)`;
    }
});

// ===========================
// Add gradient animation to gradient text
// ===========================
const gradientText = document.querySelector('.gradient-text');
if (gradientText) {
    let hue = 0;
    setInterval(() => {
        hue = (hue + 1) % 360;
        // Subtle color shift
        if (hue % 10 === 0) {
            const color1 = `hsl(${240 + (hue / 10)}, 70%, 65%)`;
            const color2 = `hsl(${270 + (hue / 10)}, 60%, 60%)`;
            gradientText.style.backgroundImage = `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`;
        }
    }, 100);
}

// ===========================
// Dynamic Year in Footer
// ===========================
const updateFooterYear = () => {
    const yearElement = document.querySelector('.footer-content p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = `© ${currentYear} Priyanka Yadav. All rights reserved.`;
    }
};

updateFooterYear();

// ===========================
// Preloader (Optional)
// ===========================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    setTimeout(() => {
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.opacity = '1';
        }
    }, 100);
});

// ===========================
// Console Easter Egg
// ===========================
console.log('%c👋 Hi there! ', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%cLooking at the code? Let\'s connect! 🚀', 'font-size: 14px; color: #764ba2;');
console.log('%c📧 priyankay@iitbhilai.ac.in', 'font-size: 12px; color: #4a5568;');
console.log('%c💼 https://github.com/Priyankay151', 'font-size: 12px; color: #4a5568;');

// ===========================
// Performance Monitoring
// ===========================
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`⚡ Page loaded in ${pageLoadTime}ms`);
        }, 0);
    });
}

// ===========================
// Add keyboard navigation
// ===========================
document.addEventListener('keydown', (e) => {
    // Navigate sections with arrow keys
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        const currentSection = Array.from(sections).find(section => {
            const rect = section.getBoundingClientRect();
            return rect.top >= 0 && rect.top < window.innerHeight / 2;
        });
        
        if (currentSection) {
            const currentIndex = Array.from(sections).indexOf(currentSection);
            let nextIndex;
            
            if (e.key === 'ArrowDown') {
                nextIndex = Math.min(currentIndex + 1, sections.length - 1);
            } else {
                nextIndex = Math.max(currentIndex - 1, 0);
            }
            
            const nextSection = sections[nextIndex];
            if (nextSection && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
});

// ===========================
// Print Styles Handler
// ===========================
window.addEventListener('beforeprint', () => {
    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
    });
});

// ===========================
// Handle External Links
// ===========================
document.querySelectorAll('a[href^="http"]').forEach(link => {
    link.setAttribute('rel', 'noopener noreferrer');
});

// ===========================
// Add loading attribute to images
// ===========================
document.querySelectorAll('img').forEach(img => {
    img.setAttribute('loading', 'lazy');
});

console.log('✨ Portfolio initialized successfully!');

