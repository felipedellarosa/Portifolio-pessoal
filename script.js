    // Função para menu hamburguer
    function hamburg(){
        const navbar = document.querySelector('.dropdown');
        navbar.style.transform = 'translateY(0px)';
    }

    function cancel(){
        const navbar = document.querySelector('.dropdown');
        navbar.style.transform = 'translateY(-500px)';
    }

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.dropdown a').forEach(link => {
        link.addEventListener('click', () => {
            cancel();
        });
    });

    // Animação de digitação
    const texts = [
        "Desenvolvedor",
        "Programador",
        "Designer",
        "Freelancer"
    ];

    let speed = 100;
    const textElements = document.querySelector('.typewriter-text');
    let textIndex = 0;
    let characterIndex = 0;

    function typeWriter(){
        if(characterIndex < texts[textIndex].length){
            textElements.innerHTML += texts[textIndex].charAt(characterIndex);
            characterIndex++;
            setTimeout(typeWriter, speed);
        }
        else{
            setTimeout(eraseText, 1000);
        }
    }

    function eraseText(){
        if(textElements.innerHTML.length > 0){
            textElements.innerHTML = textElements.innerHTML.slice(0, -1);
            setTimeout(eraseText, 50);
        }
        else{
            textIndex = (textIndex + 1) % texts.length;
            characterIndex = 0;
            setTimeout(typeWriter, 500);
        }
    }

    // Cursor piscando
    const cursor = document.getElementById('cursor');
    setInterval(() => {
        cursor.style.visibility = (cursor.style.visibility === 'visible') ? 'hidden' : 'visible';
    }, 500);

    // Inicializar animação de digitação
    window.onload = typeWriter;

    // Smooth scroll para navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Função para download do CV
    function downloadCV() {
        // Aqui você pode adicionar a lógica para download do CV
        alert('Download do CV será implementado em breve!');
    }

    // Formulário de contato
    document.querySelector('.contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Aqui você pode adicionar a lógica para enviar o email
        // Por exemplo, usando EmailJS ou um backend próprio
        
        alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso. Retornarei em breve!`);
        this.reset();
    });

    // Navbar transparente/opaca baseada no scroll
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(0, 0, 0, 0.95)';
        } else {
            nav.style.background = 'rgba(0, 0, 0, 0.9)';
        }
    });

    // Highlight do link ativo na navegação
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-container .links a');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });

    // Efeito parallax sutil
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.main-container .image');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });