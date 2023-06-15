import { State, getState } from "./components/usestate.js";
import { decrement, increment, dispatch, reset } from "./components/helper.js";

// Log the initial state
console.log(getState());

// Getting  DOM elements
const number = document.querySelector('[data-number]');
const subtract = document.querySelector('[data-subtract]');
const add = document.querySelector('[data-add]');
const resetButton = document.querySelector('[data-reset]');
const overlay = document.querySelector('[data-overlay]');

// Handler for subtract button click
const subtractHandler = () => {
  // Dispatch decrement action
  dispatch(decrement());
  // Update the number value in the DOM
  number.value = State.value;
  // Enable the add button if it was disabled
  if (add.disabled === true) {
    add.disabled = false;
  }
};

// Handler for add button click
const addHandler = () => {
  // Dispatch increment action
  dispatch(increment());
  // Update the number value in the DOM
  number.value = State.value;
  // Enable the subtract button if it was disabled
  if (subtract.disabled === true) {
    subtract.disabled = false;
  }
};

// Handler for reset button click
const resetHandler = () => {
  // Check if the number value is already 0, no need to reset
  if (parseInt(number.value) === 0) {
    return;
  }
  // Dispatch reset action
  dispatch(reset());
  // Update the number value in the DOM
  number.value = State.value;
  // Show the overlay message
  overlay.show();
  // Close the overlay after 1.5 seconds
  setTimeout(() => {
    overlay.close();
  }, 1500);
};

// Add event listeners to the buttons
subtract.addEventListener('click', subtractHandler);
add.addEventListener('click', addHandler);
resetButton.addEventListener('click', resetHandler);
