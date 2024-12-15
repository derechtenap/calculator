const BUTTONS = document.querySelectorAll('button');

addEventListener('click', (e) => {

    // Ignore clicks between buttons...
    if (e.target.nodeName === 'BUTTON') {

        const BUTTON_TYPE = e.target.dataset.type

        // Check for button type
        if (BUTTON_TYPE === "number") {

            console.info("It seems to be a number", e.target.dataset)
        }

        if (BUTTON_TYPE === "operator") {
            console.info("It seems to be a operator", e.target.dataset)
        }

        if (BUTTON_TYPE === "equals") {
            console.info("It seems to be equals", e.target.dataset)
        }

        if (BUTTON_TYPE === "clear") {
            console.info("It seems to be clear", e.target.dataset)
        }
    }
});