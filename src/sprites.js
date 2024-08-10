export { renderPokemon };
import chikoritaSprite from './chikorita.png';
import squirtleSprite from './squirtle.png';

function renderPokemon() {
    const element = document.createElement('div');
    element.classList.add('pokemon');

    const chikorita = new Image();
    chikorita.classList.add('chikorita');
    chikorita.src = chikoritaSprite;

    const squirtle = new Image();
    squirtle.classList.add('squirtle');
    squirtle.src = squirtleSprite;

    element.appendChild(chikorita);
    element.appendChild(squirtle);

    return element;
}