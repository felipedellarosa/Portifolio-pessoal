function hamburg() {
  document.getElementById('menuDropdown').classList.add('show');
}

function cancel() {
  document.getElementById('menuDropdown').classList.remove('show');
}


const texts = [
    "Desenvolvedor",
    "Programador",
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

window.onload = typeWriter;

const cursor = document.getElementById('cursor');
setInterval(() => {
    cursor.style.visibility = (cursor.style.visibility === 'visible') ? 'hidden' : 'visible';
}, 500);
function downloadCV() {
    const link = document.createElement('a');
    link.href = 'Currículo- Felipe Dellarosa.pdf'; // nome do seu arquivo
    link.download = 'Curriculo-Felipe-Dellarosa.pdf';
    link.click();
  }
   // Inicializa EmailJS com sua public key
  emailjs.init("kZwy3CXZW2FdA9_qV");

  // Captura o submit do formulário
  document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm("service_3tqhj0e", "template_wx4xfto", this)
      .then(() => {
        alert('Mensagem enviada com sucesso!');
        this.reset();
      }, (error) => {
        alert('Erro ao enviar. Verifique os dados e tente novamente.');
        console.error('Erro:', error);
      });
  });