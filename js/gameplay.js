//...timer das dificuldades
const _TIMER_EASY = 120;
const _TIMER_NORMAL = 60;
const _TIMER_HARD = 30;
//...quantidade de baloes
const _N_BALLOONS = 10;
let _N_BALLOONS_POW = 0;
//...pega o id da dificuldade
const _GAME_DIFICULTY = parseInt((window.location.search).replace('?', ''));
//...pega local dos timers
const _TIMER_INDICATOR = document.getElementsByClassName('timer');

window.onload = function (){
    //...verifica a dificuldade e seta o timer
    if( _GAME_DIFICULTY === 1 ) {

        _TIMER_INDICATOR[0].innerHTML = _TIMER_EASY + ' segundos';
        _TIMER_INDICATOR[1].innerHTML = _TIMER_EASY;
        document.getElementsByClassName('forPop')[0].innerHTML = _N_BALLOONS;

    } else if ( _GAME_DIFICULTY === 2 ) {

        _TIMER_INDICATOR[0].innerHTML = _TIMER_NORMAL + ' segundos';
        _TIMER_INDICATOR[1].innerHTML = _TIMER_NORMAL;


    } else if ( _GAME_DIFICULTY === 3 ) {

        _TIMER_INDICATOR[0].innerHTML = _TIMER_HARD + ' segundos';
        _TIMER_INDICATOR[1].innerHTML = _TIMER_HARD;

    }

    //...add informação sobre a quantidade de baloes para estourar no contador
    document.getElementsByClassName('forPop')[0].innerHTML = _N_BALLOONS;

    //...add informação sobre a quantidade inicial de baloes estourados
    document.getElementsByClassName('popped')[0].innerHTML = _N_BALLOONS_POW;

    init();
    addClickEvent();
    
}

function init() {
    for (let i = 1; i <= _N_BALLOONS; i++) {
        const _EL_BALLONS = document.createElement('li');
        const _EL_IMG_BALLONS = document.createElement('img');
        const _EL_TARGET = document.getElementsByClassName('balloonList');
        
        _EL_IMG_BALLONS.src = "../imagens/balao_azul_pequeno.png";
        _EL_BALLONS.appendChild(_EL_IMG_BALLONS);

        _EL_TARGET[0].appendChild(_EL_BALLONS);
    }
}

function addClickEvent() {
    const _BALLOONS_NODE = document.querySelectorAll('.balloonList li');

    for (let i = 0; i < _BALLOONS_NODE.length; i++) {
        
        _BALLOONS_NODE[i].addEventListener('click', function(){
            let c = this.childNodes;
            c[0].src = "../imagens/balao_azul_pequeno_estourado.png";
        })
        
    }
}