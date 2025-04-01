// document.addEventListener('click', function(event) {
//   console.log('Clicked at:', event.clientX, event.clientY);
//   alert(`Clicked at coordinates: ${event.clientX}, ${event.clientY}`);
// });

function simulateClick(x = 0, y = 0) {
    const clickEvent = new MouseEvent('click', {
      clientX: x,
      clientY: y,
      bubbles: true,
      cancelable: true
    });
    document.dispatchEvent(clickEvent);
}

setInterval(() => {
    if(document.querySelectorAll('.cb-lb-t').length > 0) {
        const clickableElements = document.querySelectorAll('.cb-lb-t');
        const randomIndex = Math.floor(Math.random() * clickableElements.length);
        const element = clickableElements[randomIndex];
        const rect = element.getBoundingClientRect();
        const x = rect.left + Math.random() * rect.width;
        const y = rect.top + Math.random() * rect.height;
        simulateClick(x, y);
    }
}, 1000);