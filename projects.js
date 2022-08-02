
const sliderContainer = document.querySelector('.sliderContainer');
const rightSlide = document.querySelector('.rightSlide');
const leftSlide = document.querySelector('.leftSlide');
const upButton = document.querySelector('.upButton');
const leftBtn = document.querySelector('.leftBtn');
const rightBtn = document.querySelector('.rightBtn');
const downButton = document.querySelector('.downButton');
const slidesLength = rightSlide.querySelectorAll('.projectImgContainer').length;
const slidesMobLength = leftSlide.querySelectorAll('.project').length;

let activeSlideIdx = 0;
let activeSlideMobIdx = 0;


// Get width container on resize
const containerWidth = new ResizeObserver((entries) => {
    for (const entry of entries) {
        const dimensions = entry.contentRect;   
        
        if(dimensions.width > 768){
            leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`;
            leftSlide.style.transform = 'translateY(0)';
            rightSlide.style.transform = 'translateY(0)';
        }else {
            leftSlide.style.top = 0;
        }
    }
  });

  // Observe width of page container
  containerWidth.observe(sliderContainer);


if(sliderContainer.clientWidth > 768){
    leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`;
}

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

leftBtn.addEventListener('click', () => changeSlideHor('left'));
rightBtn.addEventListener('click', () => changeSlideHor('right'));


// Function to move slider vertically
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


// Function to move slider horizontally  
const changeSlideHor = (direction) => {
    const sliderWidth = sliderContainer.clientWidth;

    if(direction === 'right') {
        activeSlideMobIdx++
        if(activeSlideMobIdx > slidesMobLength -1) {
            activeSlideMobIdx = 0;
        }
    } else if(direction === 'left')  {
        activeSlideMobIdx--
        if(activeSlideMobIdx < 0) {
            activeSlideMobIdx = slidesMobLength -1;
        }

    } 
    leftSlide.style.transform = `translateX(-${activeSlideMobIdx * sliderWidth}px)`;
}
