document.addEventListener('DOMContentLoaded', function() {
    // ===== LANGUAGE TRANSLATIONS =====
    const translations = {
        en: {
            // Navigation
            "nav-home": "Home",
            "nav-services": "Services",
            "nav-about": "About us",
            "nav-contact": "Contact",
            
            // Hero Section
            "hero-title": "Grow your<br>business with<br><span>Pixel Brew</span>",
            "hero-text": "At Pixel Brew, we craft innovative software solutions designed to fuel your business growth. From custom applications to seamless integrations, our team is dedicated to turning your ideas into powerful tools that drive success. Let's brew the perfect digital strategy for your business, because your growth is our mission.",
            
            // Contact Engineers Section
            "engineers-title": "Contact real engineers",
            "engineers-text": "At Pixel Brew, you don't just get software—you get direct access to real engineers who understand your vision. Our team of skilled professionals is here to build tailored solutions, solve complex challenges, and bring your ideas to life. No middlemen, no fluff—just expert engineering and results you can count on. Let's create something extraordinary together.",
            "contact-btn": "Contact us",
            
            // Services Section
            "services-title": "Our Products & Services",
            "service-1-title": "Custom Business Control Systems",
            "service-1-text": "Take control of your operations with tailor-made systems that optimize your business processes. From inventory management to advanced web-built systems that grow with you.",
            "service-2-title": "Mobile App Development",
            "service-2-text": "Take control of your operations with tailor-made software designed to manage and streamline your business processes. From inventory tracking to workflow automation, we build systems that grow with you.",
            "service-3-title": "Web Development & Design",
            "service-3-text": "Establish your online presence with custom websites and web applications. We combine stunning visuals with powerful functionality to create platforms that captivate and convert.",
            "service-4-title": "Software Integration Services",
            "service-4-text": "Connect your business tools and systems with our expert integration services. We ensure your software ecosystem works harmoniously, saving you time and resources.",
            "service-5-title": "Cloud Solutions & DevOps",
            "service-5-text": "Scale your business with secure, scalable cloud-based solutions. From cloud migration to DevOps implementation, we help you harness the power of modern technology.",
            "service-6-title": "Maintenance & Support",
            "service-6-text": "Our relationship doesn't end at launch. We offer ongoing maintenance and support to ensure your systems run smoothly and stay up-to-date with the latest advancements.",
            
            // About Section
            "about-title": "About us",
            "about-text": "At Pixel Brew, we are a passionate team of engineers and technology enthusiasts with extensive experience across various sectors of software development. From startups to established enterprises, we've honed our skills to deliver innovative, reliable, and scalable solutions that empower businesses to thrive in a digital world.",
            "mission-title": "Our mission",
            "mission-text": "To empower businesses by crafting bespoke software solutions that drive efficiency, innovation, and growth. We are committed to turning complex challenges into seamless, user-friendly experiences that make a lasting impact.",
            "vision-title": "Our vision",
            "vision-text": "To be a trusted global leader in software development, known for our technical expertise, creativity, and dedication to helping businesses unlock their full potential through technology.",
            
            // Why Choose Us Section
            "why-choose-title": "Why Choose Pixel Brew?",
            "reason-1-title": "Expert Team",
            "reason-1-text": "Our engineers bring diverse expertise and a shared passion for solving complex problems.",
            "reason-2-title": "Tailored Solutions",
            "reason-2-text": "We don't believe in one-size-fits-all. We're committed to customized solutions for your unique needs.",
            "reason-3-title": "End-to-End Support",
            "reason-3-text": "From ideation to deployment and beyond, we're with you every step of the way.",
            "reason-4-title": "Proven Results",
            "reason-4-text": "Our track record speaks for itself, with successful projects and satisfied clients across industries.",
            "tagline": "At Pixel Brew, we're more than just a software development company—we're your partners in innovation. <span class='highlight'>Let's build the future together!</span>",
            
            // Contact Information Section
            "address-dr-title": "Address in Dominican Republic",
            "address-us-title": "Address in United States",
            "contact-info-title": "Contact Info",
            
            // Footer
            "footer-text": "© 2025 Copyright | All Rights Reserved by Pixel Brew LLC."
        },
        es: {
            // Navigation
            "nav-home": "Inicio",
            "nav-services": "Servicios",
            "nav-about": "Nosotros",
            "nav-contact": "Contacto",
            
            // Hero Section
            "hero-title": "Haz crecer<br>tu negocio con<br><span>Pixel Brew</span>",
            "hero-text": "En Pixel Brew, creamos soluciones de software innovadoras diseñadas para impulsar el crecimiento de tu negocio. Desde aplicaciones personalizadas hasta integraciones fluidas, nuestro equipo está dedicado a convertir tus ideas en herramientas poderosas que impulsen el éxito. Creemos la estrategia digital perfecta para tu negocio, porque tu crecimiento es nuestra misión.",
            
            // Contact Engineers Section
            "engineers-title": "Contacta con ingenieros reales",
            "engineers-text": "En Pixel Brew, no solo obtienes software—obtienes acceso directo a ingenieros reales que entienden tu visión. Nuestro equipo de profesionales capacitados está aquí para construir soluciones a medida, resolver desafíos complejos y dar vida a tus ideas. Sin intermediarios, sin adornos—solo ingeniería experta y resultados con los que puedes contar. Creemos algo extraordinario juntos.",
            "contact-btn": "Contáctanos",
            
            // Services Section
            "services-title": "Nuestros Productos y Servicios",
            "service-1-title": "Sistemas de Control Empresarial Personalizados",
            "service-1-text": "Toma el control de tus operaciones con sistemas hechos a medida que optimizan tus procesos de negocio. Desde gestión de inventario hasta sistemas web avanzados que crecen contigo.",
            "service-2-title": "Desarrollo de Aplicaciones Móviles",
            "service-2-text": "Toma el control de tus operaciones con software a medida diseñado para gestionar y optimizar tus procesos de negocio. Desde seguimiento de inventario hasta automatización de flujos de trabajo, construimos sistemas que crecen contigo.",
            "service-3-title": "Desarrollo Web y Diseño",
            "service-3-text": "Establece tu presencia en línea con sitios web personalizados y aplicaciones web. Combinamos visuales impactantes con funcionalidad potente para crear plataformas que cautivan y convierten.",
            "service-4-title": "Servicios de Integración de Software",
            "service-4-text": "Conecta tus herramientas y sistemas de negocio con nuestros servicios de integración expertos. Nos aseguramos de que tu ecosistema de software funcione armoniosamente, ahorrándote tiempo y recursos.",
            "service-5-title": "Soluciones en la Nube y DevOps",
            "service-5-text": "Escala tu negocio con soluciones en la nube seguras y escalables. Desde migración a la nube hasta implementación de DevOps, te ayudamos a aprovechar el poder de la tecnología moderna.",
            "service-6-title": "Mantenimiento y Soporte",
            "service-6-text": "Nuestra relación no termina con el lanzamiento. Ofrecemos mantenimiento y soporte continuos para garantizar que tus sistemas funcionen sin problemas y se mantengan actualizados con los últimos avances.",
            
            // About Section
            "about-title": "Acerca de nosotros",
            "about-text": "En Pixel Brew, somos un equipo apasionado de ingenieros y entusiastas de la tecnología con amplia experiencia en diversos sectores del desarrollo de software. Desde startups hasta empresas establecidas, hemos perfeccionado nuestras habilidades para ofrecer soluciones innovadoras, confiables y escalables que permiten a las empresas prosperar en un mundo digital.",
            "mission-title": "Nuestra misión",
            "mission-text": "Empoderar a las empresas mediante la creación de soluciones de software a medida que impulsan la eficiencia, la innovación y el crecimiento. Estamos comprometidos a convertir desafíos complejos en experiencias fluidas y fáciles de usar que generen un impacto duradero.",
            "vision-title": "Nuestra visión",
            "vision-text": "Ser un líder global de confianza en desarrollo de software, conocido por nuestra experiencia técnica, creatividad y dedicación para ayudar a las empresas a desbloquear todo su potencial a través de la tecnología.",
            
            // Why Choose Us Section
            "why-choose-title": "¿Por qué elegir Pixel Brew?",
            "reason-1-title": "Equipo Experto",
            "reason-1-text": "Nuestros ingenieros aportan experiencia diversa y una pasión compartida por resolver problemas complejos.",
            "reason-2-title": "Soluciones a Medida",
            "reason-2-text": "No creemos en soluciones universales. Estamos comprometidos con soluciones personalizadas para tus necesidades únicas.",
            "reason-3-title": "Soporte de Principio a Fin",
            "reason-3-text": "Desde la ideación hasta la implementación y más allá, estamos contigo en cada paso del camino.",
            "reason-4-title": "Resultados Probados",
            "reason-4-text": "Nuestro historial habla por sí mismo, con proyectos exitosos y clientes satisfechos en diversas industrias.",
            "tagline": "En Pixel Brew, somos más que solo una empresa de desarrollo de software—somos tus socios en innovación. <span class='highlight'>¡Construyamos el futuro juntos!</span>",
            
            // Contact Information Section
            "address-dr-title": "Dirección en República Dominicana",
            "address-us-title": "Dirección en Estados Unidos",
            "contact-info-title": "Información de Contacto",
            
            // Footer
            "footer-text": "© 2025 Copyright | Todos los Derechos Reservados por Pixel Brew LLC."
        }
    };

    // ===== INITIALIZATION =====
    function init() {
        // Set up section IDs for navigation
        setupSectionIds();
        
        // Set up translation system
        setupTranslationAttributes();
        setupLanguageSelector();
        
        // Initialize language based on saved preference
        const savedLanguage = localStorage.getItem('language') || 'en';
        changeLanguage(savedLanguage);
        
        // Set up scroll animations
        setupScrollAnimations();
        
        // Set up navigation
        setupSmoothScrolling();
        
        // Set up button hover effects
        setupButtonEffects();
        
        // Initialize active nav state
        setActiveNavItem();
        
        // Listen for scroll events to update active nav
        window.addEventListener('scroll', function() {
            animateOnScroll();
            setActiveNavItem();
        });
    }

    // ===== SECTION IDS FOR NAVIGATION =====
    function setupSectionIds() {
        // Add IDs to main sections if they don't have them
        const sections = [
            { selector: '.hero', id: 'home' },
            { selector: '.services', id: 'services' },
            { selector: '.about-section', id: 'about' },
            { selector: '.contact-info', id: 'contact' }
        ];
        
        sections.forEach(section => {
            const element = document.querySelector(section.selector);
            if (element && !element.id) {
                element.id = section.id;
            }
        });
    }

    // ===== NAVIGATION FUNCTIONALITY =====
    function setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Get header height for offset
                    const headerHeight = document.querySelector('header').offsetHeight;
                    
                    window.scrollTo({
                        top: targetElement.offsetTop - headerHeight,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    function setActiveNavItem() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY;
        
        // Get header height for offset calculation
        const headerHeight = document.querySelector('header').offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100; // 100px buffer
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all nav items
                document.querySelectorAll('nav ul li a').forEach(item => {
                    item.classList.remove('active');
                });
                
                // Add active class to current section's nav item
                const activeNavItem = document.querySelector(`nav ul li a[href="#${sectionId}"]`);
                if (activeNavItem) {
                    activeNavItem.classList.add('active');
                }
            }
        });
    }

    // ===== TRANSLATION FUNCTIONALITY =====
    function setupTranslationAttributes() {
        // Navigation
        document.querySelectorAll('nav ul li a').forEach((el, index) => {
            const keys = ["nav-home", "nav-services", "nav-about", "nav-contact"];
            el.setAttribute('data-lang-key', keys[index]);
        });

        // Hero Section
        document.querySelector('.hero-content h1').setAttribute('data-lang-key', 'hero-title');
        document.querySelector('.hero-content p').setAttribute('data-lang-key', 'hero-text');

        // Contact Engineers Section
        document.querySelector('.contact-engineers-content h2').setAttribute('data-lang-key', 'engineers-title');
        document.querySelector('.contact-engineers-content p').setAttribute('data-lang-key', 'engineers-text');
        document.querySelector('.contact-btn').setAttribute('data-lang-key', 'contact-btn');

        // Services Section
        document.querySelector('.services h2').setAttribute('data-lang-key', 'services-title');
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach((card, index) => {
            card.querySelector('h3').setAttribute('data-lang-key', `service-${index+1}-title`);
            card.querySelector('p').setAttribute('data-lang-key', `service-${index+1}-text`);
        });

        // About Section
        document.querySelector('.section-title').setAttribute('data-lang-key', 'about-title');
        document.querySelector('.about-text').setAttribute('data-lang-key', 'about-text');
        document.querySelector('.mission-title').setAttribute('data-lang-key', 'mission-title');
        document.querySelector('.mission-text').setAttribute('data-lang-key', 'mission-text');
        document.querySelector('.vision-title').setAttribute('data-lang-key', 'vision-title');
        document.querySelector('.vision-text').setAttribute('data-lang-key', 'vision-text');

        // Why Choose Us Section
        document.querySelector('.why-choose h2').setAttribute('data-lang-key', 'why-choose-title');
        const reasons = document.querySelectorAll('.reason');
        reasons.forEach((reason, index) => {
            reason.querySelector('h4').setAttribute('data-lang-key', `reason-${index+1}-title`);
            reason.querySelector('p').setAttribute('data-lang-key', `reason-${index+1}-text`);
        });
        document.querySelector('.why-choose-tagline p').setAttribute('data-lang-key', 'tagline');

        // Contact Information Section
        const contactCards = document.querySelectorAll('.contact-card h3');
        contactCards[0].setAttribute('data-lang-key', 'address-dr-title');
        contactCards[1].setAttribute('data-lang-key', 'address-us-title');
        contactCards[2].setAttribute('data-lang-key', 'contact-info-title');

        // Footer
        document.querySelector('footer p').setAttribute('data-lang-key', 'footer-text');
    }

    function setupLanguageSelector() {
        // Update the HTML to include the dropdown if it doesn't exist
        const languageToggle = document.querySelector('.language-selector');
        if (languageToggle) {
            languageToggle.id = 'language-toggle';
            
            // Check if dropdown exists
            if (!languageToggle.querySelector('.language-dropdown')) {
                const currentText = languageToggle.innerHTML;
                languageToggle.innerHTML = `
                    <span data-lang="en">${currentText}</span>
                    <div class="language-dropdown">
                        <div class="language-option" data-language="en">🇺🇸 English</div>
                        <div class="language-option" data-language="es">🇪🇸 Español</div>
                    </div>
                `;
            }
            
            // Toggle dropdown on click
            languageToggle.addEventListener('click', function() {
                this.classList.toggle('active');
            });
            
            // Handle language selection
            document.querySelectorAll('.language-option').forEach(option => {
                option.addEventListener('click', function() {
                    const language = this.getAttribute('data-language');
                    changeLanguage(language);
                    languageToggle.classList.remove('active');
                });
            });
            
            // Close dropdown when clicking outside
            document.addEventListener('click', function(event) {
                if (!languageToggle.contains(event.target)) {
                    languageToggle.classList.remove('active');
                }
            });
        }
    }

    function changeLanguage(language) {
        // Store the user's language preference
        localStorage.setItem('language', language);
        
        // Update the language display in the selector
        const toggleSpan = document.querySelector('#language-toggle > span');
        if (toggleSpan) {
            toggleSpan.textContent = language === 'en' ? '🇺🇸 English' : '🇪🇸 Español';
            toggleSpan.setAttribute('data-lang', language);
        }
        
        // Update all translatable elements
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[language][key]) {
                element.innerHTML = translations[language][key];
            }
        });
        
        // Update the HTML lang attribute
        document.documentElement.lang = language;
    }

    // ===== ANIMATION FUNCTIONALITY =====
    function setupScrollAnimations() {
        const serviceCards = document.querySelectorAll('.service-card');
        const valueCards = document.querySelectorAll('.value-card');
        const reasonItems = document.querySelectorAll('.reason');
        
        // Set initial states for animations
        serviceCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
        
        valueCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
        
        reasonItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-30px)';
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
    }

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }
    
    function animateOnScroll() {
        const serviceCards = document.querySelectorAll('.service-card');
        const valueCards = document.querySelectorAll('.value-card');
        const reasonItems = document.querySelectorAll('.reason');
        
        serviceCards.forEach((card, index) => {
            if (isInViewport(card)) {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
        
        valueCards.forEach((card, index) => {
            if (isInViewport(card)) {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
        
        reasonItems.forEach((item, index) => {
            if (isInViewport(item)) {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, index * 150);
            }
        });
    }

    // ===== BUTTON EFFECTS =====
    function setupButtonEffects() {
        const contactBtns = document.querySelectorAll('.contact-btn');
        contactBtns.forEach(btn => {
            btn.addEventListener('mouseenter', function() {
                this.style.backgroundColor = '#e59b00';
            });
            
            btn.addEventListener('mouseleave', function() {
                this.style.backgroundColor = 'var(--yellow)';
            });
        });
    }

    // Initialize everything
    init();
});