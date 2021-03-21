// getElementById()
// Pega o elemento pelo id (element)
const titleId = document.getElementById('blog-title');
console.log(titleId);

// getElementsByClassName() 
// Pega o elemento pelo nome da classe (HTMLCollection)
const titleClass = document.getElementsByClassName('title-class');
console.log(titleClass);

// getElementsByTagName()
// Pega o elemento pela tag (HTMLCollection)
const tagName = document.getElementsByTagName('small');
console.log(tagName);

// querySelector()
// Pega o primeiro elemento que tem o seletor (element)
const query = document.querySelector('.selectorAll');
console.log(query);

// querySelectorAll()
// Pega todos os elementos que tem o seletor (Nodelist)
const queryAll = document.querySelectorAll('.selectorAll');
console.log(queryAll);

const queryAllId = document.querySelectorAll('#selector');
console.log(queryAllId);