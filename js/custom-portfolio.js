/**
 * Custom Portfolio JavaScript - Enhanced Version 2.0
 * Software Engineering Portfolio with Modern Interactions
 * Author: Sanjit Shrestha
 */

// Modern JavaScript with enhanced functionality
class PortfolioManager {
    constructor() {
        this.isInitialized = false;
        this.observers = new Map();
        this.animations = new Map();
        this.init();
    }

    init() {
        if (this.isInitialized) return;

        console.log('🚀 Software Architect Portfolio v2.0 Initialized ✨');

        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeComponents());
        } else {
            this.initializeComponents();
        }

        this.isInitialized = true;
    }

    initializeComponents() {
        this.initializeNavbarScrollEffect();
        this.initializeSmoothScrolling();
        this.initializeIntersectionObserver();
        this.initializeTypingAnimation();
        this.initializeMagicalParticles();
        this.initializeCodePattern();
        this.initializeCursorEffects();
        this.initializePerformanceOptimizations();
        this.initializeAccessibilityFeatures();
    }

    // Enhanced Navbar with scroll effects
    initializeNavbarScrollEffect() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        let lastScrollTop = 0;
        const scrollThreshold = 100;

        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Add scrolled class for styling
            navbar.classList.toggle('scrolled', scrollTop > 50);

            // Hide/show navbar on scroll
            if (scrollTop > scrollThreshold) {
                if (scrollTop > lastScrollTop) {
                    navbar.style.transform = 'translateY(-100%)';
                } else {
                    navbar.style.transform = 'translateY(0)';
                }
            }

            lastScrollTop = scrollTop;
        };

        // Throttle scroll events for better performance
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

    // Enhanced smooth scrolling with active link highlighting
    initializeSmoothScrolling() {
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');
        const sections = document.querySelectorAll('section[id]');

        // Smooth scroll to sections
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80; // Account for navbar height
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Active link highlighting based on scroll position
        const updateActiveLink = () => {
            const scrollY = window.pageYOffset;

            sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 100;
                const sectionId = section.getAttribute('id');

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        };

        window.addEventListener('scroll', updateActiveLink, { passive: true });
    }

    // Intersection Observer for animations
    initializeIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');

                    // Trigger specific animations based on element type
                    if (entry.target.classList.contains('tech-badge')) {
                        this.animateTechBadges(entry.target);
                    }
                    if (entry.target.classList.contains('professional-card')) {
                        this.animateCard(entry.target);
                    }
                }
            });
        }, observerOptions);

        // Observe all elements that should animate
        document.querySelectorAll('.tech-badge, .professional-card, .section-title, .btn').forEach(el => {
            observer.observe(el);
        });

        this.observers.set('intersection', observer);
    }

    // Enhanced typing animation
    initializeTypingAnimation() {
        const typingElement = document.querySelector('.typing-animation');
        if (!typingElement) return;

        const texts = [
            'Software Architect',
            'Senior Software Engineer',
            'Java & Spring Boot Expert',
            'Cloud & Microservices Specialist',
            'Team Leader & Mentor'
        ];

        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingSpeed = 100;
        const deletingSpeed = 50;
        const pauseTime = 2000;

        const typeText = () => {
            const currentText = texts[textIndex];

            if (isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            let nextTimeout = isDeleting ? deletingSpeed : typingSpeed;

            if (!isDeleting && charIndex === currentText.length) {
                nextTimeout = pauseTime;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }

            setTimeout(typeText, nextTimeout);
        };

        typeText();
    }

    // Enhanced magical particles system
    initializeMagicalParticles() {
        const particleContainer = document.getElementById('magicParticles');
        if (!particleContainer) return;

        const particlePool = [];
        const maxParticles = 50;

        // Create particle pool for better performance
        for (let i = 0; i < maxParticles; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.display = 'none';
            particleContainer.appendChild(particle);
            particlePool.push(particle);
        }

        const createParticle = () => {
            const availableParticle = particlePool.find(p => p.style.display === 'none');
            if (!availableParticle) return;

            const types = ['', 'code', 'success'];
            const type = types[Math.floor(Math.random() * types.length)];

            availableParticle.className = `particle ${type}`;
            availableParticle.style.display = 'block';
            availableParticle.style.left = Math.random() * 100 + '%';
            availableParticle.style.animationDelay = '0s';
            availableParticle.style.animationDuration = (8 + Math.random() * 4) + 's';

            setTimeout(() => {
                availableParticle.style.display = 'none';
            }, 12000);
        };

        // Create particles with controlled intervals
        setInterval(createParticle, 500);
    }

    // Enhanced code pattern background
    initializeCodePattern() {
        const codePatterns = document.querySelectorAll('.code-pattern');
        if (!codePatterns.length) return;

        const codeSnippets = [
            'function() {', '=> {', 'class', 'const', 'let', 'var',
            'return', 'import', 'export', 'async', 'await', '{}',
            '[]', '()', '=>', '&&', '||', '===', '!==', 'null', 'undefined'
        ];

        codePatterns.forEach(pattern => {
            for (let i = 0; i < 20; i++) {
                const element = document.createElement('div');
                element.className = 'code-element';
                element.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
                element.style.left = Math.random() * 100 + '%';
                element.style.top = Math.random() * 100 + '%';
                element.style.animationDelay = Math.random() * 10 + 's';
                pattern.appendChild(element);
            }
        });
    }

    // Enhanced cursor effects
    initializeCursorEffects() {
        if (window.innerWidth < 768) return; // Skip on mobile

        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: var(--primary-color);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
            opacity: 0;
        `;
        document.body.appendChild(cursor);

        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.opacity = '0.7';
        });

        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
        });

        // Animate cursor following
        const animateCursor = () => {
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            cursor.style.transform = `translate(${cursorX - 10}px, ${cursorY - 10}px)`;
            requestAnimationFrame(animateCursor);
        };
        animateCursor();

        // Enhance cursor on hover
        document.querySelectorAll('a, button, .btn, .tech-badge').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform += ' scale(1.5)';
                cursor.style.background = 'var(--code-color)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = cursor.style.transform.replace(' scale(1.5)', '');
                cursor.style.background = 'var(--primary-color)';
            });
        });
    }

    // Performance optimizations
    initializePerformanceOptimizations() {
        // Lazy load images
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));

        // Preload critical resources
        const preloadLinks = [
            '/css/portfolio-enhanced.css',
            '/images/sanjit.jpg'
        ];

        preloadLinks.forEach(href => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = href;
            link.as = href.endsWith('.css') ? 'style' : 'image';
            document.head.appendChild(link);
        });
    }

    // Accessibility improvements
    initializeAccessibilityFeatures() {
        // Skip to main content link
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'sr-only';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--primary-color);
            color: white;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 10000;
            transition: top 0.3s;
        `;

        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });

        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });

        document.body.insertBefore(skipLink, document.body.firstChild);

        // Keyboard navigation for custom elements
        document.querySelectorAll('.tech-badge, .professional-card').forEach((el, index) => {
            el.setAttribute('tabindex', '0');
            el.setAttribute('role', 'button');

            el.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    el.click();
                }
            });
        });

        // Announce page changes for screen readers
        const announcePageChange = (message) => {
            const announcement = document.createElement('div');
            announcement.setAttribute('aria-live', 'polite');
            announcement.setAttribute('aria-atomic', 'true');
            announcement.className = 'sr-only';
            announcement.textContent = message;
            document.body.appendChild(announcement);

            setTimeout(() => {
                document.body.removeChild(announcement);
            }, 1000);
        };

        // Announce when sections come into view
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionTitle = entry.target.querySelector('h2, h1');
                    if (sectionTitle) {
                        announcePageChange(`Now viewing ${sectionTitle.textContent} section`);
                    }
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('section[id]').forEach(section => {
            sectionObserver.observe(section);
        });
    }

    // Animation helpers
    animateTechBadges(container) {
        const badges = container.querySelectorAll ? container.querySelectorAll('.tech-badge') : [container];
        badges.forEach((badge, index) => {
            setTimeout(() => {
                badge.style.animation = 'slideInUp 0.6s ease forwards';
            }, index * 100);
        });
    }

    animateCard(card) {
        card.style.animation = 'fadeInUp 0.8s ease forwards';
    }

    // Public methods for external use
    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const offsetTop = section.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    // Cleanup method
    destroy() {
        this.observers.forEach(observer => observer.disconnect());
        this.observers.clear();
        this.animations.clear();
        this.isInitialized = false;
    }
}

// Initialize the portfolio manager
const portfolio = new PortfolioManager();

// Additional CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes codeFloat {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }

    .particle {
        position: absolute;
        width: 4px;
        height: 4px;
        background: var(--primary-color);
        border-radius: 50%;
        animation: particleFloat 10s linear infinite;
    }

    .particle.code {
        background: var(--code-color);
    }

    .particle.success {
        background: var(--accent-color);
    }

    @keyframes particleFloat {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }

    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }

    .code-element {
        animation: codeFloat 15s infinite linear;
    }
`;
document.head.appendChild(style);

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PortfolioManager;
}
