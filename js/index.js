window.onload = function(){
    
    const _PP_MUSIC_EL = document.getElementById('playPause');
    _PP_MUSIC_EL.addEventListener('click', playPauseFunction);

    if ( _PP_MUSIC_EL.checked ){
        const _AUDIO_TAG = document.getElementsByTagName('audio')[0];
        _AUDIO_TAG.pause()
    };
    
}

function startGamePlay() {
    const _GAME_DIFICULTY = document.querySelector('#selectDificuly select').value;
    
    window.location.href = 'pages/gameplay.html?' + _GAME_DIFICULTY;
}

function playPauseFunction(){
    const _AUDIO_TAG = document.getElementsByTagName('audio')[0];
    if(this.checked) {
        _AUDIO_TAG.pause();
    } else {
        _AUDIO_TAG.play();
    }
}