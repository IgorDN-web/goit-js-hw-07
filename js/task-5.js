const button = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const body = document.body;

button.addEventListener('click', () => {
  const color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  body.style.backgroundColor = color;
  colorSpan.textContent = color;
});
