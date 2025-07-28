/*
========================================
ALTASTAYS - MAIN JAVASCRIPT
Clean, optimized code for mobile-first experience
========================================
*/

// ========================================
// GLOBAL VARIABLES & CONFIGURATION
// ========================================

// Translation system
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
        
        // Apartments
        'apartment-1': 'Apartamento Premium',
        'apartment-1-desc': 'Luxo e conforto',
        'apartment-2': 'Apartamento Moderno', 
        'apartment-2-desc': 'Design contemporâneo',
        'apartment-3': 'Apartamento Elegante',
        'apartment-3-desc': 'Sofisticação única',
        
        // About Section
        'about-title': 'Nossa História',
        'about-p1': 'Há 7 anos, descobrimos a magia de receber pessoas em nosso apartamento no Airbnb. Foi incrível fazer parte da comunidade Airbnb e ver como cada hóspede trazia histórias únicas para nosso espaço.',
        'about-p2': 'Após anos de experiência e conquistas como Superhost, decidimos expandir e ajudar outros proprietários a transformar seus imóveis em fontes de renda passiva através do aluguel por temporada.',
        'about-p3': 'Hoje, a AltaStays gerencia propriedades em São Paulo e região, oferecendo serviço completo para que você tenha tranquilidade e lucro garantido.',
        'founder-title-marina': 'Fundadora & Superhost Airbnb',
        'founder-title-artur': 'Co-Fundador & Diretor de Estratégia',
        'superhost': 'Superhost',
        'strategy': 'Estratégia',
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
        
        // Contact Section
        'contact-title': 'Pronto para começar?',
        'contact-subtitle': 'Entre em contato e descubra quanto seu imóvel pode render',
        'contact-phone': 'Telefone',
        'contact-location': 'Localização',
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
        
        // Apartments  
        'apartment-1': 'Premium Apartment',
        'apartment-1-desc': 'Luxury and comfort',
        'apartment-2': 'Modern Apartment',
        'apartment-2-desc': 'Contemporary design', 
        'apartment-3': 'Elegant Apartment',
        'apartment-3-desc': 'Unique sophistication',
        
        // About Section
        'about-title': 'Our Story',
        'about-p1': '7 years ago, we discovered the magic of hosting people in our Airbnb apartment. It was amazing to be part of the Airbnb community and see how each guest brought unique stories to our space.',
        'about-p2': 'After years of experience and achievements as Superhost, we decided to expand and help other property owners transform their properties into passive income sources through short-term rentals.',
        'about-p3': 'Today, AltaStays manages properties in São Paulo and surroundings, offering complete service so you have peace of mind and guaranteed profit.',
        'founder-title-marina': 'Founder & Airbnb Superhost',
        'founder-title-artur': 'Co-Founder & Head of Strategy',
        'superhost': 'Superhost',
        'strategy': 'Strategy',
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
        
        // Contact Section
        'contact-title': 'Ready to start?',
        'contact-subtitle': 'Get in touch and discover how much your property can earn',
        'contact-phone': 'Phone',
        'contact-location': 'Location',
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

// Global state
let currentLang = 'pt';
let isInitialized = false;

// DOM elements - will be initialized when DOM is ready
let navToggle, navMenu, navbar, langButtons, contactForm;

// ========================================
// MAIN INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 AltaStays: Initializing application...');
    
    // Initialize DOM references
    initializeDOMReferences();
    
    // Initialize core features
    initializeNavigation();
    initializeScrollEffects();
    initializeLanguageToggle();
    initializeContactForm();
    
    // Initialize WOW effects (reduced for mobile performance)
    if (!isMobileDevice()) {
        initializeWowEffects();
    }
    
    // Set initial language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('en')) {
        setLanguage('en');
    } else {
        updateTranslations();
    }
    
    isInitialized = true;
    console.log('✅ AltaStays: Application initialized successfully');
});

// ========================================
// DOM REFERENCES INITIALIZATION
// ========================================

function initializeDOMReferences() {
    navToggle = document.getElementById('navToggle');
    navMenu = document.getElementById('navMenu');
    navbar = document.getElementById('navbar');
    langButtons = document.querySelectorAll('.lang-btn');
    contactForm = document.getElementById('contactForm');
    
    // Validate critical elements
    if (!navToggle || !navMenu) {
        console.error('❌ Critical navigation elements not found');
    }
    if (!contactForm) {
        console.warn('⚠️ Contact form not found');
    }
}

// ========================================
// MOBILE DETECTION
// ========================================

function isMobileDevice() {
    return window.innerWidth <= 768 || 
           /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// ========================================
// NAVIGATION SYSTEM
// ========================================

function initializeNavigation() {
    console.log('📱 Initializing navigation...');
    
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', toggleMobileMenu);
        
        // Set ARIA attributes
        navToggle.setAttribute('aria-expanded', 'false');
    }
    
    // Close menu when clicking on links
    if (navMenu) {
        const navLinks = navMenu.querySelectorAll('a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', handleNavLinkClick);
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', handleOutsideClick);
    
    // Handle escape key
    document.addEventListener('keydown', handleEscapeKey);
    
    // Smooth scrolling for all anchor links
    initializeSmoothScrolling();
    
    // Handle window resize
    window.addEventListener('resize', handleWindowResize);
}

function toggleMobileMenu(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const isActive = navMenu.classList.contains('active');
    
    if (isActive) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

function openMobileMenu() {
    navMenu.classList.add('active');
    navToggle.classList.add('active');
    document.body.classList.add('menu-open');
    navToggle.setAttribute('aria-expanded', 'true');
    
    // Focus first menu item for accessibility
    const firstLink = navMenu.querySelector('a');
    if (firstLink) {
        setTimeout(() => firstLink.focus(), 100);
    }
}

function closeMobileMenu() {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
    document.body.classList.remove('menu-open');
    navToggle.setAttribute('aria-expanded', 'false');
}

function handleNavLinkClick(e) {
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    
    if (target) {
        e.preventDefault();
        closeMobileMenu();
        
        // Smooth scroll to target
        const offsetTop = target.offsetTop - 80;
        smoothScrollTo(offsetTop, 1000);
    }
}

function handleOutsideClick(e) {
    if (navToggle && navMenu && 
        !navToggle.contains(e.target) && 
        !navMenu.contains(e.target) &&
        navMenu.classList.contains('active')) {
        closeMobileMenu();
    }
}

function handleEscapeKey(e) {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
        closeMobileMenu();
        navToggle.focus(); // Return focus to toggle button
    }
}

function handleWindowResize() {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768 && navMenu && navMenu.classList.contains('active')) {
        closeMobileMenu();
    }
}

// ========================================
// SMOOTH SCROLLING
// ========================================

function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80;
                smoothScrollTo(offsetTop, 1000);
            }
        });
    });
}

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

// ========================================
// SCROLL EFFECTS
// ========================================

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
        
        // Update navbar
        if (navbar) {
            if (scrollTop > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
        
        // Update scroll progress indicator
        updateScrollProgress();
        
        ticking = false;
    }
}

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

// ========================================
// LANGUAGE SYSTEM
// ========================================

function initializeLanguageToggle() {
    if (langButtons.length === 0) return;
    
    langButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
            
            // Visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

function setLanguage(lang) {
    if (!translations[lang]) {
        console.warn(`Language ${lang} not supported`);
        return;
    }
    
    currentLang = lang;
    
    // Update active language button
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update document language
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    
    // Update all translations
    updateTranslations();
}

function updateTranslations() {
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach((element, index) => {
        setTimeout(() => {
            const key = element.getAttribute('data-translate');
            if (translations[currentLang] && translations[currentLang][key]) {
                // Smooth transition effect
                element.style.opacity = '0.7';
                setTimeout(() => {
                    element.textContent = translations[currentLang][key];
                    element.style.opacity = '1';
                }, 50);
            }
        }, index * 5); // Staggered animation
    });
}

// ========================================
// CONTACT FORM SYSTEM
// ========================================

function initializeContactForm() {
    if (!contactForm) return;
    
    console.log('📝 Initializing contact form...');
    
    // Form submission
    contactForm.addEventListener('submit', handleFormSubmit);
    
    // Real-time validation
    const inputs = contactForm.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Validate all required fields
    const requiredFields = contactForm.querySelectorAll('input[required], select[required]');
    let isFormValid = true;
    
    requiredFields.forEach(field => {
        if (!validateField({ target: field })) {
            isFormValid = false;
        }
    });
    
    if (!isFormValid) {
        showFormMessage(translations[currentLang]['form-error'] || 'Please fix the errors above.', 'error');
        return;
    }
    
    // Show loading state
    const submitButton = contactForm.querySelector('button[type="submit"]');
    setButtonLoading(submitButton, true);
    
    // Simulate form submission
    simulateFormSubmission(data)
        .then(() => {
            showFormMessage(translations[currentLang]['form-success'], 'success');
            contactForm.reset();
            clearAllFieldErrors();
        })
        .catch(() => {
            showFormMessage(translations[currentLang]['form-error'], 'error');
        })
        .finally(() => {
            setButtonLoading(submitButton, false);
        });
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Clear existing error
    clearFieldError(e);
    
    // Validate based on field type
    switch(field.type) {
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (value && !emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Email inválido';
            }
            break;
        case 'tel':
            const phoneRegex = /^[\+]?[1-9][\d]{8,14}$/;
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
    const errorDiv = field.parentNode.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
    }
}

function clearFieldError(e) {
    const field = e.target;
    field.classList.remove('error');
    const errorDiv = field.parentNode.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.textContent = '';
        errorDiv.style.display = 'none';
    }
}

function clearAllFieldErrors() {
    const errorFields = contactForm.querySelectorAll('.error');
    errorFields.forEach(field => {
        field.classList.remove('error');
    });
    
    const errorDivs = contactForm.querySelectorAll('.field-error');
    errorDivs.forEach(div => {
        div.textContent = '';
        div.style.display = 'none';
    });
}

function setButtonLoading(button, isLoading) {
    if (isLoading) {
        button.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.5rem;">
                <div style="width: 20px; height: 20px; border: 2px solid rgba(255,255,255,0.3); border-top: 2px solid white; border-radius: 50%; animation: spin 1s linear infinite;"></div>
                ${currentLang === 'pt' ? 'Enviando...' : 'Sending...'}
            </div>
        `;
        button.disabled = true;
        
        // Add spinner animation if not exists
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
    } else {
        button.innerHTML = `
            <span>Quero saber mais</span>
            <i class="fas fa-arrow-right"></i>
        `;
        button.disabled = false;
    }
}

function simulateFormSubmission(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('📨 Form submitted:', data);
            
            // Create WhatsApp message and open
            createWhatsAppMessage(data);
            
            // Simulate 90% success rate
            if (Math.random() > 0.1) {
                resolve(data);
            } else {
                reject(new Error('Submission failed'));
            }
        }, 2000);
    });
}

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
    // Verified WhatsApp number: +55 11 98148-0492
    const whatsappUrl = `https://wa.me/5511981480492?text=${message}`;
    
    // Open WhatsApp after form success message
    setTimeout(() => {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 2000);
}

function showFormMessage(text, type) {
    // Remove existing message
    const existingMessage = document.querySelector('#form-messages .form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
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
    
    const messagesContainer = document.getElementById('form-messages');
    if (messagesContainer) {
        messagesContainer.appendChild(message);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (message.parentNode) {
                message.style.animation = 'slideOutDown 0.5s ease-out';
                setTimeout(() => message.remove(), 500);
            }
        }, 5000);
    }
}

// ========================================
// WOW EFFECTS (Desktop Only)
// ========================================

function initializeWowEffects() {
    console.log('✨ Initializing WOW effects...');
    
    // Only run on desktop for performance
    if (window.innerWidth <= 768) return;
    
    initializeRevealAnimations();
    initializeTiltEffect();
    initializeMagneticButtons();
    initializeParallaxScrolling();
    initializeFloatingGallery(); // Add floating gallery effects
}

function initializeFloatingGallery() {
    const cards = document.querySelectorAll('.floating-card');
    if (cards.length === 0) return;
    
    // Add parallax classes
    cards.forEach((card, index) => {
        card.classList.add(`parallax-${index + 1}`);
    });
    
    // Parallax scroll effect
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateFloatingCardsParallax();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Mouse move effect for extra interactivity
    const gallery = document.querySelector('.floating-gallery');
    if (gallery) {
        gallery.addEventListener('mousemove', handleGalleryMouseMove);
    }
}

function updateFloatingCardsParallax() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    const cards = document.querySelectorAll('.floating-card');
    cards.forEach((card, index) => {
        const speed = 0.1 + (index * 0.05); // Different speeds for each card
        const yPos = scrolled * speed;
        card.style.setProperty('--parallax-y', `${yPos}px`);
    });
}

function handleGalleryMouseMove(e) {
    const gallery = e.currentTarget;
    const rect = gallery.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const cards = gallery.querySelectorAll('.floating-card');
    cards.forEach((card, index) => {
        const speed = 0.02 + (index * 0.01);
        const x = mouseX * speed;
        const y = mouseY * speed;
        
        card.style.transform += ` translate(${x}px, ${y}px)`;
    });
}

// Add card click effects
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.floating-card');
    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            // Add click animation
            card.style.transform += ' scale(0.95)';
            setTimeout(() => {
                card.style.transform = card.style.transform.replace(' scale(0.95)', '');
            }, 150);
            
            // Could open lightbox or navigate to gallery page
            console.log(`🏠 Clicked apartment ${index + 1}`);
        });
    });
});


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
                
                // Counter animation for stats
                if (entry.target.classList.contains('stat-number')) {
                    animateCounter(entry.target);
                }
                
                observer.unobserve(entry.target);
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
        .comparison-container,
        .process-steps-horizontal,
        .contact-content,
        .stat-number,
        .testimonial
    `);
    
    elementsToAnimate.forEach(el => observer.observe(el));
}

function animateCounter(element) {
    const target = parseInt(element.textContent.replace(/\D/g, ''));
    if (isNaN(target)) return;
    
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

function initializeTiltEffect() {
    const tiltElements = document.querySelectorAll('.service-card, .stat-card, .step-horizontal, .comparison-card');
    
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
    
    const rotateX = deltaY * -5; // Reduced for subtlety
    const rotateY = deltaX * 5;
    
    element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
}

function resetTilt(e) {
    const element = e.currentTarget;
    element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
}

function initializeMagneticButtons() {
    const magneticElements = document.querySelectorAll('.btn-primary, .btn-whatsapp, .service-card');
    
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
    
    const deltaX = (e.clientX - centerX) * 0.1; // Reduced for subtlety
    const deltaY = (e.clientY - centerY) * 0.1;
    
    element.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.02)`;
}

function resetMagnetic(e) {
    const element = e.currentTarget;
    element.style.transform = 'translate(0px, 0px) scale(1)';
}

function initializeParallaxScrolling() {
    const parallaxElements = [
        { selector: '.bg-circle-1', speed: 0.3 },
        { selector: '.bg-circle-2', speed: 0.2 },
        { selector: '.hero-img', speed: 0.1 }
    ];
    
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                
                parallaxElements.forEach(({ selector, speed }) => {
                    const elements = document.querySelectorAll(selector);
                    elements.forEach(element => {
                        const yPos = -(scrolled * speed);
                        element.style.transform = `translateY(${yPos}px)`;
                    });
                });
                
                ticking = false;
            });
            ticking = true;
        }
    });
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// ========================================
// PERFORMANCE OPTIMIZATIONS
// ========================================

// Lazy load images when they come into view
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Preload critical resources
function preloadCriticalResources() {
    const criticalResources = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    ];
    
    criticalResources.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = url;
        document.head.appendChild(link);
    });
}

// ========================================
// ERROR HANDLING
// ========================================

window.addEventListener('error', function(e) {
    console.error('🚨 JavaScript Error:', e.error);
    // Could send to analytics service in production
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('🚨 Unhandled Promise Rejection:', e.reason);
    // Could send to analytics service in production
});

// ========================================
// EXPORTS FOR GLOBAL ACCESS
// ========================================

window.AltaStays = {
    setLanguage,
    toggleMobileMenu,
    initializeWowEffects,
    isMobileDevice
};

// ========================================
// CSS ANIMATIONS (Injected via JS)
// ========================================

function injectCriticalAnimations() {
    const animationStyles = document.createElement('style');
    animationStyles.textContent = `
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
        
        @keyframes slideOutDown {
            to {
                opacity: 0;
                transform: translateY(20px);
            }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        .reveal-animation {
            animation: slideInUp 0.8s ease-out forwards;
        }
        
        body.menu-open {
            overflow: hidden;
            position: fixed;
            width: 100%;
            height: 100vh;
        }
        
        .error {
            border-color: #EF4444 !important;
            background-color: rgba(239, 68, 68, 0.05) !important;
        }
        
        @media (prefers-reduced-motion: reduce) {
            * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }
    `;
    document.head.appendChild(animationStyles);
}

// Initialize critical animations
injectCriticalAnimations();

console.log('🎉 AltaStays JavaScript loaded successfully!');
