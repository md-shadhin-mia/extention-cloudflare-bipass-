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
    if(document.querySelectorAll("#turnstile-captcha").length > 0) {
        const clickableElements = document.querySelectorAll("#turnstile-captcha");
        // get area of the first element
        const rect = clickableElements[0].getBoundingClientRect();
        // get random x and y coordinates within the element's area

        const x = rect.left + 35 * rect.width;
        const y = rect.top + 35 * rect.height;
        // simulate a click at the random coordinates
        console.log(`Clicked at coordinates: ${x}, ${y}`);
        // alert(``);
        simulateClick(x, y);
    }
}, 1000);