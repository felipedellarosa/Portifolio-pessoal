function hamburg(){
    const navbar = document.querySelector('.dropdown');
    navbar.style.transform = 'translateY(0px)';
}

function cancel(){
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