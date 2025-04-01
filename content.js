document.addEventListener('click', function(event) {
  console.log('Clicked at:', event.clientX, event.clientY);
  alert(`Clicked at coordinates: ${event.clientX}, ${event.clientY}`);
});