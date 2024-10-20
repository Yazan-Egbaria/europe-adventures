let cancellation = document.querySelectorAll('.cancel-button');
let popupContainer = document.querySelector('.popup-confirmation');

cancellation.forEach(cancellation => {
    cancellation.addEventListener('click', function (e) {
        e.preventDefault();
        popupContainer.style.display = 'block';
    });
});



let yesButton = popupContainer.querySelector('.white-button');
let noButton = popupContainer.querySelector('.black-button');
let trip = document.querySelectorAll('.trip');
let trips = document.querySelector('.trips');
let headline = document.querySelector('.showonNone');

yesButton.addEventListener('click', function (e) {
    e.preventDefault();
    popupContainer.style.display = 'none';
    
    trip.forEach(function (tripElement) {
        tripElement.style.display = 'none';
        headline.style.display = 'block';
    });
});

noButton.addEventListener('click', function (e) {
    e.preventDefault();
    popupContainer.style.display = 'none';
});

