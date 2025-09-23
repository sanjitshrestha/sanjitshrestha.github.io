/**
 * Software Engineering Portfolio - Advanced Interactive Effects
 * Author: Sanjit Shrestha
 * Version: 3.0 - Enhanced Software Engineering Experience
 */

class SoftwareEngineeringPortfolio {
    constructor() {
        this.isInitialized = false;
        this.animations = new Map();
        this.observers = new Map();
        this.particles = [];
        this.matrixColumns = [];
        this.networkNodes = [];
        this.init();
    }

    init() {
        if (this.isInitialized) return;

        console.log('🚀 Initializing Software Engineering Portfolio v3.0...');

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeAll());
        } else {
            this.initializeAll();
        }

        this.isInitialized = true;
    }

    initializeAll() {
        console.log('⚡ Loading software engineering components...');

        this.createSoftwareBackground();
        this.initializeMatrixRain();
        this.initializeBinaryBackground();
        this.initializeFloatingCode();
        this.initializeTerminalEffects();
        this.initializeNetworkVisualization();
        this.initializeCodingStats();
        this.initializeCodeEditor();
        this.initializeArchitectureDiagram();
        this.initializeNavbarEffects();
        this.initializeSmoothScrolling();
        this.initializeTypingAnimations();
        this.initializeParticleSystem();
        this.initializeInteractiveElements();
        this.initializePerformanceMonitoring();

        console.log('✨ Software Engineering Portfolio fully loaded!');
    }

    createSoftwareBackground() {
        // Create circuit board background
        const circuitBg = document.createElement('div');
        circuitBg.className = 'circuit-background';
        document.body.appendChild(circuitBg);

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

    initializeMatrixRain() {
        const matrixContainer = document.getElementById('matrixRain');
        if (!matrixContainer) return;

        const createMatrixColumn = () => {
            const column = document.createElement('div');
            column.className = 'matrix-column';

            // Generate random matrix characters
            const chars = '01ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ';
            let text = '';
            for (let i = 0; i < 20; i++) {
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

        // Create matrix columns continuously
        setInterval(createMatrixColumn, 300);
    }

    initializeBinaryBackground() {
        const binaryContainer = document.getElementById('binaryBackground');
        if (!binaryContainer) return;

        const createBinaryString = () => {
            const binary = document.createElement('div');
            binary.className = 'binary-string';

            // Generate random binary string
            let binaryText = '';
            for (let i = 0; i < 50; i++) {
                binaryText += Math.random() > 0.5 ? '1' : '0';
                if (i % 8 === 7) binaryText += ' ';
            }
            binary.textContent = binaryText;

            binary.style.top = Math.random() * 100 + '%';
            binary.style.animationDelay = Math.random() * 10 + 's';
            binary.style.animationDuration = (15 + Math.random() * 10) + 's';

            binaryContainer.appendChild(binary);

            setTimeout(() => {
                if (binary.parentNode) {
                    binary.parentNode.removeChild(binary);
                }
            }, 25000);
        };

        setInterval(createBinaryString, 2000);
    }

    initializeFloatingCode() {
        // Ensure magicParticles container exists
        let magicContainer = document.getElementById('magicParticles');
        if (!magicContainer) {
            magicContainer = document.createElement('div');
            magicContainer.className = 'magic-particles';
            magicContainer.id = 'magicParticles';
            magicContainer.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: -1;
                overflow: hidden;
            `;
            document.body.appendChild(magicContainer);
        }

        const modernTechStack = [
            // Backend & Languages
            { text: 'Java 17+', category: 'java' },
            { text: 'Spring Boot', category: 'spring' },
            { text: 'Kotlin', category: 'java' },
            { text: 'TypeScript', category: 'frontend' },
            { text: 'Python', category: 'ai' },
            { text: 'Go', category: 'devops' },
            { text: 'Rust', category: 'java' },

            // Cloud & Infrastructure
            { text: 'AWS Lambda', category: 'cloud' },
            { text: 'Kubernetes', category: 'devops' },
            { text: 'Docker', category: 'devops' },
            { text: 'Terraform', category: 'devops' },
            { text: 'Microservices', category: 'cloud' },
            { text: 'Serverless', category: 'cloud' },
            { text: 'GraphQL', category: 'frontend' },

            // AI & Modern Tech
            { text: 'ChatGPT API', category: 'ai' },
            { text: 'OpenAI', category: 'ai' },
            { text: 'Machine Learning', category: 'ai' },
            { text: 'TensorFlow', category: 'ai' },
            { text: 'Neural Networks', category: 'ai' },
            { text: 'LLM Integration', category: 'ai' },

            // Frontend Modern
            { text: 'React 18', category: 'frontend' },
            { text: 'Next.js', category: 'frontend' },
            { text: 'Vue 3', category: 'frontend' },
            { text: 'Svelte', category: 'frontend' },
            { text: 'Tailwind CSS', category: 'frontend' },

            // Databases & Data
            { text: 'PostgreSQL', category: 'database' },
            { text: 'MongoDB', category: 'database' },
            { text: 'Redis', category: 'database' },
            { text: 'Elasticsearch', category: 'database' },
            { text: 'Apache Kafka', category: 'database' },
            { text: 'Vector DB', category: 'database' },

            // DevOps & Modern Tools
            { text: 'GitHub Actions', category: 'devops' },
            { text: 'GitLab CI/CD', category: 'devops' },
            { text: 'Jenkins', category: 'devops' },
            { text: 'Prometheus', category: 'devops' },
            { text: 'Grafana', category: 'devops' },
            { text: 'Istio', category: 'devops' },

            // Cloud Platforms
            { text: 'AWS EKS', category: 'cloud' },
            { text: 'Azure', category: 'cloud' },
            { text: 'GCP', category: 'cloud' },
            { text: 'Vercel', category: 'cloud' },
            { text: 'Cloudflare', category: 'cloud' },

            // Modern Frameworks
            { text: 'Spring WebFlux', category: 'spring' },
            { text: 'Quarkus', category: 'java' },
            { text: 'Micronaut', category: 'java' },
            { text: 'FastAPI', category: 'ai' },
            { text: 'gRPC', category: 'java' }
        ];

        const createTechParticle = () => {
            const container = document.getElementById('magicParticles');
            if (!container) {
                console.warn('Magic particles container not found');
                return;
            }

            const tech = modernTechStack[Math.floor(Math.random() * modernTechStack.length)];
            const particle = document.createElement('div');
            particle.className = `tech-particle ${tech.category}`;
            particle.textContent = tech.text;

            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 2 + 's';
            particle.style.animationDuration = (8 + Math.random() * 6) + 's';

            container.appendChild(particle);

            // Debug log
            console.log(`Created tech particle: ${tech.text} (${tech.category})`);

            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 15000);
        };

        // Create tech particles continuously
        const particleInterval = setInterval(createTechParticle, 600);

        // Create initial burst
        for (let i = 0; i < 8; i++) {
            setTimeout(createTechParticle, i * 150);
        }

        // Store interval for cleanup
        this.animations.set('techParticles', particleInterval);
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
