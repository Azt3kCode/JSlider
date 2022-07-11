let sliderConfig = {
    items: 10,
    show: 4,
    move: 1,
    width: 1000
}

for (let i = 0; i < sliderConfig.items; i++) {
    const card = document.createElement('div');
    card.className = 'slider__card';

    // Create your card element

    carrousel.appendChild(card);
}

function experiment() {
    const items = document.getElementById('items');
    const show = document.getElementById('show');
    const move = document.getElementById('move');
    const width = document.getElementById('width');

    if (items.value > 0)
        sliderConfig.items = parseInt(items.value);

    if (show.value > 0)
        sliderConfig.show = parseInt(show.value);
    
    if (move.value > 0)
        sliderConfig.move = parseInt(move.value);
    
    if (width.value > 0)
        sliderConfig.width = parseInt(width.value);

    while (carrousel.firstChild) {
        carrousel.removeChild(carrousel.firstChild);
    }

    for (let i = 0; i < sliderConfig.items; i++) {
        const card = document.createElement('div');
        card.className = 'slider__card';

        // Create your card element

        carrousel.appendChild(card);
    }
    items.value = '';
    show.value = '';
    move.value = '';
    width.value = '';

    change();
}