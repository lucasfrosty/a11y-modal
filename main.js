const toggleModalButton = document.querySelector('#toggle-modal');
const modal = document.querySelector('#modal');
const modalContent = document.querySelector('.modal-content');

toggleModalButton.addEventListener('click', () => {
  modal.classList.toggle('hidden');
});

modal.addEventListener('click', () => {
  modal.classList.toggle('hidden');
});

modalContent.addEventListener('click', (evt) => {
  evt.cancelBubble = true;
})