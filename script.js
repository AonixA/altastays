// ENHANCED WOW EFFECTS JAVASCRIPT - Replace your existing script.js

// Translations (existing)
// ZAKTUALIZOWANE TŁUMACZENIA - ZASTĄP W SEKCJI translations W script.js

const translations = {
    pt: {
        // Navigation
        'nav-home': 'Início',
        'nav-comparison': 'Resultados',
        'nav-about': 'Sobre',
        'nav-services': 'Serviços',
        'nav-process': 'Processo',
        'nav-contact': 'Contato',
        
        // Hero Section
        'hero-title-1': 'Seu imóvel',
        'hero-title-2': 'rende.',
        'hero-subtitle': 'AltaStays cuida de tudo para transformar seu apartamento em renda passiva com aluguel por temporada.',
        'benefit-1': 'Liberdade',
        'benefit-2': 'Lucro',
        'benefit-3': 'Tranquilidade',
        'cta-main': 'Descobrir quanto posso ganhar',
        'cta-whatsapp': 'WhatsApp',
        
        // About Section
        'about-title': 'Nossa História',
        'about-p1': 'Há 7 anos, descobrimos a magia de receber pessoas em nosso apartamento no Airbnb. Foi incrível fazer parte da comunidade Airbnb e ver como cada hóspede trazia histórias únicas para nosso espaço.',
        'about-p2': 'Após anos de experiência e conquistas como Superhost, decidimos expandir e ajudar outros proprietários a transformar seus imóveis em fontes de renda passiva através do aluguel por temporada.',
        'about-p3': 'Hoje, a AltaStays gerencia propriedades em São Paulo e região, oferecendo serviço completo para que você tenha tranquilidade e lucro garantido.',
        'founder-title': 'Fundadora & Superhost Airbnb',
        'superhost': 'Superhost',
        'stat-years': 'Anos de experiência',
        'stat-superhost': 'Status Superhost',
        'stat-guests': 'Hóspedes felizes',
        
        // Services Section
        'services-title': 'Seu apartamento ganha, Nós cuidamos do resto',
        'services-subtitle': 'Cuidamos de cada detalhe para maximizar sua renda',
        'service-marketing': 'Marketing',
        'service-marketing-desc': 'Criamos anúncios otimizados nas principais plataformas para máxima visibilidade',
        'service-photography': 'Fotografia',
        'service-photography-desc': 'Fotos profissionais que destacam o melhor do seu imóvel',
        'service-guest': 'Atendimento aos Hóspedes',
        'service-guest-desc': 'Suporte 24/7 para garantir a melhor experiência dos seus hóspedes',
        'service-linens': 'Roupa de Cama e Toalhas',
        'service-linens-desc': 'Fornecemos e cuidamos de toda roupa de cama e banho premium',
        'service-cleaning': 'Limpeza e Manutenção',
        'service-cleaning-desc': 'Limpeza profissional e manutenção preventiva do seu imóvel',
        'service-pricing': 'Gerenciamento de Preços',
        'service-pricing-desc': 'Otimização dinâmica de preços para máxima rentabilidade',
        'service-staging': 'Home Staging',
        'service-staging-desc': 'Design de interiores profissional para atrair mais hóspedes',
        'service-insurance': 'Garantia de Danos',
        'service-insurance-desc': 'Cobertura completa contra danos para sua tranquilidade',
        
        // Before/After Section
        'ba-title': 'Mais Lucro, Menor Preocupação',
        'ba-subtitle': 'Veja a transformação que fazemos nos seus resultados',
        'ba-before': 'Antes',
        'ba-after': 'Depois',
        'ba-before-img': 'Imóvel básico',
        'ba-after-img': 'Imóvel profissional',
        'ba-revenue': 'Receita mensal:',
        'ba-occupancy': 'Taxa de ocupação:',
        'ba-rating': 'Avaliação:',
        'testimonial-text': '"Este foi um dos melhores anfitriões do Airbnb em que já me hospedei! O apartamento era lindo, confortável e muito limpo. A comunicação foi excelente!"',
        
        // Process Section
        'process-title': 'Como Funciona',
        'process-subtitle': 'Processo simples em 3 etapas para começar a lucrar',
        'step1-title': 'Contato e Avaliação',
        'step1-desc': 'Entre em contato conosco e faremos uma avaliação gratuita do potencial de rentabilidade do seu imóvel',
        'step2-title': 'Contrato e Preparação',
        'step2-desc': 'Assinamos o contrato e assumimos o controle total: fotos profissionais, anúncios e home staging',
        'step3-title': 'Renda Passiva',
        'step3-desc': 'Seu imóvel começa a gerar renda imediatamente. Você recebe mensalmente sem se preocupar com nada',
        'calc-title': 'Calcule seu potencial de ganho',
        'calc-bedrooms': 'Quartos:',
        'calc-location': 'Região:',
        'calc-button': 'Calcular',
        'calc-result-text': 'Seu imóvel pode gerar aproximadamente',
        'calc-result-month': 'por mês',
        
        // Contact Section - ZAKTUALIZOWANE
        'contact-title': 'Pronto para começar?',
        'contact-subtitle': 'Entre em contato e descubra quanto seu imóvel pode render',
        'contact-phone': 'Telefone',
        'contact-location': 'Localização',
        'form-name': 'Nome completo',
        'form-email': 'Email',
        'form-phone': 'Telefone (ex: 11987654321)',
        'form-property-select': 'Selecione o tipo de imóvel',
        'form-apartment': 'Apartamento',
        'form-house': 'Casa',
        'form-studio': 'Studio',
        'form-penthouse': 'Cobertura',
        'form-property-type': 'Tipo de imóvel',
        'form-message': 'Mensagem adicional (opcional)',
        'form-submit': 'Quero saber mais',
        'form-success': 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
        'form-error': 'Erro ao enviar mensagem. Tente novamente.',
        
        // Footer
        'footer-desc': 'Transformando imóveis em renda passiva através do aluguel por temporada.',
        'footer-services': 'Serviços',
        'footer-management': 'Gestão completa',
        'footer-photography': 'Fotografia profissional',
        'footer-cleaning': 'Limpeza',
        'footer-staging': 'Home staging',
        'footer-company': 'Empresa',
        'footer-about': 'Sobre nós',
        'footer-process': 'Como funciona',
        'footer-contact': 'Contato',
        'footer-social': 'Redes Sociais',
        'footer-rights': 'Todos os direitos reservados.'
    },
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-comparison': 'Results',
        'nav-about': 'About',
        'nav-services': 'Services',
        'nav-process': 'Process',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-title-1': 'Your property',
        'hero-title-2': 'earns.',
        'hero-subtitle': 'AltaStays takes care of everything to transform your apartment into passive income through short-term rentals.',
        'benefit-1': 'Freedom',
        'benefit-2': 'Profit',
        'benefit-3': 'Peace of mind',
        'cta-main': 'Discover how much I can earn',
        'cta-whatsapp': 'WhatsApp',
        
        // About Section
        'about-title': 'Our Story',
        'about-p1': '7 years ago, we discovered the magic of hosting people in our Airbnb apartment. It was amazing to be part of the Airbnb community and see how each guest brought unique stories to our space.',
        'about-p2': 'After years of experience and achievements as Superhost, we decided to expand and help other property owners transform their properties into passive income sources through short-term rentals.',
        'about-p3': 'Today, AltaStays manages properties in São Paulo and surroundings, offering complete service so you have peace of mind and guaranteed profit.',
        'founder-title': 'Founder & Airbnb Superhost',
        'superhost': 'Superhost',
        'stat-years': 'Years of experience',
        'stat-superhost': 'Superhost Status',
        'stat-guests': 'Happy guests',
        
        // Services Section
        'services-title': 'Your apartment earns, We take care of the rest',
        'services-subtitle': 'We take care of every detail to maximize your income',
        'service-marketing': 'Marketing',
        'service-marketing-desc': 'We create optimized listings on major platforms for maximum visibility',
        'service-photography': 'Photography',
        'service-photography-desc': 'Professional photos that highlight the best of your property',
        'service-guest': 'Guest Service',
        'service-guest-desc': '24/7 support to ensure the best experience for your guests',
        'service-linens': 'Bed Linens and Towels',
        'service-linens-desc': 'We provide and care for all premium bed and bath linens',
        'service-cleaning': 'Cleaning and Maintenance',
        'service-cleaning-desc': 'Professional cleaning and preventive maintenance of your property',
        'service-pricing': 'Price Management',
        'service-pricing-desc': 'Dynamic price optimization for maximum profitability',
        'service-staging': 'Home Staging',
        'service-staging-desc': 'Professional interior design to attract more guests',
        'service-insurance': 'Damage Coverage',
        'service-insurance-desc': 'Complete coverage against damages for your peace of mind',
        
        // Before/After Section
        'ba-title': 'More Profit, Less Worry',
        'ba-subtitle': 'See the transformation we make in your results',
        'ba-before': 'Before',
        'ba-after': 'After',
        'ba-before-img': 'Basic property',
        'ba-after-img': 'Professional property',
        'ba-revenue': 'Monthly revenue:',
        'ba-occupancy': 'Occupancy rate:',
        'ba-rating': 'Rating:',
        'testimonial-text': '"This was one of the best Airbnb hosts I\'ve ever stayed with! The apartment was beautiful, comfortable and very clean. Communication was excellent!"',
        
        // Process Section
        'process-title': 'How It Works',
        'process-subtitle': 'Simple 3-step process to start earning',
        'step1-title': 'Contact and Assessment',
        'step1-desc': 'Contact us and we\'ll do a free assessment of your property\'s profitability potential',
        'step2-title': 'Contract and Preparation',
        'step2-desc': 'We sign the contract and take full control: professional photos, listings and home staging',
        'step3-title': 'Passive Income',
        'step3-desc': 'Your property starts generating income immediately. You receive monthly without worrying about anything',
        'calc-title': 'Calculate your earning potential',
        'calc-bedrooms': 'Bedrooms:',
        'calc-location': 'Region:',
        'calc-button': 'Calculate',
        'calc-result-text': 'Your property can generate approximately',
        'calc-result-month': 'per month',
        
        // Contact Section - ZAKTUALIZOWANE
        'contact-title': 'Ready to start?',
        'contact-subtitle': 'Get in touch and discover how much your property can earn',
        'contact-phone': 'Phone',
        'contact-location': 'Location',
        'form-name': 'Full name',
        'form-email': 'Email',
        'form-phone': 'Phone (ex: 11987654321)',
        'form-property-select': 'Select property type',
        'form-apartment': 'Apartment',
        'form-house': 'House',
        'form-studio': 'Studio',
        'form-penthouse': 'Penthouse',
        'form-property-type': 'Property type',
        'form-message': 'Additional message (optional)',
        'form-submit': 'I want to know more',
        'form-success': 'Message sent successfully! We will contact you soon.',
        'form-error': 'Error sending message. Please try again.',
        
        // Footer
        'footer-desc': 'Transforming properties into passive income through short-term rentals.',
        'footer-services': 'Services',
        'footer-management': 'Complete management',
        'footer-photography': 'Professional photography',
        'footer-cleaning': 'Cleaning',
        'footer-staging': 'Home staging',
        'footer-company': 'Company',
        'footer-about': 'About us',
        'footer-process': 'How it works',
        'footer-contact': 'Contact',
        'footer-social': 'Social Media',
        'footer-rights': 'All rights reserved.'
    }

};

// Current language
let currentLang = 'pt';

// DOM Elements
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');
const langButtons = document.querySelectorAll('.lang-btn');
const contactForm = document.getElementById('contactForm');

// WOW EFFECTS VARIABLES
let mouseX = 0;
let mouseY = 0;
let isMouseMoving = false;

// Initialize the website with WOW effects
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeScrollEffects();
    initializeLanguageToggle();
    initializeContactForm();
    initializeWowEffects();
    initializeParticleSystem();
    initializeMouseEffects();
    initializeSoundEffects();
    initializeAnimations();
    updateTranslations();
    
    // Set initial language based on browser or default to Portuguese
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('en')) {
        setLanguage('en');
    }
});

// SPECTACULAR WOW EFFECTS
function initializeWowEffects() {
    // 3D Tilt Effect for Cards
    initializeTiltEffect();
    
    // Magnetic Buttons
    initializeMagneticButtons();
    
    // Parallax Scrolling
    initializeParallaxScrolling();
    
    // Reveal Animations
    initializeRevealAnimations();
    
    // Interactive Background
    initializeInteractiveBackground();
    
    // Smooth Cursor
    initializeSmoothCursor();
    
    // Loading Screen
    initializeLoadingScreen();
}

// 3D Tilt Effect
function initializeTiltEffect() {
    const tiltElements = document.querySelectorAll('.service-card, .stat-card, .step, .comparison-card');
    
    tiltElements.forEach(element => {
        element.addEventListener('mousemove', handleTilt);
        element.addEventListener('mouseleave', resetTilt);
    });
}

function handleTilt(e) {
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);
    
    const rotateX = deltaY * -10;
    const rotateY = deltaX * 10;
    
    element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
}

function resetTilt(e) {
    const element = e.currentTarget;
    element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
}

// Magnetic Buttons
function initializeMagneticButtons() {
    const magneticElements = document.querySelectorAll('.btn-primary, .btn-whatsapp, .calc-btn, .service-card, .nav-logo');
    
    magneticElements.forEach(element => {
        element.addEventListener('mousemove', handleMagnetic);
        element.addEventListener('mouseleave', resetMagnetic);
    });
}

function handleMagnetic(e) {
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * 0.15;
    const deltaY = (e.clientY - centerY) * 0.15;
    
    element.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.05)`;
}

function resetMagnetic(e) {
    const element = e.currentTarget;
    element.style.transform = 'translate(0px, 0px) scale(1)';
}

// Parallax Scrolling
function initializeParallaxScrolling() {
    const parallaxElements = [
        { selector: '.bg-circle-1', speed: 0.5 },
        { selector: '.bg-circle-2', speed: 0.3 },
        { selector: '.hero-img', speed: 0.2 },
        { selector: '.service-icon', speed: 0.1 }
    ];
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(({ selector, speed }) => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    });
}

// Reveal Animations with Intersection Observer
function initializeRevealAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-animation');
                
                // Staggered animations for grid items
                if (entry.target.classList.contains('services-grid')) {
                    const cards = entry.target.querySelectorAll('.service-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.animation = `slideInUp 0.8s ease-out ${index * 0.1}s forwards`;
                        }, index * 100);
                    });
                }
                
                if (entry.target.classList.contains('process-steps-horizontal')) {
                    const steps = entry.target.querySelectorAll('.step-horizontal');
                    steps.forEach((step, index) => {
                        setTimeout(() => {
                            step.style.animation = `slideInUp 0.8s ease-out ${index * 0.2}s forwards`;
                        }, index * 200);
                    });
                }
                
                // Counter animation for stats
                if (entry.target.classList.contains('stat-number')) {
                    animateCounter(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const elementsToAnimate = document.querySelectorAll(`
        .hero-title,
        .hero-subtitle,
        .hero-benefits,
        .hero-cta,
        .hero-visual,
        .about-content,
        .services-grid,
        .service-card,
        .comparison-container,
        .process-steps-horizontal,
        .step-horizontal,
        .revenue-calculator,
        .contact-content,
        .stat-number,
        .testimonial
    `);
    
    elementsToAnimate.forEach(el => observer.observe(el));
}

// Counter Animation
function animateCounter(element) {
    const target = parseInt(element.textContent.replace(/\D/g, ''));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = element.textContent.replace(/\d+/, target);
            clearInterval(timer);
        } else {
            element.textContent = element.textContent.replace(/\d+/, Math.floor(current));
        }
    }, 16);
}

// Interactive Background
function initializeInteractiveBackground() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Create floating orbs
    for (let i = 0; i < 5; i++) {
        const orb = document.createElement('div');
        orb.className = 'floating-orb';
        orb.style.cssText = `
            position: absolute;
            width: ${Math.random() * 100 + 50}px;
            height: ${Math.random() * 100 + 50}px;
            background: radial-gradient(circle, rgba(245, 158, 11, 0.3), transparent);
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: floatOrb ${Math.random() * 10 + 10}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
            pointer-events: none;
            filter: blur(1px);
        `;
        hero.appendChild(orb);
    }
    
    // Add CSS for orb animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatOrb {
            0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
            25% { transform: translateY(-50px) translateX(30px) scale(1.1); }
            50% { transform: translateY(-20px) translateX(-40px) scale(0.9); }
            75% { transform: translateY(30px) translateX(20px) scale(1.05); }
        }
    `;
    document.head.appendChild(style);
}

// Smooth Cursor
function initializeSmoothCursor() {
    // Create custom cursor
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, #F59E0B, #F97316);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: all 0.1s ease;
        mix-blend-mode: difference;
        opacity: 0;
    `;
    document.body.appendChild(cursor);
    
    // Cursor follower
    const cursorFollower = document.createElement('div');
    cursorFollower.className = 'cursor-follower';
    cursorFollower.style.cssText = `
        position: fixed;
        width: 40px;
        height: 40px;
        border: 2px solid rgba(245, 158, 11, 0.5);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        transition: all 0.3s ease;
        opacity: 0;
    `;
    document.body.appendChild(cursorFollower);
    
    // Update cursor position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.left = mouseX - 10 + 'px';
        cursor.style.top = mouseY - 10 + 'px';
        cursor.style.opacity = '1';
        
        cursorFollower.style.left = mouseX - 20 + 'px';
        cursorFollower.style.top = mouseY - 20 + 'px';
        cursorFollower.style.opacity = '1';
    });
    
    // Cursor effects on interactive elements
    document.addEventListener('mouseenter', (e) => {
        if (e.target.matches('a, button, .service-card, .btn-primary, .btn-whatsapp')) {
            cursor.style.transform = 'scale(1.5)';
            cursorFollower.style.transform = 'scale(1.5)';
            cursorFollower.style.background = 'rgba(245, 158, 11, 0.1)';
        }
    }, true);
    
    document.addEventListener('mouseleave', (e) => {
        if (e.target.matches('a, button, .service-card, .btn-primary, .btn-whatsapp')) {
            cursor.style.transform = 'scale(1)';
            cursorFollower.style.transform = 'scale(1)';
            cursorFollower.style.background = 'transparent';
        }
    }, true);
}

// Loading Screen
function initializeLoadingScreen() {
    const loader = document.createElement('div');
    loader.className = 'spectacular-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-logo">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDMwSDMwVjEwSDEwVjMwWiIgZmlsbD0iIzJENkE0RiIvPgo8cGF0aCBkPSJNMTUgMjVIMjVWMTVIMTVWMjVaIiBmaWxsPSIjRjU5RTBCIi8+Cjwvc3ZnPg==" alt="AltaStays">
                <span>AltaStays</span>
            </div>
            <div class="loader-progress">
                <div class="loader-bar"></div>
            </div>
            <div class="loader-text">Preparando uma experiência incrível...</div>
        </div>
    `;
    
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #FFFBF5 0%, #FEF7ED 50%, #F0FDF4 100%);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 1;
        transition: opacity 0.8s ease, visibility 0.8s ease;
    `;
    
    // Add loader styles
    const loaderStyle = document.createElement('style');
    loaderStyle.textContent = `
        .loader-content {
            text-align: center;
            animation: fadeInUp 1s ease-out;
        }
        
        .loader-logo {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            font-size: 2rem;
            font-weight: 800;
            color: #2D6A4F;
            margin-bottom: 2rem;
            animation: pulse 2s ease-in-out infinite;
        }
        
        .loader-logo img {
            width: 50px;
            height: 50px;
            animation: rotate 3s linear infinite;
        }
        
        .loader-progress {
            width: 200px;
            height: 4px;
            background: rgba(45, 106, 79, 0.2);
            border-radius: 2px;
            overflow: hidden;
            margin: 0 auto 1rem;
        }
        
        .loader-bar {
            width: 0%;
            height: 100%;
            background: linear-gradient(90deg, #2D6A4F, #52B788, #F59E0B);
            border-radius: 2px;
            animation: loadingProgress 3s ease-in-out forwards;
        }
        
        .loader-text {
            color: #6B7280;
            font-size: 1rem;
            animation: fadeInOut 2s ease-in-out infinite;
        }
        
        @keyframes loadingProgress {
            to { width: 100%; }
        }
        
        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        
        @keyframes fadeInOut {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
        }
    `;
    document.head.appendChild(loaderStyle);
    document.body.appendChild(loader);
    
    // Remove loader after content is loaded
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            loader.style.visibility = 'hidden';
            setTimeout(() => {
                loader.remove();
            }, 800);
        }, 2000);
    });
}

// Particle System
function initializeParticleSystem() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-system';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    document.body.appendChild(particleContainer);
    
    // Create particles
    for (let i = 0; i < 20; i++) {
        createParticle(particleContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(245, 158, 11, 0.6);
        border-radius: 50%;
        animation: particleFloat ${Math.random() * 10 + 10}s ease-in-out infinite;
        animation-delay: ${Math.random() * 5}s;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
    `;
    container.appendChild(particle);
    
    // Add particle animation
    if (!document.querySelector('#particle-styles')) {
        const style = document.createElement('style');
        style.id = 'particle-styles';
        style.textContent = `
            @keyframes particleFloat {
                0%, 100% { 
                    transform: translateY(0px) translateX(0px) scale(1);
                    opacity: 0;
                }
                10%, 90% {
                    opacity: 1;
                }
                50% { 
                    transform: translateY(-100px) translateX(50px) scale(1.2);
                    opacity: 0.8;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Mouse Effects
function initializeMouseEffects() {
    let ripples = [];
    
    document.addEventListener('click', (e) => {
        // Create ripple effect
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: fixed;
            top: ${e.clientY - 25}px;
            left: ${e.clientX - 25}px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(245, 158, 11, 0.3), transparent);
            pointer-events: none;
            z-index: 9999;
            animation: rippleEffect 0.6s ease-out forwards;
        `;
        
        document.body.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
    
    // Add ripple animation
    if (!document.querySelector('#ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            @keyframes rippleEffect {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Sound Effects (optional - can be disabled)
function initializeSoundEffects() {
    // Only add subtle sound effects if user interacts
    let audioContext;
    let hasUserInteracted = false;
    
    document.addEventListener('click', initAudio, { once: true });
    
    function initAudio() {
        hasUserInteracted = true;
        try {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.log('Web Audio API not supported');
            return;
        }
        
        // Add subtle hover sounds
        document.querySelectorAll('.btn-primary, .btn-whatsapp, .service-card').forEach(element => {
            element.addEventListener('mouseenter', () => {
                if (hasUserInteracted) playTone(800, 0.1, 0.05);
            });
        });
    }
    
    function playTone(frequency, duration, volume) {
        if (!audioContext) return;
        
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(volume, audioContext.currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
    }
}

// Enhanced Navigation with WOW effects
function initializeNavigation() {
    // Mobile menu toggle with animation
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Add body scroll lock
            document.body.classList.toggle('menu-open');
        });
    }

    // Close menu when clicking on links
    document.querySelectorAll('.nav-menu a[href^="#"]').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navToggle && navMenu && !navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });

    // Enhanced smooth scrolling with easing
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                smoothScrollTo(offsetTop, 1000);
            }
        });
    });
}

// Smooth scroll with easing
function smoothScrollTo(target, duration) {
    const start = window.pageYOffset;
    const distance = target - start;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, start, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}

// Enhanced Scroll Effects
function initializeScrollEffects() {
    let ticking = false;
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    });
    
    function updateScrollEffects() {
        const scrollTop = window.pageYOffset;
        
        // Enhanced navbar effects
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Parallax background elements with more complex movements
        const bgElements = [
            { selector: '.bg-circle-1', speed: 0.5, rotate: true },
            { selector: '.bg-circle-2', speed: 0.3, rotate: false },
            { selector: '.floating-orb', speed: 0.2, rotate: true }
        ];
        
        bgElements.forEach(({ selector, speed, rotate }) => {
            const elements = document.querySelectorAll(selector);
            elements.forEach((element, index) => {
                const yPos = scrollTop * speed;
                const rotation = rotate ? scrollTop * 0.1 + (index * 30) : 0;
                element.style.transform = `translateY(${yPos}px) rotate(${rotation}deg)`;
            });
        });
        
        // Progress indicator
        updateScrollProgress();
        
        ticking = false;
    }
}

// Scroll Progress Indicator
function updateScrollProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    let progressBar = document.querySelector('.scroll-progress');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: ${scrolled}%;
            height: 3px;
            background: linear-gradient(90deg, #2D6A4F, #52B788, #F59E0B);
            z-index: 10001;
            transition: width 0.3s ease;
        `;
        document.body.appendChild(progressBar);
    } else {
        progressBar.style.width = scrolled + '%';
    }
}

// Language toggle functionality
function initializeLanguageToggle() {
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
            
            // Add click effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

function setLanguage(lang) {
    currentLang = lang;
    
    // Update active language button with animation
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update document language
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    
    // Update all translations with stagger effect
    updateTranslations();
}

function updateTranslations() {
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach((element, index) => {
        setTimeout(() => {
            const key = element.getAttribute('data-translate');
            if (translations[currentLang] && translations[currentLang][key]) {
                element.style.opacity = '0';
                setTimeout(() => {
                    element.textContent = translations[currentLang][key];
                    element.style.opacity = '1';
                }, 100);
            }
        }, index * 10);
    });
    
    // Update placeholders
    const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[currentLang] && translations[currentLang][key]) {
            element.placeholder = translations[currentLang][key];
        }
    });
}

// Enhanced Contact form functionality
function initializeContactForm() {
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmit(this);
        });
        
        // Add real-time validation
        const inputs = contactForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('focus', clearFieldError);
        });
    }
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Remove existing error
    clearFieldError(e);
    
    switch(field.type) {
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (value && !emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Email inválido';
            }
            break;
        case 'tel':
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            if (value && !phoneRegex.test(value.replace(/\s/g, ''))) {
                isValid = false;
                errorMessage = 'Telefone inválido';
            }
            break;
        default:
            if (field.required && !value) {
                isValid = false;
                errorMessage = 'Campo obrigatório';
            }
    }
    
    if (!isValid) {
        showFieldError(field, errorMessage);
    }
    
    return isValid;
}

function showFieldError(field, message) {
    field.classList.add('error');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        color: #EF4444;
        font-size: 0.875rem;
        margin-top: 0.25rem;
        animation: slideInUp 0.3s ease-out;
    `;
    field.parentNode.appendChild(errorDiv);
}

function clearFieldError(e) {
    const field = e.target;
    field.classList.remove('error');
    const errorDiv = field.parentNode.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.remove();
    }
}

function handleFormSubmit(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Validate all fields
    const inputs = form.querySelectorAll('input[required], select[required]');
    let isFormValid = true;
    
    inputs.forEach(input => {
        if (!validateField({ target: input })) {
            isFormValid = false;
        }
    });
    
    if (!isFormValid) {
        showMessage(translations[currentLang]['form-error'] || 'Please fix the errors above.', 'error');
        return;
    }
    
    // Show loading state with animation
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem;">
            <div style="width: 20px; height: 20px; border: 2px solid rgba(255,255,255,0.3); border-top: 2px solid white; border-radius: 50%; animation: spin 1s linear infinite;"></div>
            ${currentLang === 'pt' ? 'Enviando...' : 'Sending...'}
        </div>
    `;
    submitButton.disabled = true;
    
    // Add spinner animation
    if (!document.querySelector('#spinner-styles')) {
        const style = document.createElement('style');
        style.id = 'spinner-styles';
        style.textContent = `
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Simulate form submission
    simulateFormSubmission(data)
        .then(() => {
            showMessage(translations[currentLang]['form-success'], 'success');
            form.reset();
            // Trigger confetti effect
            triggerConfetti();
        })
        .catch(() => {
            showMessage(translations[currentLang]['form-error'], 'error');
        })
        .finally(() => {
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        });
}

// Confetti Effect
function triggerConfetti() {
    const colors = ['#2D6A4F', '#52B788', '#F59E0B', '#F97316'];
    const confettiContainer = document.createElement('div');
    confettiContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 10000;
    `;
    document.body.appendChild(confettiContainer);
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: absolute;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            top: -10px;
            left: ${Math.random() * 100}%;
            animation: confettiFall ${Math.random() * 2 + 2}s ease-out forwards;
            transform: rotate(${Math.random() * 360}deg);
        `;
        confettiContainer.appendChild(confetti);
    }
    
    // Add confetti animation
    if (!document.querySelector('#confetti-styles')) {
        const style = document.createElement('style');
        style.id = 'confetti-styles';
        style.textContent = `
            @keyframes confettiFall {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translateY(100vh) rotate(720deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Remove confetti after animation
    setTimeout(() => {
        confettiContainer.remove();
    }, 4000);
}

function simulateFormSubmission(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Form submitted:', data);
            
            // Create WhatsApp message
            const message = createWhatsAppMessage(data);
            
            // Simulate success (90% success rate)
            if (Math.random() > 0.1) {
                resolve(data);
            } else {
                reject(new Error('Submission failed'));
            }
        }, 2000);
    });
}

// POPRAWKA NUMERU WHATSAPP - ZASTĄP FUNKCJĘ createWhatsAppMessage W script.js

function createWhatsAppMessage(data) {
    const messages = {
        pt: `Olá! Tenho interesse em transformar meu imóvel em renda passiva.

*Dados do contato:*
Nome: ${data.name}
Email: ${data.email}
Telefone: ${data.phone}
Tipo de imóvel: ${data['property-type'] || 'Não informado'}
Região: ${data['property-location'] || 'Não informada'}
Quartos: ${data.bedrooms || 'Não informado'}

${data.message ? `Mensagem: ${data.message}` : ''}

Aguardo contato para mais informações.`,
        
        en: `Hello! I'm interested in transforming my property into passive income.

*Contact details:*
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Property type: ${data['property-type'] || 'Not specified'}
Region: ${data['property-location'] || 'Not specified'}
Bedrooms: ${data.bedrooms || 'Not specified'}

${data.message ? `Message: ${data.message}` : ''}

Looking forward to hearing from you.`
    };
    
    const message = encodeURIComponent(messages[currentLang]);
    // POPRAWIONY NUMER WHATSAPP: +55 11 98148-0492
    const whatsappUrl = `https://wa.me/5511981480492?text=${message}`;
    
    setTimeout(() => {
        window.open(whatsappUrl, '_blank');
    }, 2000);
}

// DODATKOWO - POPRAW TAKŻE WSZYSTKIE LINKI WHATSAPP W PLIKU
// Znajdź i zastąp wszystkie wystąpienia starego numeru nowym numerem

function showMessage(text, type) {
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const message = document.createElement('div');
    message.className = `form-message ${type}`;
    message.textContent = text;
    message.style.cssText = `
        padding: 1rem 1.5rem;
        margin-top: 1rem;
        border-radius: 12px;
        font-weight: 600;
        text-align: center;
        animation: slideInUp 0.5s ease-out;
        ${type === 'success' ? 
            'background: linear-gradient(135deg, #D1FAE5, #A7F3D0); color: #065F46; border: 1px solid #6EE7B7;' : 
            'background: linear-gradient(135deg, #FEE2E2, #FECACA); color: #991B1B; border: 1px solid #F87171;'
        }
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    `;
    
    contactForm.appendChild(message);
    
    setTimeout(() => {
        if (message.parentNode) {
            message.style.animation = 'slideOutDown 0.5s ease-out';
            setTimeout(() => message.remove(), 500);
        }
    }, 5000);
}

// Revenue calculator with enhanced effects
function calculateRevenue() {
    const bedrooms = document.getElementById('bedrooms').value;
    const location = document.getElementById('location').value;
    const resultDiv = document.getElementById('calc-result');
    
    if (!bedrooms || !location) {
        resultDiv.innerHTML = '<p style="color: #EF4444; animation: shake 0.5s ease-in-out;">Por favor, selecione todas as opções.</p>';
        return;
    }
    
    // Show loading animation
    resultDiv.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; gap: 1rem; padding: 2rem;">
            <div style="width: 30px; height: 30px; border: 3px solid #e3e3e3; border-top: 3px solid #2D6A4F; border-radius: 50%; animation: spin 1s linear infinite;"></div>
            <span>Calculando...</span>
        </div>
    `;
    
    setTimeout(() => {
        // Base prices by bedrooms (in BRL)
        const basePrices = {
            '1': 2500,
            '2': 3500,
            '3': 4500,
            '4': 6000
        };
        
        // Location multipliers
        const locationMultipliers = {
            'centro': 0.8,
            'vila-madalena': 1.2,
            'itaim': 1.4,
            'jardins': 1.3,
            'moema': 1.1,
            'outros': 1.0
        };
        
        const basePrice = basePrices[bedrooms] || 3000;
        const multiplier = locationMultipliers[location] || 1.0;
        const estimatedRevenue = Math.round(basePrice * multiplier);
        
        const resultText = currentLang === 'pt' ? 
            `Seu imóvel pode gerar aproximadamente` :
            `Your property can generate approximately`;
            
        const monthText = currentLang === 'pt' ? 'por mês' : 'per month';
        const disclaimerText = currentLang === 'pt' ? 
            '*Estimativa baseada em dados de mercado de São Paulo' : 
            '*Estimate based on São Paulo market data';
        
        resultDiv.innerHTML = `
            <div style="background: linear-gradient(135deg, #2D6A4F, #52B788); color: white; padding: 2rem; border-radius: 16px; text-align: center; box-shadow: 0 10px 30px rgba(45, 106, 79, 0.3); animation: slideInUp 0.6s ease-out;">
                <div style="font-size: 1.1rem; margin-bottom: 1rem; opacity: 0.9;">${resultText}</div>
                <div style="font-size: 2.5rem; font-weight: 800; margin-bottom: 0.5rem; animation: countUp 1s ease-out;">R$ ${estimatedRevenue.toLocaleString('pt-BR')}</div>
                <div style="font-size: 1.2rem; margin-bottom: 1rem;">${monthText}</div>
                <div style="font-size: 0.9rem; opacity: 0.8; border-top: 1px solid rgba(255,255,255,0.2); padding-top: 1rem;">
                    ${disclaimerText}
                </div>
            </div>
        `;
        
        // Scroll to result with animation
        setTimeout(() => {
            resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
    }, 1500);
}

// Initialize animations
function initializeAnimations() {
    // Add CSS for additional animations
    const animationStyles = document.createElement('style');
    animationStyles.textContent = `
        .reveal-animation {
            animation: slideInUp 0.8s ease-out forwards;
        }
        
        @keyframes slideOutDown {
            to {
                opacity: 0;
                transform: translateY(20px);
            }
        }
        
        body.menu-open {
            overflow: hidden;
        }
        
        .error {
            border-color: #EF4444 !important;
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
        }
    `;
    document.head.appendChild(animationStyles);
}

// Performance optimizations
function optimizePerformance() {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Preload critical resources
    const criticalResources = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
    ];
    
    criticalResources.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = url;
        document.head.appendChild(link);
    });
}
/* OPCJONALNY JAVASCRIPT DLA DODATKOWYCH EFEKTÓW W SEKCJI SERVICES */
/* DODAJ DO SWOJEGO PLIKU script.js LUB UTWÓRZ NOWY PLIK */

// Funkcja do przełączania między emojis a ikonami Font Awesome
function toggleServiceIcons() {
    const services = [
        { 
            emoji: '📱', 
            icon: 'fas fa-bullseye', 
            class: 'marketing',
            title: 'Marketing',
            desc: 'Criamos anúncios otimizados nas principais plataformas para máxima visibilidade'
        },
        { 
            emoji: '📸', 
            icon: 'fas fa-camera', 
            class: 'photography',
            title: 'Fotografia',
            desc: 'Fotos profissionais que destacam o melhor do seu imóvel'
        },
        { 
            emoji: '🤝', 
            icon: 'fas fa-users', 
            class: 'guest-service',
            title: 'Atendimento aos Hóspedes',
            desc: 'Suporte 24/7 para garantir a melhor experiência dos seus hóspedes'
        },
        { 
            emoji: '🛏️', 
            icon: 'fas fa-tshirt', 
            class: 'linens',
            title: 'Roupa de Cama e Toalhas',
            desc: 'Fornecemos e cuidamos de toda roupa de cama e banho premium'
        },
        { 
            emoji: '✨', 
            icon: 'fas fa-broom', 
            class: 'cleaning',
            title: 'Limpeza e Manutenção',
            desc: 'Limpeza profissional e manutenção preventiva do seu imóvel'
        },
        { 
            emoji: '💰', 
            icon: 'fas fa-chart-line', 
            class: 'pricing',
            title: 'Gerenciamento de Preços',
            desc: 'Otimização dinâmica de preços para máxima rentabilidade'
        },
        { 
            emoji: '🎨', 
            icon: 'fas fa-home', 
            class: 'staging',
            title: 'Home Staging',
            desc: 'Design de interiores profissional para atrair mais hóspedes'
        },
        { 
            emoji: '🛡️', 
            icon: 'fas fa-shield-alt', 
            class: 'insurance',
            title: 'Garantia de Danos',
            desc: 'Cobertura completa contra danos para sua tranquilidade'
        }
    ];

    let isShowingEmojis = true;

    return function() {
        const serviceIcons = document.querySelectorAll('.service-icon');
        
        serviceIcons.forEach((iconContainer, index) => {
            const service = services[index];
            if (!service) return;

            // Animação de saída
            iconContainer.style.transform = 'scale(0) rotate(180deg)';
            iconContainer.style.opacity = '0';

            setTimeout(() => {
                if (isShowingEmojis) {
                    // Trocar para ícones Font Awesome
                    iconContainer.innerHTML = `<i class="${service.icon}"></i>`;
                } else {
                    // Trocar para emojis
                    iconContainer.innerHTML = `<span class="service-emoji">${service.emoji}</span>`;
                }

                // Animação de entrada
                setTimeout(() => {
                    iconContainer.style.transform = 'scale(1) rotate(0deg)';
                    iconContainer.style.opacity = '1';
                }, 50);
            }, 300);
        });

        isShowingEmojis = !isShowingEmojis;
    };
}

// Função para animar entrada dos cartões de serviço
function animateServiceCards() {
    const cards = document.querySelectorAll('.service-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        observer.observe(card);
    });
}

// Função para adicionar efeito de partículas nos cartões
function addParticleEffect() {
    const cards = document.querySelectorAll('.service-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            createParticles(this);
        });
    });
}

function createParticles(element) {
    const particles = 8;
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: var(--accent-orange);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${rect.left + rect.width / 2}px;
            top: ${rect.top + rect.height / 2}px;
            animation: particleFloat 1s ease-out forwards;
        `;
        
        // Direção aleatória para cada partícula
        const angle = (360 / particles) * i;
        const distance = 50 + Math.random() * 30;
        const endX = rect.left + rect.width / 2 + Math.cos(angle * Math.PI / 180) * distance;
        const endY = rect.top + rect.height / 2 + Math.sin(angle * Math.PI / 180) * distance;
        
        particle.style.setProperty('--end-x', endX + 'px');
        particle.style.setProperty('--end-y', endY + 'px');
        
        document.body.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
            }
        }, 1000);
    }
}

// Função para efeito de hover nos emojis
function enhanceEmojiHover() {
    const emojis = document.querySelectorAll('.service-emoji');
    
    emojis.forEach(emoji => {
        emoji.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.3) rotate(-10deg)';
            this.style.filter = 'drop-shadow(0 6px 12px rgba(0,0,0,0.3))';
        });
        
        emoji.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.filter = 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))';
        });
    });
}

// Função principal de inicialização
function initializeServiceEffects() {
    // Animar cartões quando entrarem na visualização
    animateServiceCards();
    
    // Adicionar efeitos de partículas
    addParticleEffect();
    
    // Melhorar hover dos emojis
    enhanceEmojiHover();
    
    // Criar função global para toggle (se necessário)
    window.toggleServiceIcons = toggleServiceIcons();
}

// CSS adicional para partículas (adicionar ao CSS)
const particleStyles = `
    @keyframes particleFloat {
        0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(
                calc(var(--end-x) - 50vw), 
                calc(var(--end-y) - 50vh)
            ) scale(0);
        }
    }
`;

// Adicionar estilos das partículas ao documento
function addParticleStyles() {
    const style = document.createElement('style');
    style.textContent = particleStyles;
    document.head.appendChild(style);
}

// Inicializar quando DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    initializeServiceEffects();
    addParticleStyles();
});

// Opcional: Adicionar botão para alternar entre emojis e ícones
function addToggleButton() {
    const servicesSection = document.querySelector('.services .section-header');
    if (servicesSection) {
        const toggleButton = document.createElement('button');
        toggleButton.innerHTML = '🔄 Alternar Ícones';
        toggleButton.className = 'toggle-icons-btn';
        toggleButton.style.cssText = `
            background: var(--gradient-secondary);
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: var(--radius-lg);
            font-weight: 600;
            cursor: pointer;
            margin-top: 1rem;
            transition: all 0.3s ease;
        `;
        
        toggleButton.addEventListener('click', window.toggleServiceIcons);
        toggleButton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
            this.style.boxShadow = 'var(--shadow-glow)';
        });
        toggleButton.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
        
        servicesSection.appendChild(toggleButton);
    }
}

// Deskomentuj poniższą linię jeśli chcesz dodać przycisk toggle
// addToggleButton();
// Initialize performance optimizations
document.addEventListener('DOMContentLoaded', optimizePerformance);

// Export functions for global access
window.AltaStays = {
    setLanguage,
    calculateRevenue,
    triggerConfetti,
    initializeWowEffects
};
// DODAJ DO script.js - POPRAWKA MENU MOBILNEGO

// Enhanced Navigation with mobile menu
function initializeNavigation() {
    // Mobile menu toggle with animation
    if (navToggle) {
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Add body scroll lock
            document.body.classList.toggle('menu-open');
            
            // Prevent event bubbling
            return false;
        });
    }

    // Close menu when clicking on links
    document.querySelectorAll('.nav-menu a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            // Don't prevent default for anchor links
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navToggle && navMenu && 
            !navToggle.contains(e.target) && 
            !navMenu.contains(e.target) &&
            navMenu.classList.contains('active')) {
            
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });

    // Enhanced smooth scrolling with easing
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                smoothScrollTo(offsetTop, 1000);
            }
        });
    });

    // Handle escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
}

// Add mobile-specific optimizations
function initializeMobileOptimizations() {
    // Detect mobile device
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // Disable some heavy animations on mobile
        const heavyAnimations = document.querySelectorAll('.floating-orb, .bg-circle');
        heavyAnimations.forEach(element => {
            element.style.display = 'none';
        });
        
        // Optimize scroll performance
        let ticking = false;
        function updateScrollEffectsMobile() {
            const scrollTop = window.pageYOffset;
            
            // Only update navbar on mobile
            if (scrollTop > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            ticking = false;
        }
        
        window.addEventListener('scroll', function() {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffectsMobile);
                ticking = true;
            }
        });
        
        // Improve touch interactions
        document.addEventListener('touchstart', function() {}, {passive: true});
    }
}

// Add to DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeScrollEffects();
    initializeLanguageToggle();
    initializeContactForm();
    initializeMobileOptimizations(); // Add this line
    
    // Existing code...
    initializeWowEffects();
    initializeParticleSystem();
    initializeMouseEffects();
    initializeSoundEffects();
    initializeAnimations();
    updateTranslations();
    
    // Set initial language based on browser or default to Portuguese
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('en')) {
        setLanguage('en');
    }
});

// Handle window resize for responsive behavior
window.addEventListener('resize', function() {
    // Close mobile menu on resize
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
    
    // Reinitialize mobile optimizations if needed
    if (window.innerWidth <= 768) {
        initializeMobileOptimizations();
    }
});

// Prevent body scroll when mobile menu is open
const originalOverflow = document.body.style.overflow;
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.attributeName === 'class') {
            if (document.body.classList.contains('menu-open')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = originalOverflow;
            }
        }
    });
});

observer.observe(document.body, {
    attributes: true,
    attributeFilter: ['class']
});
