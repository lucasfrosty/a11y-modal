const toggleModalButton = document.querySelector('#toggle-modal');
const modal = document.querySelector('#modal');

toggleModalButton.addEventListener('click', () => {
  modal.classList.toggle('hidden');
});

modal.addEventListener('click', () => {
  modal.classList.toggle('hidden');
});
