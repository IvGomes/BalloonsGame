//funcoes carregadas no load da pagina
window.onload = function(){
    //pega input checkbox e adiciona evento de clique para verificar se ele esta marcado
    const _PP_MUSIC_EL = document.getElementById('playPause');
    const _AUDIO_TAG = document.getElementsByTagName('audio')[0];
    _PP_MUSIC_EL.addEventListener('click', playPauseFunction);

    //se a check carregar marcada, mantém a musica desativada; se não, dá play na musica
    if ( _PP_MUSIC_EL.checked ) {
        _AUDIO_TAG.pause()
    } else {
        _AUDIO_TAG.play()
    };  
}

//acoes de dar play e pausar a musica no menu inicial
function playPauseFunction(){
    const _AUDIO_TAG = document.getElementsByTagName('audio')[0];
    if(this.checked) {
        _AUDIO_TAG.pause();
    } else {
        _AUDIO_TAG.play();
    }
}

//passa parametro de dificuldade escolhida para a gameplay
function startGamePlay() {
    const _GAME_DIFICULTY = document.querySelector('.select-level input[name="setDif"]:checked').value;
    
    window.location.href = 'pages/gameplay.html?' + _GAME_DIFICULTY;
}


