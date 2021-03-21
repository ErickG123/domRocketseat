// Criando e adicionando elementos
// createElement
const div = document.createElement('div');
div.innerText = "Olá Devs! Usando Append";

const div2 = document.createElement('div');
div2.innerText = "Olá Devs! Usando Prepend";

// append
// Adiciona o elemento depois de alguma coisa 
const body = document.querySelector('body');

body.append(div);

// prepend
// Adiciona o elemento antes de alguma coisa
body.prepend(div2);

// insertBefore
// Insere um elemento antes de outro elemento
const div3 = document.createElement('div');
div3.innerText = "Olá Devs! Usando insertBefore"
const script = document.querySelector('body script');

body.insertBefore(div3, script)