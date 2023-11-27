const submitBtn = document.querySelector('.submit-btn');
const successMessage = document.querySelector('.success-message');
const mainText = document.querySelector('.main-text');
const dismissBtn = document.querySelector('.dismiss-btn');
const mainImg = document.querySelector('.main-img');
const successIMG = document.querySelector('.success-icon');

mainText.style.display = 'flex';
successMessage.style.display = 'none';
mainImg.style.display = 'block';
successIMG.style.display = 'none';


function toggleDisplay() {
    if (mainText.style.display === 'flex') {
        mainText.style.display = 'none';
        successMessage.style.display = 'flex';
        mainImg.style.display = 'none';
        successIMG.style.display = 'block';
    } else {
        mainText.style.display = 'flex';
        successMessage.style.display = 'none';
        mainImg.style.display = 'block';
        successIMG.style.display = 'none';
    }
}

submitBtn.addEventListener('click', toggleDisplay);
dismissBtn.addEventListener('click', toggleDisplay);