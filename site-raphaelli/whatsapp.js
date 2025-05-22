const widget = document.getElementById('whatsapp-widget');
const button = document.querySelector('.whatsapp-button');
const close = document.getElementById('close-widget');

button.addEventListener('click', (e) => {
  e.preventDefault();

  const status = getComputedStyle(widget).display;

  if (status === 'none') {
    widget.style.display = 'flex';  
  } else {
    widget.style.display = 'none';  
  }
});

close.addEventListener('click', () => {
  widget.style.display = 'none';
});
