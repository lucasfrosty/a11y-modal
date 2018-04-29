const TAB = 9;

const toggleModalButton = document.querySelector('#toggle-modal');
const modal = document.querySelector('#modal');
const modalContent = document.querySelector('.modal-content');

const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';

let focusedElementBeforeModal;
const focusableElements = [...modal.querySelectorAll(focusableElementsString)];
const firstTabStop = focusableElements[0];
const lastTabStop = focusableElements[focusableElements.length - 1];

function keyDownEventListenerCallback(e) {
  if (e.keyCode === TAB) {
    if (e.shiftKey && document.activeElement === firstTabStop) {
      e.preventDefault();
      lastTabStop.focus();
    } else if (document.activeElement === lastTabStop) {
      e.preventDefault();
      firstTabStop.focus();
    }
  }
}

function openModal() {
  modal.classList.toggle('hidden');
  focusedElementBeforeModal = document.activeElement;
  firstTabStop.focus();

  modal.addEventListener('keydown', keyDownEventListenerCallback);
}

function closeModal() {
  focusedElementBeforeModal.focus();
  modal.classList.toggle('hidden');
  modal.removeEventListener('keydown', keyDownEventListenerCallback);
}

toggleModalButton.addEventListener('click', openModal); // open modal
modal.addEventListener('click', closeModal); // close modal

modalContent.addEventListener('click', (evt) => {
  evt.cancelBubble = true;
})