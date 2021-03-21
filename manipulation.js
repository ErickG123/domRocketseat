// Manipulando conteúdo
// textContent
const element = document.querySelector('h1');
const element2 = document.querySelector('h2');

element.textContent = "Olá";
element2.textContent += " - Olá";

console.log(element.textContent);
console.log(element2.textContent);

// innerText
// Troca o texto interno do elemento
element.innerText = "Olá Devs!";

// innerHTML
// Troca o HTML interno do elemento
const small = document.querySelector('small');

small.innerHTML = "Olá Devs! <span>Tudo bem?</span>";

// valeu
const input = document.querySelector('input');

console.log(input.value);

input.value = "Valor"
console.log(input.value);

// Atributos
const header = document.querySelector('header');
header.setAttribute('id', 'header');

const headerId = document.querySelector('#header');
console.log(headerId);
console.log(headerId.getAttribute('id'));

headerId.removeAttribute('id');

headerId.setAttribute('class', 'bg header');