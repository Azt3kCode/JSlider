const rootElement = document.documentElement;

function change() {
    const minWidthCard = `${sliderConfig.width / sliderConfig.show - 10}px`;
    const widthSlider = `${sliderConfig.width}px`;

    rootElement.style.setProperty('--widthCard', minWidthCard);
    rootElement.style.setProperty('--widthSlider', widthSlider);
    
    if (position != 0) {
        position = 1;
    }
    moveTo(-1);
}

change();