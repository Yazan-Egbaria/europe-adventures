// range filter

window.onload = function () {
    slideMin();
    slideMax();
    nightFilter();
    participantFilter();
}

const minVal = document.querySelector('.min-val');
const maxVal = document.querySelector('.max-val');
const minTooltip = document.querySelector('.min-tooltip');
const maxTooltip = document.querySelector('.max-tooltip');
const minGap = 0;
const range = document.querySelector('.slider-track');
const sliderMinValue = parseInt(minVal.min);
const sliderMaxValue = parseInt(maxVal.max);

function slideMin() {
    let gap = parseInt(maxVal.value) - parseInt(minVal.value);
    if (gap <= minGap) {
        minVal.value = parseInt(maxVal.value) - minGap;
    }
    minTooltip.innerHTML = "Min $" + minVal.value;
    setArea();
}

function slideMax() {
    let gap = parseInt(maxVal.value) - parseInt(minVal.value);
    if (gap <= minGap) {
        maxVal.value = parseInt(minVal.value) - minGap;
    }
    maxTooltip.innerHTML = "Max $" + maxVal.value;
    setArea();
}

function setArea() {
    const minPercentage = (minVal.value - sliderMinValue) / (sliderMaxValue - sliderMinValue) * 100;
    const maxPercentage = (maxVal.value - sliderMinValue) / (sliderMaxValue - sliderMinValue) * 100;

    range.style.left = minPercentage + "%";
    minTooltip.style.left = minPercentage + "%";
    const adjustedRightPercentage = 100 - maxPercentage + 5;
    range.style.right = adjustedRightPercentage + "%";
    maxTooltip.style.right = adjustedRightPercentage + "%";
}

// Increment and Decrement filter night
function nightFilter () {
    const min = document.querySelector('.nights .min');
    const plus = document.querySelector('.nights .plus');
    const num = document.querySelector('.nights .num');
    
    let a = 1;
    const maxNP = 12;
    
    plus.addEventListener('click', ()=> {
        if (a < maxNP) {
            a++;
            a = (a<10) ? "0" + a : a;
            num.innerHTML = a;
        }
    });
    
    min.addEventListener('click', ()=> {
        if (a > 1) {
            a--;
            a = (a<10) ? "0" + a : a;
            num.innerHTML = a;
        }
    })
}

// Increment and Decrement filter participants
function participantFilter() {
    const min = document.querySelector('.participants .min');
    const plus = document.querySelector('.participants .plus');
    const num = document.querySelector('.participants .num');

    let a = 6;
    const maxNP = 12;

    updateNumDisplay();

    plus.addEventListener('click', () => {
        if (a < maxNP) {
            a++;
            updateNumDisplay();
        }
    });

    min.addEventListener('click', () => {
        if (a > 6) {
            a--;
            updateNumDisplay();
        }
    });

    function updateNumDisplay() {
        num.innerHTML = (a < 10) ? "0" + a : a;
    }
}



