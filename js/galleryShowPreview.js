// Select all thumbnail images
let thumbnails = document.querySelectorAll('.img-container img');

let popupContainer = document.querySelector('.image-popup');
let popupImg = popupContainer.querySelector('img');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function () {
        popupImg.src = this.src;
        popupContainer.style.display = 'block';
    });
});

// Close x button
let closeButton = popupContainer.querySelector('span');

closeButton.addEventListener('click', function () {
    popupContainer.style.display = 'none';
});