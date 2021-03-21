// Manipulando o estilo
// style
const element = document.querySelector('body');

element.style.backgroundColor = "#f9f3d2";
console.log(element.style.backgroundColor);

// classList
// add -> Adiciona classes
element.classList.add('active', 'green');

console.log(element.classList);

// remove -> Remove classes
element.classList.remove('active');

// toggle -> Remove se tiver a classe
// toggle -> Adiciona se não tiver a classe
element.classList.toggle('active');