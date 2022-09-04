'use strict';
const btnShowModals = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

//Adding event listeners
for (const btnShowModal of btnShowModals) {
  btnShowModal.addEventListener('click', showModal);
}

btnCloseModal.addEventListener('click', hideModal);

overlay.addEventListener('click', hideModal);

document.addEventListener('keydown', event => {
  //console.log(event);
  if (event.key === 'Escape' && !modal.classList.contains('hidden'))
    hideModal();
});

//Functions
function showModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function hideModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
