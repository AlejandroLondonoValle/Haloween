// Generar fantasmas flotantes en la página
function createGhost() {
    const ghost = document.createElement('div');
    ghost.classList.add('ghost');
    ghost.style.left = `${Math.random() * 100}%`;  // Posición aleatoria horizontal
    ghost.style.animationDuration = `${Math.random() * 6 + 4}s`;  // Duración aleatoria de la animación
    ghost.style.animationDelay = `${Math.random() * 2}s`;  // Retraso aleatorio
    document.querySelector('.ghosts-container').appendChild(ghost);
}

// Generar fantasmas continuamente
setInterval(createGhost, 500);

// Al cargar la página, generamos algunos fantasmas iniciales
window.onload = () => {
    for (let i = 0; i < 10; i++) {
        createGhost();
    }
};

// Función de la caja misteriosa
function openBox() {
    const box = document.querySelector('.mystery-box');
    box.innerHTML = `<h3>¡Oh no! ¡Algo te atrapó dentro!</h3>`;
    box.style.backgroundColor = "#e74c3c";
    box.style.color = "#fff";
    box.classList.add('shake');

    // Sonido de susto (puedes cambiarlo por uno más apropiado)
    const audio = new Audio('https://www.soundjay.com/button/beep-08b.wav');
    audio.play();
}

// Agregar un efecto de "temblor" a la caja misteriosa
document.querySelector('.mystery-box').addEventListener('animationend', () => {
    document.querySelector('.mystery-box').classList.remove('shake');
});



