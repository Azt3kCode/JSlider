const slider = document.getElementById('slider');

const carrousel = document.createElement('div');
carrousel.className = 'carrousel';

let position = 0;

const leftBtn = document.createElement('button');
leftBtn.className = 'slider__btn left';
leftBtn.onclick = function() {
    moveTo(-1);
}
leftBtn.innerHTML = '<';

const rightBtn = document.createElement('button');
rightBtn.className = 'slider__btn right';
rightBtn.onclick =  function() {
    moveTo(1);
}
rightBtn.innerHTML = '>';

slider.appendChild(carrousel);
slider.appendChild(leftBtn);
slider.appendChild(rightBtn);

function moveTo(side) {
    if (position <= sliderConfig.move && side == -1) {
        leftBtn.style.display = 'none';
    } else {
        leftBtn.style.display = 'block';
    }

    if (position >= (sliderConfig.items - sliderConfig.show - sliderConfig.move) && side == 1) {
        rightBtn.style.display = 'none';
    } else {
        rightBtn.style.display = 'block';
    }

    if ((position <= 0 && side == -1) || (position >= (sliderConfig.items - sliderConfig.show) && side == 1)) {
        return;
    }

    if (side == 1) {
        position = position + sliderConfig.move;
    } else {
        position = position - sliderConfig.move;
    }

    carrousel.style.transform = `translateX(${-(Math.floor(sliderConfig.width / sliderConfig.show)) * position}px)`;
}

moveTo(-1);