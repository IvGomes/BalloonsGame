function startGamePlay() {
    const _GAME_DIFICULTY = document.querySelector('#selectDificuly select').value;
    
    window.location.href = 'pages/gameplay.html?' + _GAME_DIFICULTY;
}