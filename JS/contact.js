        // Manejo del formulario
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const form = this;
            const submitBtn = form.querySelector('.submit-btn');
            const successMessage = document.getElementById('successMessage');
            const errorMessage = document.getElementById('errorMessage');
            
            // Ocultar mensajes previos
            successMessage.style.display = 'none';
            errorMessage.style.display = 'none';
            
            // Mostrar estado de carga
            form.classList.add('loading');
            submitBtn.textContent = 'Enviando...';
            
            // Simular envío del formulario
            setTimeout(() => {
                // Aquí iría la lógica real de envío
                const success = 1; // 90% de éxito para demo
                
                form.classList.remove('loading');
                submitBtn.textContent = 'Enviar Mensaje';
                
                if (success) {
                    successMessage.style.display = 'block';
                    form.reset();
                    
                    // Animación de éxito
                    const illustration = document.querySelector('.illustration');
                    illustration.style.transform = 'scale(1.1)';
                    illustration.innerHTML = '✅';
                    setTimeout(() => {
                        illustration.style.transform = 'scale(1)';
                        illustration.innerHTML = '🎯';
                    }, 2000);
                    
                } else {
                    errorMessage.style.display = 'block';
                }
                
                // Scroll al mensaje
                if (success || !success) {
                    document.querySelector('.form-section').scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                    });
                }
            }, 2000);
        });

        // Efectos de foco en los inputs
        const inputs = document.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'translateX(5px)';
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'translateX(0)';
            });
        });

        // Animación de entrada para elementos
        function animateOnScroll() {
            const elements = document.querySelectorAll('.form-group, .info-item');
            elements.forEach((element, index) => {
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }

        // Inicializar animaciones
        window.addEventListener('load', () => {
            // Ocultar elementos inicialmente
            const elements = document.querySelectorAll('.form-group, .info-item');
            elements.forEach(element => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'all 0.5s ease';
            });
            
            // Animar después de un breve delay
            setTimeout(animateOnScroll, 500);
        });

        // Efecto parallax suave en el scroll
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const shapes = document.querySelectorAll('.bg-shape');
            
            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 0.1;
                shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.05}deg)`;
            });
        });

        // Validación en tiempo real
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                if (this.checkValidity()) {
                    this.style.borderColor = 'var(--verde-claro)';
                } else {
                    this.style.borderColor = '#ffcdd2';
                }
            });
        });