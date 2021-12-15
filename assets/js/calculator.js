const BUTTON = document.querySelectorAll('button');

addEventListener('click', function (e) {
    // Ignore onClick between buttons...
    if (e.target.nodeName === 'BUTTON') {
        console.info(e.target.className);
    }
});