// Adicionando eventos via HTML
// onclick -> Quando eu der um click
// ondblclick -> Quando eu der doubleclick
// onmouseover -> Quando eu passar o mouse por cima
function print() {
    console.log('print');   
}

// Eventos do teclado
const input = document.getElementById('event');

// Ativa toda vez que eu digito
input.onkeydown = function () {
    console.log('onkeydown');
}

// Ativa toda vez que eu solto a tecla
input.onkeyup = function () {
    console.log('onkeyup');
}

// Ativa toda vez que eu pressiono a tecla
input.onkeypress = function () {
    console.log('onkeypress');
}

// Adicionando eventos via JS
const h1 = document.querySelector('h1');

// ('evento', função)
// 'click', 'mouseover'
// Forma mais utilizada
h1.addEventListener('mouseover', print);

// Ou
// Sempre considera a ultima função
// Não é muito usada
h1.onclick = print;

// Argumento event
input.onkeypress = function (event) {
    console.log(event.key);
    console.log(event.currentTarget.value);
} 