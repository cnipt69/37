const allSlides = document.querySelectorAll(".offer__slide");
const btnPrev = document.querySelector(".offer__slider-prev");
const btnNext = document.querySelector(".offer__slider-next");
const currentCounter = document.querySelector("#current");
const totalCounter = document.querySelector("#total");

let activeSlide = 0;

totalCounter.textContent = ("0" + allSlides.length).slice(-2);

function moveSlider() {
    allSlides.forEach(item => {
        item.style.display = 'none';
    });
    
    if (activeSlide >= allSlides.length) {
        activeSlide = 0; 
    }
    if (activeSlide < 0) {
        activeSlide = allSlides.length - 1; 
    }

    allSlides[activeSlide].style.display = 'block';

    let realNumber = activeSlide + 1;
    currentCounter.textContent = ("0" + realNumber);
}

moveSlider();

btnNext.onclick = function() {
    activeSlide++; 
    moveSlider(); 
};

btnPrev.onclick = function() {
    activeSlide--; 
    moveSlider(); 
};