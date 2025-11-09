// Menú móvil y funcionalidades
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Menú móvil
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
    
    // Efecto de partículas
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Posición aleatoria
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        
        // Tamaño aleatorio
        const size = Math.random() * 3 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Opacidad aleatoria
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        
        // Duración de animación aleatoria
        const duration = Math.random() * 10 + 5;
        particle.style.animationDuration = duration + 's';
        
        // Retraso aleatorio
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        particlesContainer.appendChild(particle);
    }
    
    // Configuración de EmailJS
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        // Inicializar EmailJS con tu Public Key
        emailjs.init("0Qk5jaPdh5-Kb6ykf"); // Reemplaza con tu Public Key de EmailJS
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Mostrar estado de envío
            submitBtn.innerHTML = 'Enviando...';
            submitBtn.disabled = true;
            
            // Enviar el formulario usando EmailJS
            emailjs.sendForm(
                'service_96jlfkl',     // Reemplaza con tu Service ID
                'template_5ccf29a',    // Reemplaza con tu Template ID
                this
            )
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('¡Mensaje enviado correctamente! Te contactaré pronto.');
                contactForm.reset();
            })
            .catch(function(error) {
                console.log('FAILED...', error);
                alert('Error al enviar el mensaje. Por favor, intenta nuevamente.');
            })
            .finally(function() {
                // Restaurar el botón
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            });
        });
    }
});

// Función para abrir WhatsApp con mensaje personalizado
function openWhatsApp(message) {
    const phoneNumber = '56966802869'; // Tu número sin el +
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
}