//...timer das dificuldades
const _TIMER_EASY = 120;
const _TIMER_NORMAL = 60;
const _TIMER_HARD = 30;
//...quantidade de baloes
const _N_BALLOONS = 30;
let _N_BALLOONS_POW = 0;
//...pega o id da dificuldade
const _GAME_DIFICULTY = parseInt((window.location.search).replace('?', ''));
//...pega local dos timers
const _TIMER_INDICATOR = document.getElementsByClassName('timer');
let countdown;

window.onload = function (){
    document.getElementsByClassName('forPop')[0].innerHTML = _N_BALLOONS;
    //...verifica a dificuldade e seta o timer
    if( _GAME_DIFICULTY === 1 ) {

        _TIMER_INDICATOR[0].innerHTML = _TIMER_EASY + ' segundos';
        regressCount(_TIMER_EASY);

        //document.getElementsByClassName('forPop')[0].innerHTML = _N_BALLOONS;

    } else if ( _GAME_DIFICULTY === 2 ) {

        _TIMER_INDICATOR[0].innerHTML = _TIMER_NORMAL + ' segundos';
        regressCount(_TIMER_NORMAL);
        //document.getElementsByClassName('forPop')[0].innerHTML = _N_BALLOONS;


    } else if ( _GAME_DIFICULTY === 3 ) {

        _TIMER_INDICATOR[0].innerHTML = _TIMER_HARD + ' segundos';
        regressCount(_TIMER_HARD);
        //document.getElementsByClassName('forPop')[0].innerHTML = _N_BALLOONS;

    }

    //...add informação sobre a quantidade de baloes para estourar no contador
    document.getElementsByClassName('forPop')[0].innerHTML = _N_BALLOONS;

    //...add informação sobre a quantidade inicial de baloes estourados
    document.getElementsByClassName('popped')[0].innerHTML = _N_BALLOONS_POW;

    init();
    addClickEvent('addEvent');
    
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

//contador regressivo
function regressCount(cd) {

    _TIMER_INDICATOR[1].innerHTML = cd;
    countdown = setInterval(() => {
        _TIMER_INDICATOR[1].innerHTML = --cd;
        checkEndGame(cd);
    }, 1000);
    
}

function addClickEvent(status) {
    const _BALLOONS_NODE = document.querySelectorAll('.balloonList li');

    if(status === 'addEvent') {
        for (let i = 0; i < _BALLOONS_NODE.length; i++) {
            _BALLOONS_NODE[i].addEventListener('click', powBalloons);
        }
    }

    if(status === 'remEvent') {
        for (let i = 0; i < _BALLOONS_NODE.length; i++) {
            _BALLOONS_NODE[i].removeEventListener('click', powBalloons);
        }
    }
}

//funcao com conjunto de açoes no momento do estouro do balao
function powBalloons() {
    const c = this.childNodes;
    
    c[0].src = "../imagens/balao_azul_pequeno_estourado.png";
    _N_BALLOONS_POW++;
    document.getElementsByClassName('popped')[0].innerHTML = _N_BALLOONS_POW;

    //remove evento de click do balao clicado
    this.removeEventListener('click', powBalloons);

    //verificar fim de jogo
    checkEndGame();
}

//fim de jogo
function checkEndGame(cd) {
    if(_N_BALLOONS_POW === _N_BALLOONS) {
        clearInterval(countdown);
        alert('Ae! Você venceu!!!');
    }

    if (cd === 0) {
        clearInterval(countdown);
        console.log('Que pena... o tempo acabou!');

        addClickEvent('remEvent');
    }
}