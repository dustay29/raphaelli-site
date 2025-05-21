const widget = document.getElementById('whatsapp-widget');
const button = document.querySelector('.whatsapp-button');
const close = document.getElementById('close-widget');

button.addEventListener('click', (e) => {
  e.preventDefault();
  widget.style.display = 'flex';
});

close.addEventListener('click', () => {
  widget.style.display = 'none';
});
