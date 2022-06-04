const sliderContainer = document.querySelector('.sliderContainer');
const rightSlide = document.querySelector('.rightSlide');
const leftSlide = document.querySelector('.leftSlide');
const upButton = document.querySelector('.upButton');
const downButton = document.querySelector('.downButton');
const slidesLength = rightSlide.querySelectorAll('.projectImgContainer').length;

console.log(slidesLength);


let activeSlideIdx = 0;

leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    if(direction === 'up') {
        activeSlideIdx++
        if(activeSlideIdx > slidesLength - 1) {
            activeSlideIdx = 0;
        }
    } else if(direction === 'down')  {
        activeSlideIdx--
        if(activeSlideIdx < 0) {
            activeSlideIdx = slidesLength -1
        }

    } 

    rightSlide.style.transform = `translateY(-${activeSlideIdx * sliderHeight}px)`;
    leftSlide.style.transform = `translateY(${activeSlideIdx * sliderHeight}px)`;
}
