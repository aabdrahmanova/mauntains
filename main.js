let popupButton = document.querySelectorAll('.call-popup');
let popupContainer = document.querySelector('.b-container');
let popup = document.querySelector('.b-popup');
let cancelButton = popup.querySelector('.button-cancel');

popupButton.forEach(function(button) {
    button.addEventListener('click', function() {
        popupContainer.style.display = 'block';
        popup.style.display = 'block';

        cancelButton.addEventListener('click', function() {
            popupContainer.style.display = 'none';
            popup.style.display = 'none';
        });
    });
});
