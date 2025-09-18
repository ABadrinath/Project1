// Simple, stable portfolio JavaScript
class Portfolio {
    constructor() {
        this.activeTab = 'home';
        this.skillsAnimated = false;
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupSkillAnimations();
        this.setupHoverEffects();
        this.setupButtonInteractions();
        this.setupSmoothScrolling();
        console.log('Portfolio initialized successfully');
    }

    // Tab Navigation System
    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetTab = link.getAttribute('data-tab');
                
                if (targetTab && targetTab !== this.activeTab) {
                    this.switchTab(targetTab);
                }
            });
        });
    }

    switchTab(targetTab) {
        try {
            // Hide all tabs
            const allTabs = document.querySelectorAll('.tab-content');
            allTabs.forEach(tab => {
                tab.classList.remove('active');
                tab.style.display = 'none';
                tab.style.opacity = '0';
            });

            // Show target tab
            const newTab = document.getElementById(targetTab);
            if (newTab) {
                newTab.style.display = 'block';
                // Use setTimeout to ensure display change takes effect before opacity
                setTimeout(() => {
                    newTab.classList.add('active');
                    newTab.style.opacity = '1';
                    newTab.classList.add('fade-in');
                    
                    // Remove fade-in class after animation
                    setTimeout(() => {
                        newTab.classList.remove('fade-in');
                    }, 300);
                }, 10);
                
                // Trigger skill animations if skills tab
                if (targetTab === 'skills' && !this.skillsAnimated) {
                    setTimeout(() => this.animateSkills(), 200);
                }
            }

            // Update navigation active state
            const allNavLinks = document.querySelectorAll('.nav-link');
            allNavLinks.forEach(nav => nav.classList.remove('active'));
            
            const activeLinks = document.querySelectorAll(`[data-tab="${targetTab}"]`);
            activeLinks.forEach(nav => nav.classList.add('active'));

            this.activeTab = targetTab;
            console.log('Switched to tab:', targetTab);
            
        } catch (error) {
            console.error('Error switching tabs:', error);
        }
    }

    // Skill Bar Animations
    setupSkillAnimations() {
        // Use Intersection Observer for better performance
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.skillsAnimated) {
                    setTimeout(() => this.animateSkills(), 100);
                }
            });
        }, { threshold: 0.3 });

        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            observer.observe(skillsSection);
        }
    }

    animateSkills() {
        try {
            const skillBars = document.querySelectorAll('.skill-progress');
            
            skillBars.forEach((bar, index) => {
                const width = bar.getAttribute('data-width');
                if (width) {
                    setTimeout(() => {
                        bar.style.width = width + '%';
                        bar.parentElement.parentElement.classList.add('fade-in');
                    }, index * 150);
                }
            });

            this.skillsAnimated = true;
            console.log('Skills animated successfully');
        } catch (error) {
            console.error('Error animating skills:', error);
        }
    }

    // Simple hover effects
    setupHoverEffects() {
        // Profile image hover effect
        const profileImage = document.querySelector('.profile-image');
        if (profileImage) {
            profileImage.addEventListener('mouseenter', () => {
                profileImage.style.transform = 'scale(1.05)';
            });

            profileImage.addEventListener('mouseleave', () => {
                profileImage.style.transform = 'scale(1)';
            });
        }

        // Card hover effects
        const cards = document.querySelectorAll('.skill-card, .interest-card, .project-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                this.addHoverEffect(card);
            });

            card.addEventListener('mouseleave', () => {
                this.removeHoverEffect(card);
            });
        });
    }

    addHoverEffect(element) {
        try {
            element.style.transform = 'translateY(-4px)';
            element.style.boxShadow = 'var(--shadow-lg)';
        } catch (error) {
            console.error('Error adding hover effect:', error);
        }
    }

    removeHoverEffect(element) {
        try {
            element.style.transform = 'translateY(0)';
            element.style.boxShadow = 'var(--shadow-sm)';
        } catch (error) {
            console.error('Error removing hover effect:', error);
        }
    }

    // Button interactions
    setupButtonInteractions() {
        // Project buttons
        const projectButtons = document.querySelectorAll('.project-btn');
        projectButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.handleProjectButton(e, btn);
            });

            // Button hover effects
            btn.addEventListener('mouseenter', () => {
                if (btn.classList.contains('primary-btn')) {
                    btn.style.transform = 'translateY(-2px)';
                    btn.style.boxShadow = 'var(--shadow-md)';
                }
            });

            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translateY(0)';
                btn.style.boxShadow = 'none';
            });
        });

        // Add simple ripple effect
        const allButtons = document.querySelectorAll('button, .nav-link');
        allButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.createRipple(e, button);
            });
        });
    }

    handleProjectButton(e, btn) {
        try {
            e.preventDefault();
            
            // Get project info
            const projectCard = btn.closest('.project-card');
            const projectIndex = projectCard ? projectCard.getAttribute('data-project') : '0';
            const isDemo = btn.classList.contains('secondary-btn');
            
            // Simple alert for demo purposes
            const projectName = projectCard.querySelector('h3').textContent;
            
            // Add visual feedback
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 150);
            
            if (isDemo) {
                alert(`🚀 Demo for "${projectName}" would open here!\n\nThis would typically link to a live hosted version of the project.`);
            } else {
                alert(`📋 Project Details: "${projectName}"\n\nKey Features:\n• Responsive design\n• Clean code architecture\n• User-friendly interface\n• Modern web technologies\n\nThis would typically open a detailed project modal or page.`);
            }
            
        } catch (error) {
            console.error('Error handling project button:', error);
        }
    }

    // Simple ripple effect
    createRipple(e, element) {
        try {
            const ripple = document.createElement('span');
            const rect = element.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple 0.6s linear;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
                z-index: 10;
            `;

            // Ensure element can contain the ripple
            const originalPosition = element.style.position;
            const originalOverflow = element.style.overflow;
            
            element.style.position = element.style.position || 'relative';
            element.style.overflow = 'hidden';
            element.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
                if (!originalPosition) element.style.position = '';
                if (!originalOverflow) element.style.overflow = '';
            }, 600);

        } catch (error) {
            console.error('Error creating ripple effect:', error);
        }
    }

    // Smooth scrolling
    setupSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href && href !== '#') {
                    const target = document.querySelector(href);
                    if (target) {
                        e.preventDefault();
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }
}

// Animation utilities
class AnimationUtils {
    static fadeIn(element, duration = 300) {
        if (!element) return;
        
        element.style.opacity = '0';
        element.style.transition = `opacity ${duration}ms ease-in-out`;
        
        setTimeout(() => {
            element.style.opacity = '1';
        }, 10);
    }

    static slideIn(element, direction = 'up', duration = 300) {
        if (!element) return;
        
        const transforms = {
            up: 'translateY(20px)',
            down: 'translateY(-20px)',
            left: 'translateX(20px)',
            right: 'translateX(-20px)'
        };

        element.style.transform = transforms[direction] || transforms.up;
        element.style.opacity = '0';
        element.style.transition = `all ${duration}ms ease-out`;

        setTimeout(() => {
            element.style.transform = 'translate(0)';
            element.style.opacity = '1';
        }, 10);
    }

    static pulse(element, scale = 1.05, duration = 200) {
        if (!element) return;
        
        const originalTransform = element.style.transform;
        element.style.transition = `transform ${duration}ms ease-out`;
        element.style.transform = `scale(${scale})`;

        setTimeout(() => {
            element.style.transform = originalTransform;
        }, duration);
    }
}

// Scroll-based animations
class ScrollAnimations {
    constructor() {
        this.observer = new IntersectionObserver(
            (entries) => this.handleIntersection(entries),
            { threshold: 0.1, rootMargin: '50px' }
        );
        this.init();
    }

    init() {
        const animatedElements = document.querySelectorAll(
            '.intro-content, .education-card, .skill-card, .project-card, .interest-card, .contact-section'
        );
        
        animatedElements.forEach(el => {
            this.observer.observe(el);
        });
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                this.observer.unobserve(entry.target);
            }
        });
    }
}

// Error handling wrapper
function safeExecute(fn, errorMessage = 'An error occurred') {
    try {
        return fn();
    } catch (error) {
        console.error(errorMessage, error);
        return null;
    }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    safeExecute(() => {
        // Initialize main portfolio functionality
        window.portfolio = new Portfolio(); // Make globally accessible for debugging
        
        // Initialize scroll animations
        const scrollAnimations = new ScrollAnimations();
        
        // Add CSS for animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
            
            .tab-content {
                transition: opacity 0.3s ease-in-out;
            }
        `;
        document.head.appendChild(style);
        
        // Force initial state
        setTimeout(() => {
            const homeTab = document.getElementById('home');
            if (homeTab) {
                homeTab.style.display = 'block';
                homeTab.style.opacity = '1';
                homeTab.classList.add('active');
            }
            
            // Hide other tabs initially
            const otherTabs = document.querySelectorAll('.tab-content:not(#home)');
            otherTabs.forEach(tab => {
                tab.style.display = 'none';
                tab.style.opacity = '0';
                tab.classList.remove('active');
            });
        }, 100);
        
        console.log('All portfolio features initialized successfully!');
        
    }, 'Failed to initialize portfolio');
});

// Handle any uncaught errors gracefully
window.addEventListener('error', (e) => {
    console.error('Global error caught:', e.error);
});

// Prevent common navigation issues
window.addEventListener('beforeunload', () => {
    console.log('Page unloading - cleaning up...');
});