const button = document.querySelector('#openModal');
const modal = document.querySelector('.modal-wrapper');

button.addEventListener('click', function () {
    modal.classList.remove('invisible');
})

document.addEventListener('keydown', function (event) {
    if (event.keyCode == 27) {
        modal.classList.add('invisible');
    }
})