/**
 * Software Engineering Portfolio - Advanced Interactive Effects
 * Author: Sanjit Shrestha
 * Version: 3.0 - Enhanced Software Engineering Experience with Mobile Optimization
 */

class SoftwareEngineeringPortfolio {
    constructor() {
        this.isInitialized = false;
        this.animations = new Map();
        this.observers = new Map();
        this.particles = [];
        this.matrixColumns = [];
        this.networkNodes = [];

        // Mobile detection and optimization
        this.isMobile = this.detectMobileDevice();
        this.isTablet = this.detectTabletDevice();
        this.touchSupport = this.detectTouchSupport();
        this.reduceMotion = this.checkReducedMotion();

        this.init();
    }

    // Mobile Detection Methods
    detectMobileDevice() {
        return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    detectTabletDevice() {
        return window.innerWidth > 768 && window.innerWidth <= 1024;
    }

    detectTouchSupport() {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    }

    checkReducedMotion() {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    init() {
        if (this.isInitialized) return;

        console.log('🚀 Initializing Software Engineering Portfolio v3.0...');
        console.log(`📱 Device: ${this.isMobile ? 'Mobile' : this.isTablet ? 'Tablet' : 'Desktop'}`);
        console.log(`👆 Touch: ${this.touchSupport ? 'Supported' : 'Not Supported'}`);

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeAll());
        } else {
            this.initializeAll();
        }

        // Add resize listener for responsive updates
        this.setupResizeListener();

        this.isInitialized = true;
    }

    setupResizeListener() {
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.handleResize();
            }, 250);
        });
    }

    handleResize() {
        this.isMobile = this.detectMobileDevice();
        this.isTablet = this.detectTabletDevice();

        // Re-initialize mobile-sensitive components
        this.adjustParticleSystem();
        this.adjustMatrixRain();
        this.adjustAnimations();
    }

    initializeAll() {
        console.log('⚡ Loading software engineering components...');

        this.createSoftwareBackground();

        // Conditional initialization based on device type
        if (!this.reduceMotion) {
            if (this.isMobile) {
                this.initializeMobileOptimizedEffects();
            } else {
                this.initializeFullEffects();
            }
        }

        this.initializeTerminalEffects();
        this.initializeCodingStats();
        this.initializeCodeEditor();
        this.initializeNavbarEffects();
        this.initializeSmoothScrolling();
        this.initializeTypingAnimations();
        this.initializeInteractiveElements();

        // Mobile-specific features
        if (this.touchSupport) {
            this.initializeTouchInteractions();
        }

        this.initializePerformanceMonitoring();
        this.initializeEnhancedNavigation();

        console.log('✨ Software Engineering Portfolio fully loaded!');
    }

    initializeMobileOptimizedEffects() {
        // Lightweight effects for mobile
        this.initializeSimpleParticles();
        this.initializeMobileBackground();
    }

    initializeFullEffects() {
        // Full effects for desktop
        this.initializeMatrixRain();
        this.initializeBinaryBackground();
        this.initializeFloatingCode();
        this.initializeNetworkVisualization();
        this.initializeArchitectureDiagram();
        this.initializeParticleSystem();
    }

    createSoftwareBackground() {
        // Create circuit board background (lightweight version for mobile)
        const circuitBg = document.createElement('div');
        circuitBg.className = 'circuit-background';

        if (this.isMobile) {
            circuitBg.style.opacity = '0.3';
            circuitBg.style.animationDuration = '30s'; // Slower for better performance
        }

        document.body.appendChild(circuitBg);

        if (!this.isMobile || !this.reduceMotion) {
            // Create matrix rain container
            const matrixRain = document.createElement('div');
            matrixRain.className = 'matrix-rain';
            matrixRain.id = 'matrixRain';
            document.body.appendChild(matrixRain);

            // Create binary background
            const binaryBg = document.createElement('div');
            binaryBg.className = 'binary-background';
            binaryBg.id = 'binaryBackground';
            document.body.appendChild(binaryBg);
        }
    }

    initializeMatrixRain() {
        if (this.isMobile || this.reduceMotion) return;

        const matrixContainer = document.getElementById('matrixRain');
        if (!matrixContainer) return;

        const createMatrixColumn = () => {
            const column = document.createElement('div');
            column.className = 'matrix-column';

            // Generate random matrix characters
            const chars = '01ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ';
            let text = '';
            const length = this.isTablet ? 15 : 20;
            for (let i = 0; i < length; i++) {
                text += chars.charAt(Math.floor(Math.random() * chars.length)) + '\n';
            }
            column.textContent = text;

            column.style.left = Math.random() * 100 + '%';
            column.style.animationDelay = Math.random() * 5 + 's';
            column.style.animationDuration = (8 + Math.random() * 4) + 's';

            matrixContainer.appendChild(column);

            setTimeout(() => {
                if (column.parentNode) {
                    column.parentNode.removeChild(column);
                }
            }, 12000);
        };

        // Reduced frequency for tablets
        const interval = this.isTablet ? 2000 : 1000;
        const matrixInterval = setInterval(createMatrixColumn, interval);

        // Store for cleanup
        this.animations.set('matrix', matrixInterval);

        // Create initial columns
        const initialCount = this.isTablet ? 3 : 5;
        for (let i = 0; i < initialCount; i++) {
            setTimeout(createMatrixColumn, i * 500);
        }
    }

    initializeSimpleParticles() {
        // Lightweight particle system for mobile
        const particleContainer = document.createElement('div');
        particleContainer.className = 'mobile-particles';
        particleContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            opacity: 0.3;
        `;
        document.body.appendChild(particleContainer);

        const createMobileParticle = () => {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: var(--primary-color);
                border-radius: 50%;
                animation: mobileFloat 8s linear infinite;
            `;

            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 8 + 's';

            particleContainer.appendChild(particle);

            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 8000);
        };

        // Create particles less frequently on mobile
        const mobileParticleInterval = setInterval(createMobileParticle, 3000);
        this.animations.set('mobileParticles', mobileParticleInterval);
    }

    initializeTouchInteractions() {
        // Enhanced touch interactions for mobile
        document.body.style.cssText += `
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            touch-action: manipulation;
        `;

        // Touch-friendly button interactions
        const buttons = document.querySelectorAll('.btn, .tech-badge, .professional-card');
        buttons.forEach(button => {
            // Add touch feedback
            button.addEventListener('touchstart', (e) => {
                button.style.transform = 'scale(0.98)';
                button.style.transition = 'transform 0.1s ease';
            });

            button.addEventListener('touchend', (e) => {
                setTimeout(() => {
                    button.style.transform = '';
                    button.style.transition = 'transform 0.3s ease';
                }, 100);
            });

            button.addEventListener('touchcancel', (e) => {
                button.style.transform = '';
                button.style.transition = 'transform 0.3s ease';
            });
        });

        // Improve scroll performance on mobile
        let ticking = false;
        const updateScrollEffects = () => {
            if (this.isMobile) {
                // Simplified scroll effects for mobile
                const scrollY = window.scrollY;
                const navbar = document.querySelector('.navbar');
                if (navbar) {
                    if (scrollY > 50) {
                        navbar.classList.add('scrolled');
                    } else {
                        navbar.classList.remove('scrolled');
                    }
                }
            }
            ticking = false;
        };

        document.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        }, { passive: true });
    }

    adjustParticleSystem() {
        // Adjust particle count based on screen size
        const existingParticles = document.querySelectorAll('.tech-particle, .mobile-particles div');
        const targetCount = this.isMobile ? 5 : this.isTablet ? 15 : 30;

        if (existingParticles.length > targetCount) {
            // Remove excess particles
            for (let i = targetCount; i < existingParticles.length; i++) {
                if (existingParticles[i].parentNode) {
                    existingParticles[i].parentNode.removeChild(existingParticles[i]);
                }
            }
        }
    }

    adjustMatrixRain() {
        if (this.isMobile && document.getElementById('matrixRain')) {
            // Disable matrix rain on mobile
            const matrixContainer = document.getElementById('matrixRain');
            matrixContainer.style.display = 'none';

            // Clear matrix interval
            const matrixInterval = this.animations.get('matrix');
            if (matrixInterval) {
                clearInterval(matrixInterval);
            }
        }
    }

    adjustAnimations() {
        // Adjust animation speeds based on device
        const animationElements = document.querySelectorAll('.tech-particle, .matrix-column, .binary-string');
        animationElements.forEach(element => {
            if (this.isMobile) {
                element.style.animationDuration = '8s'; // Slower on mobile
            } else if (this.isTablet) {
                element.style.animationDuration = '6s'; // Medium on tablet
            } else {
                element.style.animationDuration = '4s'; // Fast on desktop
            }
        });
    }

    initializeTerminalEffects() {
        // Create terminal windows throughout the page
        const terminals = document.querySelectorAll('.terminal-window');

        terminals.forEach((terminal, index) => {
            setTimeout(() => {
                terminal.classList.add('animate-in');
            }, index * 200);
        });

        // Add typing effect to terminal content
        const terminalBodies = document.querySelectorAll('.terminal-body');
        terminalBodies.forEach(body => {
            const originalContent = body.innerHTML;
            body.innerHTML = '';

            let index = 0;
            const typeContent = () => {
                if (index < originalContent.length) {
                    body.innerHTML = originalContent.substring(0, index + 1);
                    index++;
                    setTimeout(typeContent, 50);
                }
            };

            // Start typing after element is visible
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(typeContent, 500);
                        observer.unobserve(entry.target);
                    }
                });
            });

            observer.observe(body);
        });
    }

    initializeNetworkVisualization() {
        const createNetworkViz = () => {
            const networkContainer = document.createElement('div');
            networkContainer.className = 'network-visualization';
            networkContainer.innerHTML = `
                <div class="network-node" style="top: 20%; left: 20%;"></div>
                <div class="network-node" style="top: 20%; left: 80%;"></div>
                <div class="network-node" style="top: 60%; left: 50%;"></div>
                <div class="network-node" style="top: 80%; left: 20%;"></div>
                <div class="network-node" style="top: 80%; left: 80%;"></div>
                <div class="network-connection" style="top: 20%; left: 20%; width: 60%; transform-origin: left center; transform: rotate(0deg);"></div>
                <div class="network-connection" style="top: 40%; left: 50%; width: 30%; transform-origin: left center; transform: rotate(45deg);"></div>
                <div class="network-connection" style="top: 60%; left: 20%; width: 60%; transform-origin: left center; transform: rotate(30deg);"></div>
            `;

            return networkContainer;
        };

        // Add network visualization to architecture sections
        const architectureSections = document.querySelectorAll('.architecture-diagram');
        architectureSections.forEach(section => {
            const networkViz = createNetworkViz();
            section.appendChild(networkViz);
        });
    }

    initializeCodingStats() {
        const stats = [
            { label: 'Java Expertise', value: '95%', progress: 95 },
            { label: 'Spring Boot', value: '92%', progress: 92 },
            { label: 'AWS Cloud', value: '88%', progress: 88 },
            { label: 'Microservices', value: '90%', progress: 90 },
            { label: 'System Design', value: '94%', progress: 94 },
            { label: 'Team Leadership', value: '85%', progress: 85 }
        ];

        const createStatsDisplay = () => {
            const statsContainer = document.createElement('div');
            statsContainer.className = 'coding-stats';

            stats.forEach(stat => {
                const statRow = document.createElement('div');
                statRow.className = 'stat-row';
                statRow.innerHTML = `
                    <span class="stat-label">${stat.label}</span>
                    <div class="stat-bar">
                        <div class="stat-progress" style="--progress: ${stat.progress}%;"></div>
                    </div>
                    <span class="stat-value">${stat.value}</span>
                `;
                statsContainer.appendChild(statRow);
            });

            return statsContainer;
        };

        // Add stats to skills section
        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            const statsDisplay = createStatsDisplay();
            skillsSection.appendChild(statsDisplay);
        }
    }

    initializeCodeEditor() {
        const createCodeEditor = () => {
            const editor = document.createElement('div');
            editor.className = 'code-editor';
            editor.innerHTML = `
                <div class="editor-header">
                    <div class="editor-tabs">
                        <div class="editor-tab active">Application.java</div>
                        <div class="editor-tab">Controller.java</div>
                        <div class="editor-tab">Service.java</div>
                    </div>
                    <div class="editor-actions">
                        <div class="editor-action close"></div>
                        <div class="editor-action minimize"></div>
                        <div class="editor-action maximize"></div>
                    </div>
                </div>
                <div class="editor-body">
                    <div class="code-line">
                        <span class="line-number">1</span>
                        <span class="code-keyword">package</span> <span class="code-string">com.sanjit.portfolio</span>;
                    </div>
                    <div class="code-line">
                        <span class="line-number">2</span>
                    </div>
                    <div class="code-line">
                        <span class="line-number">3</span>
                        <span class="code-keyword">@SpringBootApplication</span>
                    </div>
                    <div class="code-line">
                        <span class="line-number">4</span>
                        <span class="code-keyword">public class</span> <span class="code-function">SoftwareArchitectApplication</span> {
                    </div>
                    <div class="code-line">
                        <span class="line-number">5</span>
                        <span class="code-comment">    // Architecting scalable solutions</span>
                    </div>
                    <div class="code-line">
                        <span class="line-number">6</span>
                        <span class="code-keyword">    public static void</span> <span class="code-function">main</span>(<span class="code-variable">String[] args</span>) {
                    </div>
                    <div class="code-line">
                        <span class="line-number">7</span>
                        <span class="code-function">        SpringApplication.run</span>(<span class="code-variable">Application.class</span>, <span class="code-variable">args</span>);
                    </div>
                    <div class="code-line">
                        <span class="line-number">8</span>
                        }
                    </div>
                    <div class="code-line">
                        <span class="line-number">9</span>
                        }
                    </div>
                </div>
            `;
            return editor;
        };

        // Add code editor to about section
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            const editor = createCodeEditor();
            aboutSection.appendChild(editor);
        }
    }

    initializeArchitectureDiagram() {
        const createArchDiagram = () => {
            const diagram = document.createElement('div');
            diagram.className = 'architecture-diagram';
            diagram.innerHTML = `
                <div class="architecture-layer">
                    <div class="layer-title">Presentation Layer</div>
                    <div class="layer-tech">
                        <span class="tech-badge-glow">React</span>
                        <span class="tech-badge-glow">Angular</span>
                        <span class="tech-badge-glow">Vue.js</span>
                    </div>
                </div>
                <div class="architecture-layer">
                    <div class="layer-title">API Gateway</div>
                    <div class="layer-tech">
                        <span class="tech-badge-glow">Spring Gateway</span>
                        <span class="tech-badge-glow">Load Balancer</span>
                    </div>
                </div>
                <div class="architecture-layer">
                    <div class="layer-title">Microservices</div>
                    <div class="layer-tech">
                        <span class="tech-badge-glow">Spring Boot</span>
                        <span class="tech-badge-glow">Docker</span>
                        <span class="tech-badge-glow">Kubernetes</span>
                    </div>
                </div>
                <div class="architecture-layer">
                    <div class="layer-title">Data Layer</div>
                    <div class="layer-tech">
                        <span class="tech-badge-glow">PostgreSQL</span>
                        <span class="tech-badge-glow">Redis</span>
                        <span class="tech-badge-glow">MongoDB</span>
                    </div>
                </div>
            `;
            return diagram;
        };

        // Add architecture diagram to experience section
        const experienceSection = document.getElementById('experience');
        if (experienceSection) {
            const diagram = createArchDiagram();
            experienceSection.appendChild(diagram);
        }
    }

    initializeNavbarEffects() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        let lastScrollTop = 0;
        const scrollThreshold = 100;

        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Add scrolled effect
            navbar.classList.toggle('scrolled', scrollTop > 50);

            // Smart hide/show navbar
            if (scrollTop > scrollThreshold) {
                if (scrollTop > lastScrollTop && scrollTop > navbar.offsetHeight) {
                    navbar.style.transform = 'translateY(-100%)';
                } else {
                    navbar.style.transform = 'translateY(0)';
                }
            }

            lastScrollTop = scrollTop;
        };

        // Throttled scroll handler
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

    initializeSmoothScrolling() {
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });

                    // Update active nav link
                    navLinks.forEach(nl => nl.classList.remove('active'));
                    link.classList.add('active');
                }
            });
        });
    }

    initializeTypingAnimations() {
        const titles = [
            'Software Architect',
            'Java Expert',
            'Spring Boot Specialist',
            'Cloud Engineer',
            'Microservices Designer',
            'System Architect',
            'Tech Lead'
        ];

        const typingElement = document.querySelector('.typing-animation');
        if (!typingElement) return;

        let titleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const typeSpeed = 100;
        const deleteSpeed = 50;
        const pauseTime = 2000;

        const type = () => {
            const currentTitle = titles[titleIndex];

            if (isDeleting) {
                typingElement.textContent = currentTitle.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentTitle.substring(0, charIndex + 1);
                charIndex++;
            }

            let nextTimeout = isDeleting ? deleteSpeed : typeSpeed;

            if (!isDeleting && charIndex === currentTitle.length) {
                nextTimeout = pauseTime;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                titleIndex = (titleIndex + 1) % titles.length;
            }

            setTimeout(type, nextTimeout);
        };

        type();
    }

    initializeParticleSystem() {
        const particleContainer = document.createElement('canvas');
        particleContainer.id = 'particleCanvas';
        particleContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        `;
        document.body.appendChild(particleContainer);

        const canvas = particleContainer;
        const ctx = canvas.getContext('2d');

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Particle system
        const particles = [];
        const maxParticles = 50;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height + 10;
                this.vx = (Math.random() - 0.5) * 2;
                this.vy = -Math.random() * 3 - 1;
                this.size = Math.random() * 3 + 1;
                this.color = `rgba(0, 102, 204, ${Math.random() * 0.5 + 0.2})`;
                this.life = 1;
                this.decay = Math.random() * 0.01 + 0.005;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.life -= this.decay;
                this.vy -= 0.05; // gravity

                return this.life > 0 && this.y > -10;
            }

            draw() {
                ctx.save();
                ctx.globalAlpha = this.life;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Add new particles
            if (particles.length < maxParticles && Math.random() < 0.1) {
                particles.push(new Particle());
            }

            // Update and draw particles
            for (let i = particles.length - 1; i >= 0; i--) {
                const particle = particles[i];
                if (particle.update()) {
                    particle.draw();
                } else {
                    particles.splice(i, 1);
                }
            }

            requestAnimationFrame(animate);
        };

        animate();
    }

    initializeInteractiveElements() {
        // Enhanced hover effects for cards
        const cards = document.querySelectorAll('.professional-card, .tech-badge');

        cards.forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                card.style.transform = 'translateY(-8px) scale(1.02)';
                card.style.boxShadow = '0 20px 60px rgba(0, 102, 204, 0.2)';
            });

            card.addEventListener('mouseleave', (e) => {
                card.style.transform = '';
                card.style.boxShadow = '';
            });
        });

        // Tech badge glow effects
        const techBadges = document.querySelectorAll('.tech-badge-glow');
        techBadges.forEach(badge => {
            badge.addEventListener('click', () => {
                badge.style.animation = 'pulse 0.5s ease';
                setTimeout(() => {
                    badge.style.animation = '';
                }, 500);
            });
        });
    }

    initializePerformanceMonitoring() {
        // Monitor and display performance metrics
        const displayMetrics = () => {
            const nav = performance.getEntriesByType('navigation')[0];
            const loadTime = nav.loadEventEnd - nav.loadEventStart;

            console.log(`🚀 Portfolio loaded in ${loadTime.toFixed(2)}ms`);
            console.log('📊 Performance optimized for software engineering experience');
        };

        if (document.readyState === 'complete') {
            displayMetrics();
        } else {
            window.addEventListener('load', displayMetrics);
        }
    }

    // Enhanced Navigation Functionality - Fixed for Bootstrap Collapse
    initializeEnhancedNavigation() {
        console.log('🧭 Initializing enhanced navigation with Bootstrap collapse support...');

        this.setupScrollNavigation();
        this.setupBootstrapMobileNavigation(); // Updated method name
        this.setupSmoothScrolling();
        this.setupActiveSection();
        this.setupNavigationAnimations();
    }

    setupScrollNavigation() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        let lastScrollTop = 0;
        let scrollThreshold = 100;
        let isScrolling = false;

        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Add scrolled class
            if (scrollTop > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            // Smart hide/show navbar on larger screens
            if (!this.isMobile && scrollTop > scrollThreshold) {
                if (scrollTop > lastScrollTop && scrollTop > navbar.offsetHeight * 2) {
                    navbar.classList.add('navbar-hidden');
                    navbar.classList.remove('navbar-visible');
                } else {
                    navbar.classList.add('navbar-visible');
                    navbar.classList.remove('navbar-hidden');
                }
            } else {
                navbar.classList.remove('navbar-hidden', 'navbar-visible');
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
            isScrolling = false;
        };

        // Throttled scroll handler for performance
        window.addEventListener('scroll', () => {
            if (!isScrolling) {
                requestAnimationFrame(handleScroll);
                isScrolling = true;
            }
        }, { passive: true });
    }

    setupBootstrapMobileNavigation() {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

        if (!navbarToggler || !navbarCollapse) return;

        // Remove any conflicting event listeners
        navbarToggler.removeEventListener('click', this.mobileToggleHandler);

        // Let Bootstrap handle the basic toggle, but add our enhancements
        navbarToggler.addEventListener('click', (e) => {
            // Don't prevent default - let Bootstrap handle it
            const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';

            // Add/remove body class for scroll prevention if needed
            if (!isExpanded) {
                document.body.classList.add('navbar-open');
            } else {
                document.body.classList.remove('navbar-open');
            }

            // Update toggler state for our CSS animations
            setTimeout(() => {
                const newState = navbarToggler.getAttribute('aria-expanded') === 'true';
                if (newState) {
                    navbarToggler.classList.remove('collapsed');
                } else {
                    navbarToggler.classList.add('collapsed');
                }
            }, 10);
        });

        // Enhanced mobile menu close behavior
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 992) { // Only on mobile
                    // Use Bootstrap's collapse method
                    if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
                        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                            toggle: false
                        });
                        bsCollapse.hide();
                    } else {
                        // Fallback for if Bootstrap JS isn't loaded
                        navbarCollapse.classList.remove('show');
                        navbarToggler.classList.add('collapsed');
                        navbarToggler.setAttribute('aria-expanded', 'false');
                    }

                    // Clean up body class
                    document.body.classList.remove('navbar-open');
                }
            });
        });

        // Close mobile menu when clicking outside (only on mobile)
        document.addEventListener('click', (e) => {
            if (window.innerWidth < 992 &&
                !navbarToggler.contains(e.target) &&
                !navbarCollapse.contains(e.target) &&
                navbarCollapse.classList.contains('show')) {

                // Use Bootstrap's collapse method
                if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                        toggle: false
                    });
                    bsCollapse.hide();
                } else {
                    // Fallback
                    navbarCollapse.classList.remove('show');
                    navbarToggler.classList.add('collapsed');
                    navbarToggler.setAttribute('aria-expanded', 'false');
                }

                document.body.classList.remove('navbar-open');
            }
        });

        // Listen to Bootstrap collapse events for additional enhancements
        navbarCollapse.addEventListener('show.bs.collapse', () => {
            document.body.classList.add('navbar-open');
            navbarToggler.classList.remove('collapsed');
        });

        navbarCollapse.addEventListener('hide.bs.collapse', () => {
            document.body.classList.remove('navbar-open');
            navbarToggler.classList.add('collapsed');
        });

        // Handle window resize to ensure proper state
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 992) {
                // Desktop view - ensure mobile menu is closed and body class is removed
                document.body.classList.remove('navbar-open');
                navbarCollapse.classList.remove('show');
                navbarToggler.classList.add('collapsed');
                navbarToggler.setAttribute('aria-expanded', 'false');
            }
        });
    }

    setupSmoothScrolling() {
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    const navbar = document.querySelector('.navbar');
                    const navbarHeight = navbar ? navbar.offsetHeight : 0;
                    const offsetTop = targetSection.offsetTop - navbarHeight - 20;

                    // Smooth scroll with better performance
                    const startPosition = window.pageYOffset;
                    const distance = offsetTop - startPosition;
                    const duration = Math.min(Math.abs(distance) / 2, 800);
                    let start = null;

                    function step(timestamp) {
                        if (!start) start = timestamp;
                        const progress = timestamp - start;
                        const percentage = Math.min(progress / duration, 1);

                        // Easing function for smooth animation
                        const easeInOutCubic = percentage < 0.5
                            ? 4 * percentage * percentage * percentage
                            : (percentage - 1) * (2 * percentage - 2) * (2 * percentage - 2) + 1;

                        window.scrollTo(0, startPosition + distance * easeInOutCubic);

                        if (progress < duration) {
                            requestAnimationFrame(step);
                        }
                    }

                    requestAnimationFrame(step);
                }
            });
        });
    }

    setupActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

        if (!sections.length || !navLinks.length) return;

        const observerOptions = {
            rootMargin: '-20% 0px -75% 0px',
            threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]
        };

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;

                    // Remove active class from all nav links
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                    });

                    // Add active class to corresponding nav link
                    const activeLink = document.querySelector(`.navbar-nav .nav-link[href="#${sectionId}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            sectionObserver.observe(section);
        });

        // Store observer for cleanup
        this.observers.set('navigation', sectionObserver);
    }

    setupNavigationAnimations() {
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        const navbar = document.querySelector('.navbar');

        // Add staggered animation to nav links on page load
        navLinks.forEach((link, index) => {
            link.style.opacity = '0';
            link.style.transform = 'translateY(-10px)';

            setTimeout(() => {
                link.style.transition = 'all 0.3s ease';
                link.style.opacity = '1';
                link.style.transform = 'translateY(0)';
            }, 100 + (index * 50));
        });

        // Enhanced hover effects for desktop
        if (!this.isMobile) {
            navLinks.forEach(link => {
                link.addEventListener('mouseenter', () => {
                    link.style.transform = 'translateY(-2px)';
                });

                link.addEventListener('mouseleave', () => {
                    link.style.transform = 'translateY(0)';
                });
            });
        }

        // Loading state for navigation
        const showLoadingState = () => {
            navbar.classList.add('loading');
            setTimeout(() => {
                navbar.classList.remove('loading');
            }, 1000);
        };

        // Show loading state on page transitions
        navLinks.forEach(link => {
            link.addEventListener('click', showLoadingState);
        });
    }

    // Public API methods
    triggerCodeAnimation(element) {
        if (!element) return;

        element.style.animation = 'none';
        setTimeout(() => {
            element.style.animation = 'typewriter 2s steps(40, end), blinkCursor 0.75s step-end infinite';
        }, 10);
    }

    updateStats(newStats) {
        const statElements = document.querySelectorAll('.stat-progress');
        statElements.forEach((stat, index) => {
            if (newStats[index]) {
                stat.style.setProperty('--progress', newStats[index].progress + '%');
            }
        });
    }

    destroy() {
        // Clean up all animations and observers
        this.animations.clear();
        this.observers.forEach(observer => observer.disconnect());
        this.observers.clear();

        // Remove created elements
        const createdElements = document.querySelectorAll(
            '.circuit-background, .matrix-rain, .binary-background, #particleCanvas'
        );
        createdElements.forEach(el => el.remove());

        this.isInitialized = false;
        console.log('🔧 Software Engineering Portfolio cleaned up');
    }
}

// Initialize the portfolio
const softwarePortfolio = new SoftwareEngineeringPortfolio();

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }

    @keyframes animate-in {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .animate-in {
        animation: animate-in 0.6s ease forwards;
    }

    .navbar {
        transition: transform 0.3s ease, background-color 0.3s ease;
    }

    .navbar.scrolled {
        background-color: rgba(255, 255, 255, 0.95) !important;
        backdrop-filter: blur(10px);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }
`;
document.head.appendChild(style);

// Export for external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SoftwareEngineeringPortfolio;
}

console.log('🎯 Software Engineering Portfolio JavaScript loaded successfully!');
