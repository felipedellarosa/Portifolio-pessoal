function hamburg() {
    const navbar = document.querySelector('.dropdown');
    navbar.style.transform = 'translateY(0px)';
}

function cancel() {
    const navbar = document.querySelector('.dropdown');
    navbar.style.transform = 'translateY(-500px)';
}

const texts = [
    "Desenvolvedor",
    "Programador",
];

let speed = 100;

const textElements = document.querySelector('.typewriter-text');

let textIndex = 0;
let characterIndex = 0;

function typeWriter() {
    if (characterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    }
    else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    }
    else {
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

window.onload = typeWriter;
function createStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 150;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = `star ${['small', 'small', 'medium', 'large'][Math.floor(Math.random() * 4)]}`;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 5 + 's';
        starsContainer.appendChild(star);
    }
}

// Gerar partículas de poeira cósmica
function createCosmicDust() {
    const dustContainer = document.getElementById('cosmic-dust');

    setInterval(() => {
        const particle = document.createElement('div');
        particle.className = 'dust-particle';
        particle.style.left = '-10px';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = '0s';
        particle.style.animationDuration = (Math.random() * 15 + 15) + 's';
        dustContainer.appendChild(particle);

        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 30000);
    }, 5000);
}



// Efeito parallax sutil no movimento do mouse
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    const nebulas = document.querySelectorAll('.nebula');
    nebulas.forEach((nebula, index) => {
        const speed = (index + 1) * 0.5;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        nebula.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Inicializar todas as funcionalidades
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    createCosmicDust();
    typewriterEffect();
    setupMobileMenu();
});