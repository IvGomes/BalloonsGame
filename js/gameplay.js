//...timer das dificuldades
const _TIMER_EASY = 120;
const _TIMER_NORMAL = 60;
const _TIMER_HARD = 30;
//...pega o id da dificuldade
const _GAME_DIFICULTY = parseInt((window.location.search).replace('?', ''));
//...pega local dos timers
const _TIMER_INDICATOR = document.getElementsByClassName('timer');

window.onload = function (){
    //...verifica a dificuldade e seta o timer
    if( _GAME_DIFICULTY === 1 ) {

        _TIMER_INDICATOR[0].innerHTML = _TIMER_EASY + ' segundos';
        _TIMER_INDICATOR[1].innerHTML = _TIMER_EASY;

    } else if ( _GAME_DIFICULTY === 2 ) {

        _TIMER_INDICATOR[0].innerHTML = _TIMER_NORMAL + ' segundos';
        _TIMER_INDICATOR[1].innerHTML = _TIMER_NORMAL;

    } else if ( _GAME_DIFICULTY === 3 ) {

        _TIMER_INDICATOR[0].innerHTML = _TIMER_HARD + ' segundos';
        _TIMER_INDICATOR[1].innerHTML = _TIMER_HARD;

    }
}

