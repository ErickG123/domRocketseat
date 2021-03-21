// Navegando pelos elementos
// Pegando os elementos pais
// parentNode 
const body = document.querySelector('body');
console.log(body.parentNode);

// parantElement
console.log(body.parentElement);

// Pegando os elementos filhos
// childNodes 
// Traz os espaços vazios
console.log(body.childNodes);

// children
// Não traz os espaços vazios
console.log(body.children);

// firstChild
// Pega elementos vazios
// Primeiro elemento
console.log(body.firstChild);

// firstElementChild
// Não pega elementos vazios
// Primeiro elemento
console.log(body.firstElementChild);

// lastChild 
// Pega elementos vazios
// Ultimo elemento
console.log(body.lastChild);

// lastElementChild
// Não pega elementos vazios
// Ultimo elemento
console.log(body.lastElementChild);

// Pegando os elementos irmãos
const header = document.querySelector('header');

// nextSibling
// Pega elementos vazios
// Pega o elemento vizinho
console.log(header.nextSibling);

// nextElementSibling
// Não pega elementos vazios
// Pega o elemento vizinho
console.log(header.nextElementSibling);

// previousSibling
// Pega elementos vazios
// Pega o elemento anterior
console.log(header.previousSibling);

// previousElementSibling
// Não pega elementos vazios
// Pega o elemento anterior
console.log(header.previousElementSibling);