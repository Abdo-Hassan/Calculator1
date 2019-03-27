// select elements
const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');

// on click to every button
btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    let number = btn.getAttribute('data-num');
    screen.value += number;
  });
});

// onclick to (=) button
equalBtn.addEventListener('click', () => {
  if (screen.value === '') {
    screen.value = 'Please Enter A Value';
  } else {
    let value = eval(screen.value);
    screen.value = value;
  }
});

// clear the calculator value
clearBtn.addEventListener('click', () => {
  screen.value = '';
});