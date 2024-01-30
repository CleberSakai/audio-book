const botaoPlayPause = document.getElementById("play-pause");
const audioCapitulo = document.getElementById("audio-capitulo");
const botaoVoltar = document.getElementById("anterior");
const botaoAvancar = document.getElementById("proximo");
const nomeCapitulo = document.getElementById("capitulo");
var isPlay = false
let currentTrack = 1;
const numberTrack = 10;


function handleTrack() {
    if (isPlay) {
        audioCapitulo.pause();
        botaoPlayPause.classList.add('bi-play-circle-fill');
        botaoPlayPause.classList.remove('bi-pause-circle-fill');
    } else {
        audioCapitulo.play();
        botaoPlayPause.classList.remove('bi-play-circle-fill');
        botaoPlayPause.classList.add('bi-pause-circle-fill');
    }
    isPlay = !isPlay;
}

function trocarNomeFaixa(){
    isPlay = false
    handleTrack(); 
    nomeCapitulo.innerText = "capítulo " + currentTrack
}

function nextTrack() {
    if (currentTrack === numberTrack) {
        currentTrack = 1;

    } else {
        currentTrack = currentTrack + 1
    }

    audioCapitulo.src = `./books/dom-casmurro/${currentTrack}.mp3` 
    trocarNomeFaixa();
}

function previousTrack() {
    if (currentTrack === 1) {
        currentTrack = numberTrack;

    } else {
        currentTrack = currentTrack - 1
    }

    audioCapitulo.src = `./books/dom-casmurro/${currentTrack}.mp3`
    trocarNomeFaixa();
}

botaoPlayPause.addEventListener('click', handleTrack);
botaoAvancar.addEventListener('click', nextTrack);
botaoVoltar.addEventListener("click", previousTrack);


