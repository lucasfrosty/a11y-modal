# a11y modal
This is an implementation of a modal that is always focused when it is opened, preventing the Keyboard Trap.

## TODO list:
- [x] Create the modal button
- [x] Create the modal itself
- [x] Maintain a variable to keep track of the focused element before the modal opens
- [x] Focus on the modal
- [x] Keep track of the candidates to be the next focusable element (use querySelectorAll)
- [x] Get the first and the last one of the above list
- [x] If the user is on the last element and press tab, focus back to the first one
- [x] If the user is on the first element and press shift + tab, focus to the last one
- [x] If the user press esc, close the modal
- [x] If the user clicks on the background, also close the modal
- [ ] Create the React version of it